exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.varchar('first_name').notNullable().defaultTo('');
    table.varchar('last_name').notNullable().defaultTo('');
    table.text('email').notNullable();
    table.text('image').notNullable();
    table.text('hashed_password').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
