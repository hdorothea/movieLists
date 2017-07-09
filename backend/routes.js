const express = require('express');
const main = require('./controllers/main');
const user = require('./controllers/user');
const lists = require('./controllers/lists');
const tmdb = require('./controllers/tmdb');

const router = express.Router();

router.route('/user/login').post(user.login);
router.route('/user/signup').post(user.signup);
router.route('/user/checkname').post(user.checkName);
router.route('/user/checkmatch').post(user.checkMatch);
router.route('/user/logout').post(user.logOut);
router.route('/user/logedin').get(user.logedIn);

router.route('/movielists').get(lists.getLists);
router.route('/movielists/:id').post(lists.insertList);
router.route('/movielists/:id').delete(lists.deleteList);
router.route('/movielists/:id').put(lists.updateListTitle);
router.route('/movielists/:id/:movie_id').delete(lists.deleteMovie);
router.route('/movielists/:id/:movie_id').post(lists.addMovie);

router.route('/movies/search').get(tmdb.queryMovies);
router.route('/movies/:id').get(tmdb.getMovie);

router.route('/movies/director/:id').get(tmdb.getDirectorMovies);
router.route('/movies/directors/movie/:id').get(tmdb.getDirectors);

router.route('/*').get(main);

module.exports = router;
