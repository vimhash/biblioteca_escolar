;
const config = require('../knexfile')
const env = 'development'
const db = require('knex')(config[env])

const getDatos = (req, res) => {
    const tabla = req.query.tabla
    const campo = req.query.campo

    db.select(campo).from(tabla).orderBy("id", "desc")
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

const getDatosByID = (req, res) => {
    const tabla = req.query.tabla
    const campo = req.query.campo
    const id = req.query.id

    db.select(campo).from(tabla).where('id', id)
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

const getDatosLibros = (req, res) => {
    const tabla = req.query.tabla
    const campo = req.query.campo
    const disponible = req.query.disponible

    db.select(campo).from(tabla).where('disponible', disponible).orderBy("id", "desc")
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

const searchBook = (req, res) => {
    const tabla = "libro"
    const campo = req.query.campo
    const titulo = req.query.titulo

    db.select(campo).from(tabla).where('titulo', 'like', `%${ titulo }%`)
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

const postDatos = (req, res) => {
    const tabla = req.body.tabla
    const datos = req.body.datos
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

const updateDatos = (req, res) => {
    const tabla = req.query.tabla
    const datos = req.body.datos
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

const deleteDatos = (req, res) => {
    const tabla = req.query.tabla
    const id = req.query.id
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

const login = (req,res) => {
    const tabla = 'persona';
    const correo = req.body.correo;
    const clave = req.body.clave;
  
    db.select().from(tabla)
      .then(resultado => {
        resultado.forEach(element => {
            if(element.email === correo && element.clave === clave) {
                res.status(200).json({
                    ok: true,
                    mensaje: "found"
                })
            }
        })
        res.status(500).json({
            ok: false,
            mensaje: 'no-found'
        })
    })
}

const loginAPI_yavirac = (req,res) =>{
    const API = require('../estudiantes.json').estudiantes
    const estudiante_correo = req.body.estudiante_correo;
    const estudiante_cedula = req.body.estudiante_cedula;
  
    API.forEach(element => {
        if(element.correo == estudiante_correo && element.cedula == estudiante_cedula){
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
}

const getloginAPI_yavirac = (req,res) =>{
    const API = require('../estudiantes.json').estudiantes
    const identificacion = req.query.identificacion;
  
    API.forEach(element => {
        if(element.cedula == identificacion){
            res.status(200).json({
                ok: true,
                datos: element
            })
        }
    })
    return res.status(500).json({
        ok: false,
        mensaje: 'no-found'
    })
}

// RAW functions
const reserva = (req, res) => {
    const estado_reserva = req.query.estado_reserva
    db.raw(`select reserva.id, estado_reserva.id as idreserva, estado_reserva.nombre as id_estado_reserva, reserva.id_estudiante, 
    reserva.nombre_estudiante, libro.titulo as id_libro, reserva.fecha_pedido, reserva.nombre_estudiante, 
    reserva.fecha_aprobacion_rechazo, libro.portada
    from reserva 
    join estado_reserva on estado_reserva.id = reserva.id_estado_reserva
    join libro on libro.id = reserva.id_libro
    where estado_reserva.id = ${ estado_reserva }`)
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

const reserva_estudiante = (req, res) => {
    const id_estudiante = req.query.id_estudiante
    db.raw(`select reserva.id, estado_reserva.nombre as id_estado_reserva, libro.titulo as id_libro, reserva.id_estudiante, reserva.fecha_pedido,
    reserva.fecha_aprobacion_rechazo, libro.portada from reserva
    join estado_reserva on estado_reserva.id = reserva.id_estado_reserva
    join libro on libro.id = reserva.id_libro
    where id_estudiante = ${ id_estudiante }
    order by id desc;`)
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

const raw_crud = (req, res) => {
    const query = req.body.query
    db.raw(query)
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
    getDatosByID,
    getDatosLibros,
    searchBook,
    postDatos,
    updateDatos,
    deleteDatos,
    login,
    loginAPI_yavirac,
    getloginAPI_yavirac,
    // RAW functions
    reserva_estudiante,
    reserva,
    raw_crud,
}