// callbacks to get and post data to the lists and movies tables

const db = require('../db/dbConnect');
const fallbackLists = require('../db/fallbackData').fallbackLists;

module.exports = {
  getLists(req, res) {
    if (req.session.userId) {
      db.any(`SELECT row_to_json((mls.id, mls.name, COALESCE(array_agg(ms.movie_id), ARRAY[]::INT[])))
              FROM movielistsdb.lists mls
              INNER JOIN movielistsdb.movies ms on ms.movielist_id = mls.id
              WHERE owner_id = $1
              GROUP BY mls.id`, [req.session.userId])
        .then((data) => {
          const lists = data.map(row => ({
            id: row.row_to_json.f1,
            title: row.row_to_json.f2,
            movieIds: row.row_to_json.f3
          }));
          return res.json(lists);
        });
    } else {
      db.any(`SELECT row_to_json((mls.id, mls.name, COALESCE(array_agg(ms.movie_id), ARRAY[]::INT[])))
              FROM movielistsdb.lists mls
              INNER JOIN movielistsdb.movies ms on ms.movielist_id = mls.id
              WHERE creator_cookie = $1
              GROUP BY mls.id`, [req.sessionID])
        .then((data) => {
          if (data.length > 0) {
            const lists = data.map(row => ({
              id: row.row_to_json.f1,
              title: row.row_to_json.f2,
              movieIds: row.row_to_json.f3
            }));
            return res.json(lists);
          } else {
            return res.json(fallbackLists);
          }
        });
    }
  },

  insertList(req, res) {
    const ownerId = req.session.userId;
    const list = req.body;
    db.none('INSERT INTO movielistsdb.lists(id, owner_id, name, creator_cookie) VALUES($1, $2, $3, $4)', [list.id, ownerId, list.title, req.sessionID])
      .then(() => {
        db.tx((t) => {
          const queries = list.movieIds
            .map(movieId => t.none('INSERT INTO movielistsdb.movies(movielist_id, movie_id) VALUES($1, $2)', [list.id, movieId]));
          return t.batch(queries);
        });
      })
      .then(() => res.status(200).json())
      .catch(err => console.log(err));
  },

  deleteList(req, res) {
    db.none('DELETE FROM movielistsdb.movies  WHERE movielist_id = $1', [req.params.id])
      .then(() => db.none('DELETE FROM movielistsdb.lists WHERE id = $1', [req.params.id]))
      .then(() => res.end());
  },

  updateListTitle(req, res) {
    const newTitle = req.body.title;
    db.none('UPDATE movielistsdb.lists SET name = $1 WHERE id = $2', [newTitle, req.params.id])
      .then(() => res.end());
  },

  deleteMovie(req, res) {
    db.none(' DELETE FROM movielistsdb.movies WHERE ctid = (SELECT ctid FROM movielistsdb.movies WHERE movielist_id = $1 AND movie_id = $2 LIMIT 1)', [req.params.id, req.params.movie_id])
      .then(() => res.end());
  },

  addMovie(req, res) {
    db.none('INSERT INTO movielistsdb.movies( movielist_id, movie_id) VALUES($1, $2)', [req.params.id, req.params.movie_id])
      .then(() => res.end());
  }
};
