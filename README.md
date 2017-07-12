# MovieLists

An Application to make List of movies. Written to learn Angular. Using Angular, the Angular CLI, RxJS, Node, Express, PostgreSQL and the TMDb API. Currently still somewhat in development but useable. You can see it running [here](https://movielistsdh.herokuapp.com/list/65433da7-f776-2771-ec7b-ffc796f7ab46). 

## Running locally

* `clone` the repository.
* Get yourself a [TMDb API key](https://www.themoviedb.org/faq/api?language=en). Add the API key to the config file in `./backend/`.
* Install PostgreSQL. Create a database. Add the database url to the config file in `./backend/`. Run: `psql -f backend/db/create_tables.sql -U yourpsqlusername -d nameofthedatabase`.
* Build the app by runing `ng build --aot`
* Run `node backend/server.js`. Go to `http://localhost:7000/`.

## Front-end Architecture 

### Components

There are two not-routed top-level components:

* the header component
* the List of Lists(lioli) container

And then there are the routed top level components:

* the list-container component
* the director-list component
* the movie-detail component
* the signup/login components

### Services

There are three important services

* the lists service, for operations on the lists level (fetching the Lists, adding a new List, setting the currentList etc.). A list contains an array of BehaviorSubjects fetching the data of movies contained in it. This architecture allows for reactive components and prevents the need to refetch movie data for different views.

* the currentList service, for operations on the single list level (changing the name of the list, adding a new movie etc.)

* the movie service, for getting movie data. (things related to the TMDb API).

Some of the Front-end Architecture decisions are inspired by this [excellent article](https://medium.com/curated-by-versett/building-maintainable-angular-2-applications-5b9ec4b463a1).











