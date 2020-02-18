
exports.seed = function(knex) {
  return knex('persona').del()
    .then(function () {
      return knex('persona').insert([
        {
          id: 1, 
          tipo_persona_id: 1,
          estado_persona_id: 1,
          persona_nombre: 'Administrador',
          persona_email: 'admin@gmail.com',
          persona_clave: '1234'
        },
      ]);
    });
};
