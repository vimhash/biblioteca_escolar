const express = require("express");
let api = express.Router(),
  catalogues = require("../controllers/cataloguesController");

api.get("/catalogues", catalogues.getCatalogueType);

module.exports = api;
