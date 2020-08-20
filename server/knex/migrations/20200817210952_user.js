exports.up = (knex) => {
  return knex.schema.createTable("user", (table) => {
    table.increments("user_sequence");
    table
      .integer("user_type_sequence")
      .references("cata_sequence")
      .inTable("catalogue");
    table
      .integer("user_state_sequence")
      .references("cata_sequence")
      .inTable("catalogue");
    table
      .integer("user_identification_type_sequence")
      .references("cata_sequence")
      .inTable("catalogue");
    table.string("user_identification").notNullable().unique();
    table.string("user_email").notNullable().unique();
    table.string("user_address").notNullable();
    table.string("user_phone").notNullable().unique();
    table.string("user_password").notNullable();
  });
};

exports.down = (knex) => {
  return knex.schemas.dropTableIfExists("user");
};
