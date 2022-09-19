const express = require ('express');
const app = express ();
const files = require ('./auctions.json');
const cors = require ('cors');

app.use (cors ());

app.get ('/', (req, res) => {
  res.send (files);
});

app.post ('/', (req, res) => {
  res.status (200).res.send (req.body);
});

app.delete ('/:id', (req, res) => {
  res.send ('got a delete request');
});

app.listen (process.env.PORT || 3000, function () {
  console.log (
    'Express server listening on port %d in %s mode',
    this.address ().port,
    app.settings.env
  );
});
