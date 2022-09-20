const devData = require ('../db/data/index');
const seed = require ('./seed.js');
const db = require ('./connection');

const runSeed = () => {
  return seed (devData).then (() => db.end ());
};

runSeed ();

module.exports = runSeed;
