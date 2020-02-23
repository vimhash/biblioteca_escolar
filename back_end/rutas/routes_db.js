;
const express = require('express')
let api = express.Router(),
  control = require('../controles/crud')

api.get('/library', control.getDatos)
api.get('/library_byID', control.getDatosByID)
api.get('/library_librosdisponibles', control.getDatosLibros)
api.post('/library', control.postDatos)
api.put('/library', control.updateDatos)
api.delete('/library', control.deleteDatos)

api.post('/login', control.login)
api.post('/login_estudiantes', control.loginAPI_yavirac)
api.get('/login_estudiantes', control.getloginAPI_yavirac)

// RAW routes
api.get('/library/raw_crud', control.raw_crud)
api.get('/library/reserva', control.reserva)
api.get('/library/reserva_estudiante', control.reserva_estudiante)

module.exports = api