;
const express = require('express')
let api = express.Router(),
  control = require('../controles/crud')

api.get('/test', control.getDatos)
api.post('/test', control.postDatos)
api.put('/test', control.updateDatos )
api.delete('/test', control.deleteDatos)

module.exports = api