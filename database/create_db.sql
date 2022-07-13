CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION citext;
CREATE EXTENSION pgcrypto;

CREATE TABLE IF NOT EXISTS users (
  user_id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
  name varchar(250) NOT NULL,
  email citext UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_on TIMESTAMP NOT NULL,
  last_login TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS moviedetail (
    id INTEGER PRIMARY KEY,
    adult BOOLEAN NOT NULL,
    budget INTEGER,
    imdb_id TEXT NOT NULL,
    title TEXT NOT NULL,
    overview TEXT,
    popularity FLOAT,
    poster_path TEXT,
    release_date DATE,
    runtime INTEGER,
    revenue INTEGER,
    vote_average FLOAT
);

CREATE TABLE IF NOT EXISTS people_info (
    id INTEGER NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    gender INTEGER NOT NULL,
    profile_path TEXT
);

CREATE TABLE IF NOT EXISTS userratings (
    user_id uuid NOT NULL REFERENCES users (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    movie_id INTEGER REFERENCES moviedetail (id) ON DELETE CASCADE ON UPDATE CASCADE,
    rates FLOAT,
    PRIMARY KEY (user_id, movie_id)
);

CREATE TABLE IF NOT EXISTS userfavmovie (
    user_id uuid NOT NULL REFERENCES users (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    movie_id INTEGER REFERENCES moviedetail (id) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (user_id, movie_id)
);

CREATE TABLE IF NOT EXISTS userfavactor (
    user_id uuid NOT NULL REFERENCES users (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    actor_id INTEGER REFERENCES people_info (id) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (user_id, actor_id)
);

CREATE TABLE IF NOT EXISTS userview (
    user_id uuid NOT NULL REFERENCES users (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    movie_id INTEGER REFERENCES moviedetail (id) ON DELETE CASCADE ON UPDATE CASCADE,
    time TIMESTAMP,
    PRIMARY KEY (user_id, movie_id)
);

CREATE TABLE IF NOT EXISTS genre (
    id INTEGER NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS moviegenre (
    movie_id INTEGER NOT NULL REFERENCES moviedetail (id) ON DELETE CASCADE ON UPDATE CASCADE,
    genre_id INTEGER NOT NULL REFERENCES genre (id) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY(movie_id, genre_id)
);

CREATE TABLE IF NOT EXISTS movie_people (
    movie_id INTEGER NOT NULL REFERENCES moviedetail (id) ON DELETE CASCADE ON UPDATE CASCADE,
    people_id INTEGER NOT NULL REFERENCES people_info (id) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY(movie_id, people_id)
);

CREATE TABLE IF NOT EXISTS userreview (
    user_id uuid NOT NULL REFERENCES users (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    movie_id INTEGER REFERENCES moviedetail (id) ON DELETE CASCADE ON UPDATE CASCADE,
    contents TEXT,
    PRIMARY KEY (user_id, movie_id)
);