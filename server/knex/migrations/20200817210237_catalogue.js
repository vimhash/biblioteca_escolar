exports.up = (knex) => {
  return knex.schema.createTable("catalogue", (table) => {
    table.increments("cata_sequence");
    table.string("cata_name").notNullable().unique();
    table.string("cata_type").notNullable();
  });
};

exports.down = (knex) => {
  return knex.schemas.dropTableIfExists("tipo_persona");
};
