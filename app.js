const cors = require ('cors');
const express = require ('express');
const app = express ();
const {getAllItems} = require ('./controllers/app.controller');

app.use (cors ());
app.use (express.json ());

app.get ('/api', getAllItems);

app.use ((err, req, res, next) => {
  if (err.status) {
    res.status (err.status).send ({msg: err.msg});
  } else {
    next (err);
  }
});

app.use ((err, req, res, nex) => {
  res.status (400).send ({msg: 'Bad request'});
});

app.use ((err, req, res, next) => {
  console.log (err);
  res.status (500).send ({msg: 'internal server error'});
});

module.exports = app;
