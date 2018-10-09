module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    // You'll create your note here.
    res.send('Hello')
  });
};

module.exports = function(app, db) {
  app.get('/notes', function(req, res) {
    res.send('these are notes');
  });
};
