// callbacks for user login/signup managment
const passwordHashMod = require('password-hash');
const db = require('../db/dbConnect');


function parseUsernamePassword(req) {
  return [req.body.username || undefined, req.body.password || undefined];
}

module.exports = {
  login(req, res) {
    const [username, password] = parseUsernamePassword(req);
    db.any('SELECT * FROM movielistsdb.users WHERE name = $1 LIMIT 1', [username])
      .then((data) => {
        if (data.length > 0 && passwordHashMod.verify(password, data[0].password_hash)) {
          req.session.username = data[0].name;
          req.session.userId = data[0].id;
          return res.send({});
        }
      })
      .catch(err => console.log(err));
  },

  logOut(req, res) {
    req.session.destroy();
    res.send({});
  },

  logedIn(req, res) {
    const logedIn = {
      logedIn: !!req.session.userId,
      username: req.session.username || undefined,
      userId: req.session.userId || undefined
    };
    res.send(logedIn);
  },

  checkMatch(req, res) {
    // checks if username and password match
    const [username, password] = parseUsernamePassword(req);
    if (!username || !password) {
      res.json({});
    }
    db.any('SELECT * FROM movielistsdb.users WHERE name = $1 LIMIT 1', [username])
    .then((data) => {
      if (data.length > 0 && passwordHashMod.verify(password, data[0].password_hash)) {
        res.json({ matches: true });
      } else {
        res.json({ matches: false });
      }
    });
  },

  checkName(req, res) {
    // checks if a username already exists
    db.any('SELECT * FROM movielistsdb.users WHERE name = $1', [req.body.username])
    .then((data) => {
      if (data.length <= 0) {
        res.json({ exists: false });
      } else {
        res.json({ exists: true });
      }
    });
  },

  signup(req, res) {
    const [username, password] = parseUsernamePassword(req);
    const passwordHash = passwordHashMod.generate(password);
    db.one('INSERT INTO movielistsdb.users(name, password_hash) VALUES($1, $2) RETURNING id', [username, passwordHash])
    .then((data) => {
      const userId = data.id;
      return db.none('UPDATE movielistsdb.lists SET owner_id = $1 WHERE creator_cookie = $2', [userId, req.sessionID]);
    })
    .then(() => res.json({}))
    .catch(err => console.log(err));
  }

};
