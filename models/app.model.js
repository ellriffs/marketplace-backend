const db = require ('../db/connection');
const fs = require ('fs/promises');

exports.fetchItems = async () => {
  const res = await db.query (`SELECT * FROM items`);
  return res.rows;
};
