const path = require('path');

module.exports = function main(req, res) {
  res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
};
