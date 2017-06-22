DROP SCHEMA IF EXISTS movielistsdb CASCADE;

CREATE SCHEMA movielistsdb;
    CREATE TABLE movielistsdb.users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        password_hash VARCHAR(100) NOT NULL
    );

    CREATE TABLE movielistsdb.lists (
        id VARCHAR(200) NOT NULL PRIMARY KEY,
        owner_id INTEGER,
        name VARCHAR(50) NOT NULL,
        creator_cookie VARCHAR(100)
    );

    CREATE TABLE movielistsdb.movies (
        movie_id INTEGER,
        movielist_id VARCHAR(200) NOT NULL
    );
