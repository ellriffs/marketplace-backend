const express = require ('express');
const app = express ();
const files = require ('./auctions.json');
const cors = require ('cors');

app.use (cors ());

app.get ('/', (req, res) => {
  res.send (files);
});

app.post ('/', (req, res) => {
  let id = req.body.id;
  let item = req.body.item;
  let price = req.body.price;
  let image = req.body.image;
  res.send ({id, item, price, image});
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
