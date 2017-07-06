const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const routes = require('./routes');
const RateLimit = require('express-rate-limit');
const config = require('./config');

const app = express();
app.enable('trust proxy');

const apiLimiter = new RateLimit({
  windowMs: 10000, // 10 seconds
  max: 40, // max 40 request
  delayAfter: 1,
  delayMs: 250
});


app.use(express.static(`${__dirname}/../dist`));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(cookieParser(process.env.SESSIONS_SECRET || config.SESSIONS_SECRET));
app.use(sessions({
  secret: (process.env.SESSIONS_SECRET || config.SESSIONS_SECRET),
  cookie: {},
  resave: true,
  saveUninitialized: true,
}));

app.use('/movies/', apiLimiter);
app.use('/', routes);
app.listen(process.env.PORT || config.PORT);
