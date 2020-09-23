exports.up = (knex) => {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.integer("type_id").references("id").inTable("catalogues");
    table.integer("state_id").references("id").inTable("catalogues");
    table
      .integer("identification_type_id")
      .references("id")
      .inTable("catalogues");
    table.string("identification").notNullable().unique();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.string("address").notNullable();
    table.string("phone").notNullable().unique();
    table.string("password").notNullable();

    table.dateTime("createdAt").notNull();
  });
};

exports.down = (knex) => {
  return knex.schemas.dropTableIfExists("users");
};
