const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const routes = require('./routes');

const app = express();

app.use(express.static(`${__dirname}/../dist`));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(cookieParser(process.env.SESSIONS_SECRET));
app.use(sessions({
  secret: process.env.SESSIONS_SECRET,
  cookie: {},
  resave: true,
  saveUninitialized: true,
}));

app.use('/', routes);
app.listen(process.env.PORT);
