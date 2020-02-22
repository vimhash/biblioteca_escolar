;
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable( 'tipo_persona', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('descripcion');
  })

  .createTable( 'estado_persona', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('descripcion');
  })

  .createTable( 'estado_reserva', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('descripcion');
  })

  .createTable( 'estado_libro', function( table ) {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('descripcion');
  })

  .createTable( 'libro', function( table ) {
    table.increments('id');
    table.integer('id_estado_libro').references('id').inTable('estado_libro');
    table.string('autor');
    table.string('pais');
    table.string('año');
    table.string('titulo');
    table.string('editorial');
    table.string('existencias');
    table.boolean('disponible');
    table.text('portada');
  })

  .createTable( 'persona', function( table ) {
    table.increments('id');
    table.integer('id_tipo_persona').references('id').inTable('tipo_persona');
    table.integer('id_estado_persona').references('id').inTable('estado_persona');
    table.string('identificacion').unique();
    table.string('nombre');
    table.string('email').unique();
    table.string('direccion');
    table.string('telefono');
    table.string('clave');
  })
  
  .createTable( 'reserva', function( table ) {
    table.increments('id');
    table.integer('id_estado_reserva').references('id').inTable('estado_reserva');
    table.integer('id_libro').references('id').inTable('libro');
    table.string('id_estudiante');
    table.string('nombre_estudiante');
    table.date('fecha_pedido');
    table.date('fecha_aprobacion_rechazo');
  })
};

exports.down = function(knex, Promise) {
  return knex.schemas
  .dropTableIfExists( 'tipo_persona' )
  .dropTableIfExists( 'estado_persona' )
  .dropTableIfExists( 'estado_reserva' )
  .dropTableIfExists( 'estado_libro' )
  .dropTableIfExists( 'libro' )
  .dropTableIfExists( 'persona' )
  .dropTableIfExists( 'reserva' )
};