const db = require ('../db/connection');

exports.fetchItems = async () => {
  const res = await db.query (`SELECT * FROM items`);
  return res.rows;
};

exports.addItems = (item_name, item_price, image_url, id) => {
  return db
    .query (
      `INSERT INTO items (item_name, item_price, image_url, id) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [item_name, item_price, image_url, id]
    )
    .then (result => {
      console.log (result.rows[0], '<<<< rows');
      return result.rows[0];
    });
};
