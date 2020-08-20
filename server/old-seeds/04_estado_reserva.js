exports.seed = function (knex) {
  return knex("estado_reserva")
    .del()
    .then(function () {
      return knex("estado_reserva").insert([
        {
          id: 1,
          nombre: "Aprobado",
        },
        {
          id: 2,
          nombre: "Rechazado",
        },
        {
          id: 3,
          nombre: "En espera de Aprobación",
        },
      ]);
    });
};
