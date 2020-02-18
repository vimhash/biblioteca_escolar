
exports.seed = function(knex) {
  return knex('tipo_persona').del()
    .then(function () {
      // Inserts seed entries
      return knex('tipo_persona').insert([
        {
          id: 1, 
          tipo_persona_nombre: 'Administrador',
          tipo_persona_descripcion: 'Posee acceso total al sistema'
        },
      ]);
    });
};
