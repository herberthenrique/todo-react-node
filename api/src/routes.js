'use strict';
const path = require('path');

module.exports = function(app) {
  app.use('/api/task', require('./api/task'));

  // All undefined asset or api routes should return a 404
  app.route('/*')
    .get((req, res) => {
      res.status(404).end();
    });
};
