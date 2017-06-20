// callbacks to interact with the tmdb api
const request = require('request');
const requestPromise = require('request-promise-native');
const urlJoin = require('url-join');

function getOptions(rURL, method, body = {}, queries = {}) {
  const qs = queries;
  qs.api_key = process.env.API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const options = {
    method,
    qs,
    body: `${body}`,
    url: urlJoin(BASE_URL, rURL)
  };
  return options;
}

function assembleImageLink(posterPath, poster = true) {
  if (!posterPath) return;
  const posterSize = 'w154';
  const logoSize = 'w45';
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
  return `${IMAGE_BASE_URL}${poster ? posterSize : logoSize}${posterPath}`;
}

module.exports = {
  queryMovies(req, res) {
    const query = req.query.query;
    if (!query) throw new Error('You need to specify a query');
    const options = getOptions('/search/movie', 'GET', {}, {
      query
    });

    request(options, (error, response, tmdbData) => {
      if (error) throw new Error(error);
      const data = JSON.parse(tmdbData)
        .results
        .filter(tmdbDataPoint => tmdbDataPoint.poster_path)
        .map(tmdbDataPoint => ({
          title: tmdbDataPoint.title,
          logoPath: assembleImageLink(tmdbDataPoint.poster_path, false),
          id: tmdbDataPoint.id,
          year: tmdbDataPoint.release_date.substring(0, 4)
        }));
      return res.json(data);
    });
  },

  getMovie(req, res) {
    const movieId = req.params.id;
    const options = getOptions(`/movie/${movieId}`, 'GET');
    const creditOptions = getOptions(`/movie/${movieId}/credits`, 'GET');
    const data = {};

    requestPromise(options)
      .then((primaryDataString) => {
        const primaryData = JSON.parse(primaryDataString);
        data.id = primaryData.id;
        data.title = primaryData.title;
        data.overview = primaryData.overview;
        data.overview = primaryData.overview;
        data.tagline = primaryData.tagline;
        data.posterPath = assembleImageLink(primaryData.poster_path);
        data.logoPath = assembleImageLink(primaryData.poster_path, false);
        data.year = primaryData.release_date.substring(0, 4);
      })
      .then(() => requestPromise(creditOptions))
      .then((creditDataString) => {
        const creditData = JSON.parse(creditDataString);
        const directors = creditData
          .crew
          .filter(crewMember => crewMember.job === 'Director')
          .map(director => ({
            id: director.id,
            name: director.name
          }));
        data.directors = directors;
        return res.json(data);
      });
  },

  getDirectorMovies(req, res) {
    const options = getOptions(`/person/${req.params.id}/movie_credits`, 'GET');
    requestPromise(options)
      .then(dataString => res.json(JSON.parse(dataString)
        .crew
        .filter(crewMovie => crewMovie.job === 'Director')
        .map(directorMovie => directorMovie.id)));
  }
};
