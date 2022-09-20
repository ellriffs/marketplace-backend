const cors = require ('cors');
const express = require ('express');
const app = express ();
const {getAllItems, addNewItem} = require ('./controllers/app.controller');

app.use (cors ());
app.use (express.json ());

app.get ('/', getAllItems);
app.post ('/:id', addNewItem);

app.use ((err, req, res, next) => {
  if (err.status) {
    res.status (err.status).send ({msg: err.msg});
  } else {
    next (err);
  }
});

module.exports = app;
