const express = require("express");
let api = express.Router(),
  universal = require("../controllers/universalController");

api.get("/universal", universal.getData);
// api.post("/library", catalogue.postDatos);
// api.put("/library", catalogue.updateDatos);
// api.delete("/library", catalogue.deleteDatos);

module.exports = api;
