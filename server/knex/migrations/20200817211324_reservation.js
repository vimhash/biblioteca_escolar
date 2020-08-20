exports.up = (knex) => {
  return knex.schema.createTable("reservation", (table) => {
    table.increments("rese_sequence");
    table
      .integer("rese_state_sequence")
      .references("cata_sequence")
      .inTable("catalogue");
    table.integer("book_sequence").references("book_sequence").inTable("book");
    table.integer("user_sequence").references("user_sequence").inTable("user");
    table.timestamp("rese_order_date").notNullable();
    table.timestamp("rese_approval_rejection_date").notNullable();
  });
};

exports.down = (knex) => {
  return knex.schemas.dropTableIfExists("reservation");
};
