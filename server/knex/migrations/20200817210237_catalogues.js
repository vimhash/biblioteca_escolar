exports.up = (knex) => {
  return knex.schema.createTable("catalogues", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("type").notNullable();

    table.dateTime("createdAt").notNull();
  });
};

exports.down = (knex) => {
  return knex.schemas.dropTableIfExists("catalogues");
};
