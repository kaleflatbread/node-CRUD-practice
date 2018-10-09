module.exports = function(app, db) {
  app.get('/notes', function(req, res) {
    res.send('your GET works');
  });
};

module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    console.log(req.body)
    res.send('Hello')
  });
};
