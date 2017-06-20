const express = require('express');
const debug = require('./controllers/debug');
const main = require('./controllers/main');
const user = require('./controllers/user');
const lists = require('./controllers/lists');
const tmdb = require('./controllers/tmdb');

const router = express.Router();

router.route('/db/movielists').get(debug.getMovielistsTable);
router.route('/db/movies').get(debug.getMoviesTable);
router.route('/db/users').get(debug.getUsersTable);
router.route('/session').get(debug.getSession);
router.route('/login').post(user.login);
router.route('/signup').post(user.signup);
router.route('/movielists').get(lists.getLists);
router.route('/movielists/:id').post(lists.insertList);
router.route('/movielists/:id').delete(lists.deleteList);
router.route('/movielists/:id').put(lists.updateListTitle);
router.route('/movielists/:id/:movie_id').delete(lists.deleteMovie);
router.route('/movielists/:id/:movie_id').post(lists.addMovie);

router.route('/movies/search').get(tmdb.queryMovies);
router.route('/movies/:id').get(tmdb.getMovie);

router.route('/movies/director/:id').get(tmdb.getDirectorMovies);


router.route('/*').get(main);

module.exports = router;
