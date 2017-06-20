INSERT INTO movielistsdb.users(name, password_hash) VALUES('dorothea', 'abcdef');
INSERT INTO movielistsdb.users(name, password_hash) VALUES('lola', '123456');
INSERT INTO movielistsdb.lists(owner_id, name) VALUES(1, 'awfull movies');
INSERT INTO movielistsdb.lists(owner_id, name) VALUES(2, 'good movies');
INSERT INTO movielistsdb.movies(movie_id, movielist_id) VALUES(700, 1);
INSERT INTO movielistsdb.movies(movie_id, movielist_id) VALUES(600, 1);
INSERT INTO movielistsdb.movies(movie_id, movielist_id) VALUES(8888, 2);

