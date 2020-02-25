/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Swal from 'sweetalert2';
import axios from 'axios';

const API = "http://localhost:8001/server/library";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table_header: {
                persona_identificacion: 'Identificación',
                persona_nombre: 'Nombre',
                persona_email:'Correo Electrónico'
            },
            admins: [],
        }
    }
    
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        axios.get(API+"?tabla=persona")
        .then(response => {
            this.setState({ admins: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })
    }

    updateData = (p_id, p_id_tipo_persona, p_id_estado_persona, p_identificacion, p_nombre, p_email, p_direccion, p_telefono, p_clave) => {
        localStorage.setItem('id', p_id);
        localStorage.setItem('id_tipo_persona', p_id_tipo_persona);
        localStorage.setItem('id_estado_persona', p_id_estado_persona);
        localStorage.setItem('identificacion', p_identificacion);
        localStorage.setItem('nombre', p_nombre);
        localStorage.setItem('email', p_email);
        localStorage.setItem('direccion', p_direccion);
        localStorage.setItem('telefono', p_telefono);
        localStorage.setItem('clave', p_clave);
        this.props.history.push('/update_admin')
    }

    deleteData = (value) => {
        Swal.fire({
            title: '¿Estas seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                axios.delete(`${API}?tabla=persona&&id=${value}`, {
                    data: { id: value }
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Eliminado exitosamente!',
                    showConfirmButton: false,
                    timer: 1000
                })
                .then( () => window.location.assign("http://localhost:3000/admins"))
            }
        })
    }

    render() {
        const { admins } = this.state
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <div className  ="justify-center my-5 select-none flex">
                            <p className="mt-5 text-center mr-10 text-2xl">Administradores.</p>
                            <button onClick={ () => this.props.history.push("/add_admin") } type="button" className="mr-8 shadow-md no-underline font-black text-2xl rounded-full h-12 w-12 flex items-center justify-center bg-green-400 text-white text-sm border-blue btn-primary hover:text-white hover:bg-green-500 focus:outline-none active:shadow-none">
                                <i className="fas fa-user-plus"></i>
                            </button>
                        </div>

                        <div className="px-3 py-4 flex justify-center">
                            <table className="w-full text-md bg-white shadow-md rounded mb-4 text-center">
                                <thead className="border-b">
                                    <tr>
                                        <th></th>
                                        <th className="p-3 px-5">{ this.state.table_header.persona_identificacion }</th>
                                        <th className="p-3 px-5">{ this.state.table_header.persona_nombre }</th>
                                        <th className="p-3 px-5">{ this.state.table_header.persona_email }</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                        <td>
                                            { admins.map(element => <p className="p-2 px-5" key={ element.id }>
                                                <button onClick={ () => this.updateData(element.id, element.id_tipo_persona, element.id_estado_persona, element.identificacion, element.nombre, element.email, element.direccion, element.telefono, element.clave) } 
                                                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">
                                                        <i className="fas fa-edit"></i>
                                                </button>
                                                <button onClick={ () => this.deleteData(element.id) } 
                                                    className="mr-3 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">
                                                        <i className="fas fa-trash-alt"></i>
                                                </button></p> )
                                            }
                                        </td>
                                        <td>
                                            { admins.map(element => <p className="p-2 px-5" key={ element.id }> {element.identificacion} </p>) }
                                        </td>
                                        <td>
                                            { admins.map(element => <p className="p-2 px-5" key={ element.id }> {element.nombre} </p>) }
                                        </td>
                                        <td>
                                            { admins.map(element => <p className="p-2 px-5" key={ element.id }> {element.email} </p>) }
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

export default withRouter(Admin);
