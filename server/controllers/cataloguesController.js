const config = require("../knexfile"),
  env = "development",
  db = require("knex")(config[env]);

const getCatalogueType = (req, res) => {
  let { type } = req.query;

  db.select()
    .from("catalogues")
    .where("type", type)
    .then((response) => {
      return res.status(200).json({
        ok: true,
        data: response,
        msm: response.type,
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

module.exports = {
  getCatalogueType,
};
