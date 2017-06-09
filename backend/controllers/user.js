// callbacks for user login/signup managment
const passwordHashFunc = require('password-hash');
const db = require('../db/dbConnect');


function parseUsernamePassword(req) {
  return [req.body.username, req.body.password];
}

module.exports = {
  login(req, res) {
    const [username, passwordHash] = parseUsernamePassword(req);
    db.any('SELECT * FROM movielistsdb.users WHERE name = $1 AND password_hash = $2 LIMIT 1', [username, passwordHash])
      .then((data) => {
        if (data.length > 0) {
          req.session.username = data[0].name;
          req.session.passwordHash = data[0].passwordHash;
          req.session.userId = data[0].id;
          return res.status(200).json(data);
        }

        return res.status(500).json({
          errors: ['Incorrect username or password']
        });
      })
      .catch(err => console.log(err));
  },

  signup(req, res) {
    const [username, passwordHash] = parseUsernamePassword(req);
    db.any('SELECT * FROM movielistsdb.users WHERE name = $1', [username])
      .then((data) => {
        if (data.length > 0) {
          return res.status(500).json({
            errors: ['Username already exists']
          });
        }
        return db.none('INSERT INTO movielistsdb.users(name, password_hash) VALUES($1, $2)', [username, passwordHash]);    
      })
      .then(() => res.status(200).json())
      .catch(err => console.log(err));
  }

};
