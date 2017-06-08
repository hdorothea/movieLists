// callbacks to get and post data to the movielists and movies tables

const db = require('./dbConnect');

module.exports = {
  getMovielists(req, res) {
    db.any(`SELECT (mls.name, array_agg(ms.movie_id))
            FROM movielistsdb.movielists mls
            INNER JOIN movielistsdb.movies ms on ms.movielist_id = mls.id
            WHERE owner_id = $1 
            OR creator_cookie =$2
            GROUP BY mls.id`, [req.session.userId, req.session.cookie])
      .then((data) => {
        console.log(req.session);
        console.log(req.sessionID);
        console.log(data);
        return res.json(data);
      })
      .catch(err => console.log(err));
  },

  insertMovielist(req, res) {
    const ownerId = req.session.userId;
    db.none(`INSERT INTO movielistsdb.movielists(owner_id, name, creator_cookie) VALUES($1, $2, $3)`, [ownerId, req.params.name, req.sessionID])
      .then(() => res.status(200).json())
      .catch(err => console.log(err));
  },

  deleteMovielist(req, res) {
    db.none('DELETE FROM movielistsdb.movies  WHERE movielist_id = $1', [req.params.id])
    .then(() => db.none('DELETE FROM movielistsdb.movielists WHERE id = $1', [req.params.id]))
    .then(() => res.end());
  },

  updateMovielistTitle(req, res) {
    const newTitle = req.body.title;
    db.none('UPDATE movielistsdb.movielists SET name = $1 WHERE id = $2', [newTitle, req.params.id])
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
