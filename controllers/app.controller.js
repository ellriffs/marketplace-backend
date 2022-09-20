const {fetchItems, addItems} = require ('../models/app.model');

exports.getAllItems = (req, res, next) => {
  fetchItems ()
    .then (result => {
      res.status (200).send ({items: result});
    })
    .catch (err => {
      next (err);
    });
};

exports.addNewItem = (req, res, next) => {
  const {id} = req.params;
  const {item_name, item_price, image_url} = req.body;
  console.log (req.body, '<<<< req.body');
  addItems (item_name, item_price, image_url, id)
    .then (newItem => {
      res.status (201).send ({newItem});
    })
    .catch (err => {
      next (err);
    });
};
