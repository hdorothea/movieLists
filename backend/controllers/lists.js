// callbacks to get and post data to the lists and movies tables

const db = require('../db/dbConnect');
const fallbackLists = require('../db/fallbackData').fallbackLists;

module.exports = {
  getLists(req, res) {
    db.any(`SELECT (mls.name, array_agg(ms.movie_id))
            FROM movielistsdb.lists mls
            INNER JOIN movielistsdb.movies ms on ms.movielist_id = mls.id
            WHERE owner_id = $1
            OR creator_cookie =$2
            GROUP BY mls.id`, [req.session.userId, req.session.cookie])
      .then((data) => {
        if (data.length > 0) {
          return res.json(data);
        } else {
          return res.json(fallbackLists);
        }
      })
      .catch(err => console.log(err));
  },

  insertList(req, res) {
    console.log('hallo');
    const ownerId = req.session.userId;
    const list = req.body;
    db.none('INSERT INTO movielistsdb.lists(id, owner_id, name, creator_cookie) VALUES($1, $2, $3)', [list.id, ownerId, list.title, req.sessionID])
      .then(() => {
        db.tx((t) => {
          const queries = list.movieIds
            .map(movieId => t.none('INSERT INTO movielistsdb.movies( movielist_id, movie_id) VALUES($1, $2)', [list.id, movieId]));
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
    db.none('DELETE FROM movielistsdb.movies  WHERE movielist_id = $1 AND movie_id =$2', [req.params.id, req.params.movie_id])
      .then(() => res.end());

  },

  addMovie(req, res) {
    db.none('INSERT INTO movielistsdb.movies( movielist_id, movie_id) VALUES($1, $2)', [req.params.id, req.params.movie_id])
      .then(() => res.end());
  }
};
