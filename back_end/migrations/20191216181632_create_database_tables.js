;
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable( 'tipo_persona', function( table ) {
    table.increments('tipo_persona_id');
    table.string('tipo_persona_nombre').notNullable().unique();
    table.string('tipo_persona_descripcion');
  })

  .createTable( 'jornada', function( table ) {
    table.increments('jornada_id');
    table.string('jornada_nombre').notNullable().unique();
  })

  .createTable( 'tipo_identificacion', function( table ) {
    table.increments('tipo_identificacion_id');
    table.string('tipo_identificacion_nombre').notNullable().unique();
  })

  .createTable( 'estado_persona', function( table ) {
    table.increments('estado_persona_id');
    table.string('estado_persona_nombre').notNullable().unique();
    table.string('estado_persona_descripcion');
  })

  .createTable( 'cargo', function( table ) {
    table.increments('cargo_id');
    table.string('cargo_nombre').notNullable().unique();
  })

  .createTable( 'categoria', function( table ) {
    table.increments('categoria_id');
    table.string('categoria_nombre').notNullable().unique();
  })

  .createTable( 'estado_libro', function( table ) {
    table.increments('estado_libro_id');
    table.string('estado_libro_nombre').notNullable().unique();
    table.string('estado_libro_descripcion');
  })

  .createTable( 'persona', function( table ) {
    table.increments('persona_id');
    table.integer('tipo_identificacion_id').references('tipo_identificacion_id').inTable('tipo_identificacion');
    table.integer('jornada_id').references('jornada_id').inTable('jornada');
    table.integer('cargo_id').references('cargo_id').inTable('cargo');
    table.integer('tipo_persona_id').references('tipo_persona_id').inTable('tipo_persona');
    table.integer('estado_persona_id').references('estado_persona_id').inTable('estado_persona');
    table.string('persona_identificacion').notNullable().unique();
    table.string('persona_nombre').notNullable();
    table.string('persona_email').notNullable();
    table.string('persona_direccion').notNullable();
    table.string('persona_telefono').notNullable();
    table.string('persona_usuario').notNullable().unique();
    table.string('persona_clave').notNullable();
  })

  .createTable( 'institucion', function( table ) {
    table.increments('institucion_id');
    table.string('institucion_nombre').notNullable();
    table.string('institucion_nombre_director').notNullable();
    table.integer('persona_id').references('persona_id').inTable('persona');
  })

  .createTable( 'libro', function( table ) {
    table.increments('libro_id');
    table.integer('categoria_id').references('categoria_id').inTable('categoria');
    table.integer('estado_libro_id').references('estado_libro_id').inTable('estado_libro');
    table.integer('institucion_id').references('institucion_id').inTable('institucion');
    table.string('libro_autor').notNullable();
    table.string('libro_pais').notNullable();
    table.string('libro_año').notNullable();
    table.string('libro_valor_estimado').notNullable();
    table.string('libro_titulo').notNullable();
    table.string('libro_edicion').notNullable();
    table.string('libro_editorial').notNullable();
    table.string('libro_existencias').notNullable();
    table.string('libro_prestado').notNullable();
  })

  .createTable( 'persona_libro', function( table ) {
    table.increments('persona_libro_id');
    table.integer('persona_id').references('persona_id').inTable('persona');
    table.integer('libro_id').references('libro_id').inTable('libro');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists( 'persona_libro' )
    .dropTableIfExists( 'libro' )
    .dropTableIfExists( 'institucion' )
    .dropTableIfExists( 'persona' )
    .dropTableIfExists( 'estado_libro' )
    .dropTableIfExists( 'categoria' )
    .dropTableIfExists( 'cargo' )
    .dropTableIfExists( 'estado_persona' )
    .dropTableIfExists( 'tipo_identificacion' )
    .dropTableIfExists( 'jornada' )
    .dropTableIfExists( 'tipo_persona' )
};