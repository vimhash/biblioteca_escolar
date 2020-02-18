
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('estado_persona').del()
    .then(function () {
      // Inserts seed entries
      return knex('estado_persona').insert([
        {
          id: 1, 
          nombre: 'Activo'
        }
      ]);
    });
};
