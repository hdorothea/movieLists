const express = require('express');
const debug = require('./controllers/debug');
const main = require('./controllers/main');
const user = require('./controllers/user');
const movielists = require('./controllers/movielists');
const tmdb = require('./controllers/tmdb');

const router = express.Router();

router.route('/db/movielists').get(debug.getMovielistsTable);
router.route('/db/movies').get(debug.getMoviesTable);
router.route('/db/users').get(debug.getUsersTable);
router.route('/session').get(debug.getSession);
router.route('/login').post(user.login);
router.route('/signup').post(user.signup);
router.route('/movielists').get(movielists.getMovielists);
router.route('/movielists/:name').post(movielists.insertMovielist);
router.route('/movielists/:id').delete(movielists.deleteMovielist);
router.route('/movielists/:id').put(movielists.updateMovielistTitle);
router.route('/movielists/:id/:movie_id').delete(movielists.deleteMovie);
router.route('/movielists/:id/:movie_id').post(movielists.addMovie);

router.route('/movies/search').get(tmdb.queryMovies);
router.route('/movies/:id').get(tmdb.getMovie);

router.route('/director/movies').get(tmdb.getDirectorMovies);


router.route('/*').get(main);

module.exports = router;
