exports.up = (knex) => {
  return knex.schema.createTable("reservations", (table) => {
    table.increments("id").primary();
    table.integer("state_id").references("id").inTable("catalogues");
    table.integer("book_id").references("id").inTable("books");
    table.integer("user_id").references("id").inTable("users");
    table.timestamp("order_date").notNullable();
    table.timestamp("approval_rejection_date").notNullable();

    table.dateTime("createdAt").notNull();
  });
};

exports.down = (knex) => {
  return knex.schemas.dropTableIfExists("reservations");
};
