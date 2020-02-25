/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Swal from 'sweetalert2';
import axios from 'axios';

const API = "http://localhost:8001/server/library";

class UpdateAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: localStorage.getItem('id'),
            identificacion: localStorage.getItem('identificacion'),
            nombre: localStorage.getItem('nombre'),
            email: localStorage.getItem('email'),
            direccion: localStorage.getItem('direccion'),
            telefono: localStorage.getItem('telefono'),
            clave: localStorage.getItem('clave'),
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    updateData = e => {
        e.preventDefault()
        this.update = {
            datos: [{
                id: this.state.id,
                identificacion: this.state.identificacion,
                nombre: this.state.nombre,
                email: this.state.email,
                direccion: this.state.direccion,
                telefono: this.state.telefono,
                clave: this.state.clave
            }]
        }

        if (this.update.datos[0].identificacion === "" ||
            this.update.datos[0].nombre === "" ||
            this.update.datos[0].email === "" ||
            this.update.datos[0].direccion === "" ||
            this.update.datos[0].telefono === "" ||
            this.update.datos[0].clave === ""
            ) {
            Swal.fire(
                '',
                'Complete todos los datos para continuar...!'
            )
        } else {
          axios.put(`${API}?tabla=persona`, this.update)
          .then(response => {
            if ( response.data.ok === true ) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Actualizado correctamente',
                    showConfirmButton: false,
                    timer: 1000
                })
                .then( () => {localStorage.clear(); this.props.history.push('/admins')})
            }
          })
          .catch(error => {
            console.log(error)
          })
        }
    };

    render() {
        const { identificacion, nombre, email, direccion, telefono, clave } = this.state
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64 text-center">
                    <hr />
                    <main className="my-8 ml-64 mr-64">
                        <p className="text-center my-5 text-2xl">Actualizar datos del administrador.</p>
                        <form className="w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={ this.updateData }>
                            <div className="mt-2">
                                <label className="block text-sm text-gray-600" htmlFor="identificacion">Cédula de Identidad</label>
                                <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" 
                                    type="text" 
                                    placeholder="Ej: 175148795" 
                                    name="identificacion"
                                    value={ identificacion }
                                    onChange={ this.changeHandler }
                                    autoComplete="off"
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-sm text-gray-600" htmlFor="nombre">Nombre y Apellido</label>
                                <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" 
                                    type="text" 
                                    placeholder="Ej: Joel Simbaña"
                                    name="nombre"
                                    value={ nombre }
                                    onChange={ this.changeHandler }
                                    autoComplete="off"
                                />
                            </div>
                            <div className="mt-2">
                                <label className=" block text-sm text-gray-600" htmlFor="email">Correo Institucional</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
                                    type="text" 
                                    placeholder="@yavirac.edu.ec" 
                                    name="email"
                                    value={ email }
                                    onChange={ this.changeHandler }
                                    autoComplete="off"
                                />
                            </div>
                            <div className="mt-2">
                                <label className=" block text-sm text-gray-600" htmlFor="direccion">Dirección</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
                                    type="text" 
                                    placeholder="Ej: Caupicho city"
                                    name="direccion"
                                    value={ direccion }
                                    onChange={ this.changeHandler }
                                    autoComplete="off"
                                />
                            </div>
                            <div className="inline-block mt-2 w-1/2 pr-1">
                                <label className="block text-sm text-gray-600" htmlFor="telefono">Teléfono</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
                                    type="text" 
                                    placeholder="Ej: 0985461645" 
                                    name="telefono"
                                    value={ telefono }
                                    onChange={ this.changeHandler }
                                    autoComplete="off"
                                />
                            </div>
                            <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                <label className="block text-sm text-gray-600" htmlFor="clave">Clave</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
                                    type="password" 
                                    placeholder="*************" 
                                    name="clave"
                                    value={ clave }
                                    onChange={ this.changeHandler }
                                />
                            </div>
                            <div className="mt-4">
                                <button className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                    <i className="fas fa-save"></i>
                                    <span className="mr-2">Grabar</span>
                                </button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        )
    }
}

export default withRouter(UpdateAdmin);
