/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

const API = "http://localhost:8001/server/library";

class Admin extends Component {
    handleOpenModal () { this.setState({ showModal: true }) }      
    handleCloseModal () { this.setState({ showModal: false }) }

    constructor(props) {
        super(props);
        this.state = {
            table_header: {
                persona_identificacion: 'Identificación',
                persona_nombre: 'Nombre',
                persona_email:'Correo Electrónico'
            },
            admins: [],
            persona_identificacion: '',
            persona_nombre: '',
            persona_email: '',
            persona_direccion: '',
            persona_telefono: '',
            persona_clave: ''
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        axios.get(API+"?tabla=persona")
        .then(response => {
            this.setState({admins: response.data.datos})
        })
        .catch(error => {
            console.log(error)
        })
    }

    saveData = e => {
        e.preventDefault()
        this.post = {
            tabla: "persona",
            datos: {
                persona_identificacion: this.state.persona_identificacion,
                persona_nombre: this.state.persona_nombre,
                persona_email: this.state.persona_email,
                persona_direccion: this.state.persona_direccion,
                persona_telefono: this.state.persona_telefono,
                persona_clave: this.state.persona_clave
            }
        }

        if (this.post.datos.persona_identificacion === "" ||
            this.post.datos.persona_nombre === "" ||
            this.post.datos.persona_email === "" ||
            this.post.datos.persona_direccion === "" ||
            this.post.datos.persona_telefono === "" ||
            this.post.datos.persona_clave === ""
            ) {
          alert("Complete todos los datos para continuar...");
        } else {
          axios.post(API, this.post)
          .then(response => {
            if ( response.data.ok === true ) {
                alert("Administrador registrado exitosamente")
                window.location.assign("http://localhost:3000/admins");
            }
          })
          .catch(error => {
            alert(error)
          })
        }
    };

    deleteData = (value) => {
        axios.delete(`${API}?tabla=persona&&id=${value}`, {
            data: { id: value }
        })
        window.location.assign("http://localhost:3000/admins");
    }

    // updateData = () => {
    //     axios.put(API+"?tabla=persona", {
    //         persona_identificacion: this.state.persona_identificacion,
    //         persona_nombre: this.state.persona_nombre,
    //         persona_email: this.state.persona_email,
    //         persona_direccion: this.state.persona_direccion,
    //         persona_telefono: this.state.persona_telefono,
    //         persona_clave: this.state.persona_clave
    //     })
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }

    render() {
        const { admins, persona_identificacion, persona_nombre, persona_email, persona_direccion, persona_telefono, persona_clave } = this.state
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                    <div class="justify-center my-5 select-none flex">
                        <p className="mt-5 text-center mr-10 text-2xl">Bienvenido a la sección para visualizar, modificar y eliminar a los administradores.</p>
                            <button onClick={ this.handleOpenModal } type="button" class="mr-8 shadow-md no-underline font-black text-2xl rounded-full h-12 w-12 flex items-center justify-center bg-pink-400 text-white text-sm border-blue btn-primary hover:text-white hover:bg-pink-500 focus:outline-none active:shadow-none">
                                    +
                                </button>
                                {/* MODAL */}
                                <ReactModal isOpen={this.state.showModal} contentLabel="onRequestClose Example" onRequestClose={this.handleCloseModal}
                                    className="flex-1 text-white text-center pl-48 py  py-0 my-10 mr-40 ml-64">
                                    <div className="leading-loose">
                                        <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={ this.saveData }>
                                            <p className="text-gray-800 font-medium">Nuevo Registro</p>
                                                <div className="mt-2">
                                                    <label className="block text-sm text-gray-600" for="cus_email">Cédula de Identidad</label>
                                                    <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" 
                                                        type="text" 
                                                        placeholder="Ej: 175148795" 
                                                        name="persona_identificacion"
                                                        value={ persona_identificacion }
                                                        onChange={ this.changeHandler } 
                                                    />
                                                </div>
                                                <div className="mt-2">
                                                    <label className="block text-sm text-gray-600" for="cus_email">Nombre y Apellido</label>
                                                    <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" 
                                                        type="text" 
                                                        placeholder="Ej: Joel Simbaña"
                                                        name="persona_nombre"
                                                        value={ persona_nombre }
                                                        onChange={ this.changeHandler }
                                                    />
                                                </div>
                                                <div className="mt-2">
                                                    <label className=" block text-sm text-gray-600" for="cus_email">Correo Institucional</label>
                                                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
                                                        type="text" 
                                                        placeholder="@yavirac.edu.ec" 
                                                        name="persona_email"
                                                        value={ persona_email }
                                                        onChange={ this.changeHandler }
                                                    />
                                                </div>
                                                <div className="mt-2">
                                                    <label className=" block text-sm text-gray-600" for="cus_email">Dirección</label>
                                                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
                                                        type="text" 
                                                        placeholder="Ej: Caupicho city"
                                                        name="persona_direccion"
                                                        value={ persona_direccion }
                                                        onChange={ this.changeHandler }
                                                    />
                                                </div>
                                                <div className="inline-block mt-2 w-1/2 pr-1">
                                                    <label className="block text-sm text-gray-600" for="cus_email">Teléfono</label>
                                                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
                                                        type="text" 
                                                        placeholder="Ej: 0985461645" 
                                                        name="persona_telefono"
                                                        value={ persona_telefono }
                                                        onChange={ this.changeHandler }
                                                    />
                                                </div>
                                                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                                    <label className="block text-sm text-gray-600" for="cus_email">Clave</label>
                                                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
                                                        type="password" 
                                                        placeholder="*************" 
                                                        name="persona_clave"
                                                        value={ persona_clave }
                                                        onChange={ this.changeHandler }
                                                    />
                                                </div>
                                                <div className="mt-4">
                                                    <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" type="submit">Guardar</button>
                                                </div>
                                        </form>

                                    </div>
                                </ReactModal>       
                               {/* MODAL */}
                    </div>  
                        <div className="px-3 py-4 flex justify-center">
                            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                                <thead className="border-b">
                                    <tr>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.persona_identificacion }</th>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.persona_nombre }</th>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.persona_email }</th>
                                        {/* <th></th> */}
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                        <td>
                                            { admins.map(element => <p className="p-2 px-5" key={ element.id }> {element.persona_identificacion} </p>) }
                                        </td>
                                        <td>
                                            { admins.map(element => <p className="p-2 px-5" key={ element.id }> {element.persona_nombre} </p>) }
                                        </td>
                                        <td>
                                            { admins.map(element => <p className="p-2 px-5" key={ element.id }> {element.persona_email} </p>) }
                                        </td>
                                        {/* <td>
                                            { admins.map(element => <p className="p-2 px-5" key={ element.id }><button onClick={ this.handleOpenModal } className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Editar</button></p> )}
                                        </td> */}
                                        <td>
                                            { admins.map(element => <p className="p-2 px-5" key={ element.id }><button onClick={ () => this.deleteData(element.id) } className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button></p> )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Admin;