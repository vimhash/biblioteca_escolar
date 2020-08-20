exports.up = (knex) => {
  return knex.schema.createTable("book", (table) => {
    table.increments("book_sequence");
    table
      .integer("book_state_cata_sequence")
      .references("cata_sequence")
      .inTable("catalogue");
    table.string("book_author").notNullable();
    table.string("book_country").notNullable();
    table.string("book_year").notNullable();
    table.string("book_title").notNullable();
    table.string("book_editorial").notNullable();
    table.boolean("book_available").notNullable();
    table.text("book_cover").notNullable();
  });
};

exports.down = (knex) => {
  return knex.schemas.dropTableIfExists("book");
};
