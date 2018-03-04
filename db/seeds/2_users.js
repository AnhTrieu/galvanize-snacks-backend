const users = require('../data/snacks.json')

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
      {
        id: 1,
        first_name: 'Anh',
        last_name: 'Trieu',
        email: 'anh@gmail.com',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Female_German_Shepherd.jpg/330px-Female_German_Shepherd.jpg',
        hashed_password: 'password'
      },
      {
        id: 2,
        first_name: 'Amalia',
        last_name: 'Fergin',
        email: 'amalia@gmail.com',
        image: 'https://metrouk2.files.wordpress.com/2016/09/pus.png?w=748&h=623&crop=1',
        hashed_password: 'password'
      }
    ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
