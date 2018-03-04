exports.up = function(knex, Promise) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments();
    table.varchar("title").notNullable().defaultTo("");
    table.text("text").notNullable().defaultTo("");
    table.integer("rating").notNullable();
    table.integer("snack_id").index().references("id").inTable("snacks").onDelete("cascade").notNullable();
    table.integer("user_id").index().references("id").inTable("users").onDelete("cascade").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("reviews")
};
