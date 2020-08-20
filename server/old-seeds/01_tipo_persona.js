exports.seed = function (knex) {
  return knex("tipo_persona")
    .del()
    .then(function () {
      return knex("tipo_persona").insert([
        {
          id: 1,
          nombre: "Administrador",
          descripcion: "Posee acceso total al sistema",
        },
      ]);
    });
};
