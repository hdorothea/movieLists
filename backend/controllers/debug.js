// callbacks to make debugging easier

const db = require('../db/dbConnect');

module.exports = {
  getMovielistsTable(req, res) {
    db.any('SELECT * FROM movielistsdb.lists', [true]).then(data => res.json((data)));
  },

  getMoviesTable(req, res) {
    db.any('SELECT * FROM movielistsdb.movies', [true]).then(data => res.json((data)));
  },

  getUsersTable(req, res) {
    db.any('SELECT * FROM movielistsdb.users', [true]).then(data => res.json((data)));
  },

  getSession(req, res) {
    res.json(req.session);
  }
};
