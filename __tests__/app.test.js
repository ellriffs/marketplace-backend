const request = require ('supertest');
const app = require ('../app');
const db = require ('../db/connection.js');
const testData = require ('../db/data/test-data/index');
const seed = require ('../db/seed.js');

beforeEach (() => seed (testData));
afterAll (() => db.end ());

describe ('GET requests', () => {
  test ('GET / returns a list of objects items seeded into db', () => {
    return request (app).get ('/').expect (200).then (result => {
      expect (result.body.items).toHaveLength (4);
      result.body.items.forEach (item => {
        expect (item).toEqual (
          expect.objectContaining ({
            id: expect.any (Number),
            item_name: expect.any (String),
            item_price: expect.any (Number),
            image_url: expect.any (String),
          })
        );
      });
    });
  });
});

describe ('POST /', () => {
  test ('POST / adds new item into items and returns a status of 201', () => {
    return request (app)
      .post (`/5`)
      .send ({
        id: 5,
        item_name: 'Guitar',
        item_price: 400,
        image_url: 'https://d1aeri3ty3izns.cloudfront.net/media/60/608800/600/preview.jpg',
      })
      .expect (201)
      .then (res => {
        expect (res.body.newItem).toEqual ({
          id: 5,
          item_name: 'Guitar',
          item_price: 400,
          image_url: 'https://d1aeri3ty3izns.cloudfront.net/media/60/608800/600/preview.jpg',
        });
      });
  });
});
