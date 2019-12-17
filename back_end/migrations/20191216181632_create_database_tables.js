;
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable( 'administrador', function( table ) {
    table.increments('administrador_id');                           //PRIMARY KEY
    table.string('administrador_estado').notNullable();
    table.string('administrador_identificacion').notNullable();
    table.string('administrador_nombre').notNullable();
    table.string('administrador_nombre_usuario').notNullable();
    table.string('administrador_clave').notNullable();
    table.string('administrador_email').notNullable();
  })

  .createTable( 'categoria', function( table ) {
    table.increments('categoria_id');
    table.string('categoria_nombre').notNullable().unique();
  })

  .createTable( 'docente', function( table ) {
    table.increments('docente_id');
    table.string('docente_identificacion').notNullable();
    table.string('docente_nombre').notNullable();
    table.string('docente_apellido').notNullable();
    table.string('docente_nombre_usuario').notNullable();
    table.string('docente_clave').notNullable();
    table.string('docente_telefono').notNullable();
    table.string('docente_especialidad').notNullable();
    table.string('docente_jornada').notNullable();
  })

  .createTable( 'encargado', function( table ) {
    table.increments('encargado_id');
    table.string('encargado_identificacion').notNullable();
    table.string('encargado_nombre').notNullable();
    table.string('encargado_telefono').notNullable();
  })

  .createTable( 'estudiante', function( table ) {
    table.increments('estudiante_id');
    table.string('estudiante_identificacion').notNullable();
    table.string('estudiante_nombre').notNullable();
    table.string('estudiante_apellido').notNullable();
    table.string('estudiante_nombre_usuario').notNullable();
    table.string('estudiante_clave').notNullable();
    table.string('estudiante_telefono').notNullable();
  })

  .createTable( 'institucion', function( table ) {
    table.increments('institucion_id');
    table.string('institucion_nombre').notNullable();
    table.string('institucion_nombre_director').notNullable();
    table.string('institucion_nombre_bibliotecario').notNullable();
  })

  .createTable( 'personal', function( table ) {
    table.increments('personal_id');
    table.string('personal_identificacion').notNullable();
    table.string('personal_nombre').notNullable();
    table.string('personal_nombre_usuario').notNullable();
    table.string('personal_clave').notNullable();
    table.string('personal_apellido').notNullable();
    table.string('personal_telefono').notNullable();
    table.string('personal_cargo').notNullable();
  })

  .createTable( 'proveedor', function( table ) {
    table.increments('proveedor_id');
    table.string('proveedor_identificacion').notNullable();
    table.string('proveedor_nombre').notNullable();
    table.string('proveedor_email').notNullable();
    table.string('proveedor_direccion').notNullable();
    table.string('proveedor_telefono').notNullable();
    table.string('proveedor_responde_atencion').notNullable();
  })

  .createTable( 'seccion', function( table ) {
    table.increments('seccion_id');
    table.string('seccion_nombre').notNullable();
  })

  .createTable( 'libro', function( table ) {
    table.increments('libro_id');
    table.integer('categoria_id').references('categoria_id').inTable('categoria');
    table.integer('proveedor_id').references('proveedor_id').inTable('proveedor');
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
    table.string('libro_estado').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists( 'administrador' )
    .dropTableIfExists( 'categoria' )
    .dropTableIfExists( 'docente' )
    .dropTableIfExists( 'encargado' )
    .dropTableIfExists( 'estudiante' )
    .dropTableIfExists( 'institucion' )
    .dropTableIfExists( 'personal' )
    .dropTableIfExists( 'proveedor' )
    .dropTableIfExists( 'seccion' )
    .dropTableIfExists( 'libro' )
};