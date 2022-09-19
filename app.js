const express = require ('express');
const app = express ();
const files = require ('./auctions.json');
const cors = require ('cors');
const bodyParser = require ('body-parser');
app.use (bodyParser.urlencoded ({extended: true}));

app.use (cors ());

app.get ('/', (req, res) => {
  res.send (files);
});

app.post ('/', (req, res) => {
  res.send ('post request successfull ');
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
