;
const express = require('express')
let api = express.Router(),
  control = require('../controles/crud')

api.get('/library', control.getDatos)
api.post('/library', control.postDatos)
api.put('/library', control.updateDatos)
api.delete('/library', control.deleteDatos)

api.post('/login', control.login)

// RAW routes
api.get('/library/reserva', control.reserva)

module.exports = api