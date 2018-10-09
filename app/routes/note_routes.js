module.exports = function(app, db) {

  app.post('/notes', (req, res) => {
    console.log(req.body)
    res.send('Hello')
  });
};

module.exports = function(app, db) {
  app.get('/notes', function(req, res) {
    res.send('your GET works');
  });

  const collection =
  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
