exports.seed = function (knex) {
  return knex("persona")
    .del()
    .then(function () {
      return knex("persona").insert([
        {
          id: 1,
          id_tipo_persona: 1,
          id_estado_persona: 1,
          nombre: "Administrador",
          email: "admin@gmail.com",
          clave: "1234",
        },
      ]);
    });
};
