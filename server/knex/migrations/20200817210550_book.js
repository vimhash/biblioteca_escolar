exports.up = (knex) => {
  return knex.schema.createTable("books", (table) => {
    table.increments("id").primary();
    table.integer("state_id").references("id").inTable("catalogues");
    table.string("author").notNullable();
    table.string("country").notNullable();
    table.string("year").notNullable();
    table.string("title").notNullable();
    table.string("editorial").notNullable();
    table.boolean("available").notNullable();
    table.text("cover").notNullable();

    table.dateTime("createdAt").notNull();
  });
};

exports.down = (knex) => {
  return knex.schemas.dropTableIfExists("books");
};
