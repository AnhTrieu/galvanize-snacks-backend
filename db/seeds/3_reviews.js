const reviews = require('../data/snacks.json')

exports.seed = function(knex, Promise) {
  return knex('reviews').del()
    .then(() => {
      return knex('reviews').insert([
      {
        id: 1,
        title: 'Chicken Phyllo',
        text: 'It was goood',
        rating: 3,
        snack_id: 4,
        user_id: 1
      },
      {
        id: 2,
        title: 'Cheese Brie',
        text: 'I like cheese',
        rating: 5,
        snack_id: 8,
        user_id: 1
      }
    ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews));"
      );
    });
};
