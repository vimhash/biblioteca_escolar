
exports.seed = function(knex) {
  return knex('estado_libro').del()
    .then(function () {
      return knex('estado_libro').insert([
        {
          id: 1, 
          nombre: 'Nuevo'
        },
        {
          id: 2, 
          nombre: 'Usado'
        },
        {
          id: 3, 
          nombre: 'En mal estado'
        }
      ]);
    });
};
