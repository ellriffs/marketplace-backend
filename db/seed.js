const format = require ('pg-format');
const db = require ('./connection.js');

const seed = data => {
  const {auctionData} = data;
  // 1. create tables
  // 2. insert data
  return db
    .query (`DROP TABLE IF EXISTS items`)
    .then (() => {
      return db.query (
        `CREATE TABLE items (
      id INT PRIMARY KEY,
      item_name VARCHAR,
      item_price INT,
      image_url VARCHAR
    );`
      );
    })
    .then (() => {
      const queryStr = format (
        `INSERT INTO items( id, item_name, item_price, image_url) VALUES %L RETURNING *;`,
        auctionData.map (data => [
          data.id,
          data.item_name,
          data.item_price,
          data.image_url,
        ])
      );
      console.log (queryStr);
      return db.query (queryStr);
    });
};

module.exports = seed;
