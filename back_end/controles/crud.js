;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])

let getDatos = (req, res) => {
    let tabla = req.query.tabla
    let campo = req.query.campo
    db.select(campo).from(tabla)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

let postDatos = (req, res) => {
    let tabla = req.body.tabla
    let datos = req.body.datos
    db(tabla).returning('id').insert(datos)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

let updateDatos = (req, res) => {
    let tabla = req.body.tabla
    let datos = req.body.datos
    datos.forEach( element => {
        db(tabla).where('id', element.id).update(element)
        .then( resultado => {
            return res.status(200).json({
                ok: true,
                datos: resultado
            })
        })
        .catch((error) => {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: `Error del servidor: ${error}` 
            })
        })
    })
}

let deleteDatos = (req, res) => {
    let tabla = req.query.tabla
    let id = req.query.id
    db(tabla).where('id', id).delete()
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

let login = (req,res) =>{
    let tabla = 'persona';
    let correo = req.body.correo;
    let clave = req.body.clave;
    let campo = req.query.campo;
  
    db.select(campo).from(tabla)
      .then(resultado => {
        resultado.forEach(element => {
          if(element.persona_email == correo && element.persona_clave == clave){
            res.status(200).json({
              ok: true,
              mensaje: "found"
            })
          }
        })
        return res.status(500).json({
            ok: false,
            mensaje: 'no-found'
          })
      })
}

// RAW functions
let reserva = (req, res) => {
    db.raw(`select reserva.id, estado_reserva.estado_reserva_nombre as estado_reserva_id, persona.persona_nombre as persona_id, libro.libro_titulo as titulo_id
    from reserva 
    join estado_reserva on estado_reserva.id = reserva.estado_reserva_id
    join persona on persona.id = reserva.persona_id
    join libro on libro.id = reserva.libro_id`)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado.rows
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

module.exports = {
    getDatos,
    postDatos,
    updateDatos,
    deleteDatos,
    login,
    // RAW functions
    reserva,
}