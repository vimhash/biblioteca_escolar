const environment = process.env.ENVIRONMENT || "development",
  config = require("../knexfile.js")[environment];

module.exports = require("knex")(config);
