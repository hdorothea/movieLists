INSERT INTO movielistsdb.users(name, password_hash) VALUES('dorothea', 'abcdefgh');
INSERT INTO movielistsdb.users(name, password_hash) VALUES('lolalola', '12345678');
INSERT INTO movielistsdb.lists(id, owner_id, name) VALUES('a5999339assf', 1, 'awfull movies');
INSERT INTO movielistsdb.lists(id, owner_id, name) VALUES('a1dkdkdkdkdk', 1, 'weird movies');
INSERT INTO movielistsdb.lists(id, owner_id, name) VALUES('alalalallala', 2, 'good movies');
INSERT INTO movielistsdb.movies(movie_id, movielist_id) VALUES(700, 'a5999339assf');
INSERT INTO movielistsdb.movies(movie_id, movielist_id) VALUES(600, 'a5999339assf');
INSERT INTO movielistsdb.movies(movie_id, movielist_id) VALUES(600, 'a1dkdkdkdkdk');
INSERT INTO movielistsdb.movies(movie_id, movielist_id) VALUES(8888,'alalalallala');

