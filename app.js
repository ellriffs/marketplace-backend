const express = require ('express');
const app = express ();
const port = 8080;
const files = require ('./auctions.json');

app.get ('/', (req, res) => {
  res.send (files);
});

app.post ('/:id', (req, res) => {
  res.send ('got a post request');
});

app.delete ('/:id', (req, res) => {
  res.send ('got a delete request');
});

app.listen (port, () => {
  console.log (`app is listening on ${port}`);
});