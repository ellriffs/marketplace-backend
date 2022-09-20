const {fetchItems} = require ('../models/app.model');

exports.getAllItems = (req, res, next) => {
  fetchItems ()
    .then (result => {
      res.status (200).send ({items: result});
    })
    .catch (err => {
      next (err);
    });
};