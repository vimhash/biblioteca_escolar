;
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable( 'tipo_persona', function( table ) {
    table.increments('tipo_persona_id');
    table.string('tipo_persona_nombre').notNullable().unique();
    table.string('tipo_persona_descripcion');
  })

  .createTable( 'estado_persona', function( table ) {
    table.increments('estado_persona_id');
    table.string('estado_persona_nombre').notNullable().unique();
    table.string('estado_persona_descripcion');
  })

  .createTable( 'estado_reserva', function( table ) {
    table.increments('estado_reserva_id');
    table.string('estado_reserva_nombre').notNullable().unique();
    table.string('estado_reserva_descripcion');
  })

  .createTable( 'estado_libro', function( table ) {
    table.increments('estado_libro_id');
    table.string('estado_libro_nombre').notNullable().unique();
    table.string('estado_libro_descripcion');
  })

  .createTable( 'libro', function( table ) {
    table.increments('libro_id');
    table.integer('estado_libro_id').references('estado_libro_id').inTable('estado_libro');
    table.string('libro_nombre').notNullable().unique();
    table.string('libro_autor').notNullable().unique();
  })

  .createTable( 'persona', function( table ) {
    table.increments('persona_id');
    table.integer('tipo_persona_id').references('tipo_persona_id').inTable('tipo_persona');
    table.integer('estado_persona_id').references('estado_persona_id').inTable('estado_persona');
    table.string('persona_identificacion').notNullable().unique();
    table.string('persona_nombre').notNullable();
    table.string('persona_email').notNullable().unique();
    table.string('persona_direccion').notNullable();
    table.string('persona_telefono').notNullable();
    table.string('persona_clave').notNullable();
  })
  
  .createTable( 'reserva', function( table ) {
    table.increments('reserva_id');
    table.integer('persona_id').references('persona_id').inTable('persona');
    table.integer('libro_id').references('libro_id').inTable('libro');
  })

  // .createTable( 'libro', function( table ) {
  //   table.increments('libro_id');
  //   table.integer('categoria_id').references('categoria_id').inTable('categoria');
  //   table.integer('estado_libro_id').references('estado_libro_id').inTable('estado_libro');
  //   table.integer('institucion_id').references('institucion_id').inTable('institucion');
  //   table.string('libro_autor').notNullable();
  //   table.string('libro_pais').notNullable();
  //   table.string('libro_año').notNullable();
  //   table.string('libro_valor_estimado').notNullable();
  //   table.string('libro_titulo').notNullable();
  //   table.string('libro_edicion').notNullable();
  //   table.string('libro_editorial').notNullable();
  //   table.string('libro_existencias').notNullable();
  //   table.string('libro_prestado').notNullable();
  // })

};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists( 'tipo_persona' )
  .dropTableIfExists( 'estado_persona' )
  .dropTableIfExists( 'estado_reserva' )
  .dropTableIfExists( 'estado_libro' )
  .dropTableIfExists( 'libro' )
  .dropTableIfExists( 'persona' )
  .dropTableIfExists( 'reserva' )
};