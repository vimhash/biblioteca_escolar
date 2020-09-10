const config = require("../knexfile"),
  env = "development",
  db = require("knex")(config[env]);

const getData = (req, res) => {
  let { table } = req.query;

  db.select()
    .from(table)
    .then((response) => {
      return res.status(200).json({
        ok: true,
        data: response,
        msm: `ok`,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        ok: false,
        data: null,
        msm: `Server error: ${error}`,
      });
    });
};

const postData = (req, res) => {
  let { data } = req.body,
    { table } = req.query;

  db(table)
    .returning("id")
    .insert(data)
    .then((response) => {
      return res.status(200).json({
        ok: true,
        data: response,
        msm: "ok",
      });
    })
    .catch((error) => {
      return res.status(500).json({
        ok: false,
        data: null,
        mensaje: `Error del servidor: ${error}`,
      });
    });
};

// const updateDatos = (req, res) => {
//   const tabla = req.query.tabla;
//   const datos = req.body.datos;
//   datos.forEach((element) => {
//     db(tabla)
//       .where("id", element.id)
//       .update(element)
//       .then((resultado) => {
//         return res.status(200).json({
//           ok: true,
//           datos: resultado,
//         });
//       })
//       .catch((error) => {
//         return res.status(500).json({
//           ok: false,
//           datos: null,
//           mensaje: `Error del servidor: ${error}`,
//         });
//       });
//   });
// };

// const deleteDatos = (req, res) => {
//   const tabla = req.query.tabla;
//   const id = req.query.id;
//   db(tabla)
//     .where("id", id)
//     .delete()
//     .then((resultado) => {
//       return res.status(200).json({
//         ok: true,
//         datos: resultado,
//       });
//     })
//     .catch((error) => {
//       return res.status(500).json({
//         ok: false,
//         datos: null,
//         mensaje: `Error del servidor: ${error}`,
//       });
//     });
// };

module.exports = {
  getData,
  postData,
};
