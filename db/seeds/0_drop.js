
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      return knex('users').del()
    })
    .then(function () {
      return knex('snacks').del()
    })
};
