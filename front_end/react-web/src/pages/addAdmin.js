/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Swal from 'sweetalert2';
import axios from 'axios';

const API = "http://localhost:8001/server/library";

class AddAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identificacion: '',
            nombre: '',
            email: '',
            direccion: '',
            telefono: '',
            clave: '',
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    saveData = e => {
        e.preventDefault()
        this.post = {
            tabla: "persona",
            datos: {
                id_estado_persona: 1,
                id_tipo_persona: 1,
                identificacion: this.state.identificacion,
                nombre: this.state.nombre,
                email: this.state.email,
                direccion: this.state.direccion,
                telefono: this.state.telefono,
                clave: this.state.clave
            }
        }

        if (this.post.datos.identificacion === "" ||
            this.post.datos.nombre === "" ||
            this.post.datos.email === "" ||
            this.post.datos.direccion === "" ||
            this.post.datos.telefono === "" ||
            this.post.datos.clave === ""
            ) {
            Swal.fire(
                '',
                'Complete todos los datos para continuar...!'
            )
        } else {
          axios.post(API, this.post)
          .then(response => {
            if ( response.data.ok === true ) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Agregado exitosamente',
                    showConfirmButton: false,
                    timer: 1000
                })
                .then( () => this.props.history.push('/admins'))
            }
          })
          .catch(error => {
            alert(error)
          })
        }
    };

    onFileChange = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({ portada: reader.result })
            console.log(reader.result)
        }
        reader.readAsDataURL(file);
    }


    render() {
        const { identificacion, nombre, email, direccion, telefono, clave } = this.state
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64 text-center">
                    <hr />
                    <main className="my-8 ml-64 mr-64">
                        <p className="text-center my-5 text-2xl">Agregar un nuevo administrador.</p>
                        <form className="w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={ this.saveData }>
                            <div className="mt-2">
                                <label className="block text-sm text-gray-600" htmlFor="identificacion">Cédula de Identidad*</label>
                                <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" 
                                    type="text"
                                    placeholder="Ej: 175148795" 
                                    name="identificacion"
                                    pattern="[0-9]{10}"
                                    value={ identificacion }
                                    onChange={ this.changeHandler }
                                    autoComplete="off"
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-sm text-gray-600" htmlFor="nombre">Nombre y Apellido*</label>
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
                                <label className=" block text-sm text-gray-600" htmlFor="email">Correo Institucional*</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
                                    type="text" 
                                    placeholder="@yavirac.edu.ec" 
                                    name="email"
                                    pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                                    value={ email }
                                    onChange={ this.changeHandler }
                                    autoComplete="off"
                                />
                            </div>
                            <div className="mt-2">
                                <label className=" block text-sm text-gray-600" htmlFor="direccion">Dirección*</label>
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
                                <label className="block text-sm text-gray-600" htmlFor="telefono">Teléfono*</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
                                    type="text" 
                                    placeholder="Ej: 0985461645" 
                                    name="telefono"
                                    pattern="[0-9]{10}"
                                    value={ telefono }
                                    onChange={ this.changeHandler }
                                    autoComplete="off"
                                />
                            </div>
                            <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                <label className="block text-sm text-gray-600" htmlFor="clave">Clave*</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
                                    type="password" 
                                    placeholder="*************" 
                                    name="clave"
                                    value={ clave }
                                    onChange={ this.changeHandler }
                                />
                            </div>
                            <p class="text-red text-xs italic">Por favor complete todos los campos*.</p>
                            <div className="mt-4">
                                <button className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                    <i className="fas fa-save"></i>
                                    <span className="mr-2">Guardar</span>
                                </button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        )
    }
}

export default withRouter(AddAdmin);
