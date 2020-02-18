;
const express = require('express')
let api = express.Router(),
  control = require('../controles/crud')

api.get('/library', control.getDatos)
api.post('/library', control.postDatos)
api.put('/library', control.updateDatos)
api.delete('/library', control.deleteDatos)

api.post('/login', control.login)
api.post('/login_estudiantes', control.loginAPI_yavirac)

// RAW routes
api.get('/library/raw_crud', control.raw_crud)
api.get('/library/reserva', control.reserva)

module.exports = api