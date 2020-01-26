/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

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
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    render() {
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="component_position">
                    <main className="my-8">
                        <p className="text-center">Bienvenido a la sección para visualizar, modificar y eliminar a los administradores.</p>

                        <div className="px-3 py-4 flex justify-center">
                            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                                <thead className="border-b">
                                    <th className="text-left p-3 px-5">{ this.state.table_header.persona_identificacion }</th>
                                    <th className="text-left p-3 px-5">{ this.state.table_header.persona_nombre }</th>
                                    <th className="text-left p-3 px-5">{ this.state.table_header.persona_email }</th>
                                    <th></th>
                                </thead>

                                <tbody>
                                    <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                        <td className="p-3 px-5">
                                            1718842642
                                        </td>
                                        <td className="p-3 px-5">
                                            Johao Perlaza
                                        </td>
                                        <td className="p-3 px-5">
                                            jnp.zambrano@yavirac.edu.ec
                                        </td>
                                        <td className="p-3 px-5 flex justify-end">
                                            <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Editar</button>
                                            <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>

                    {/* MODAL */}
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                        <button onClick={ this.handleOpenModal } type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Nuevo Administrador</button>
                        <ReactModal isOpen={this.state.showModal} contentLabel="onRequestClose Example" onRequestClose={this.handleCloseModal}
                        className="bg-red-500 flex-1 text-white text-center bg-gray-400 px-24 py-24 my-10 mr-40 ml-64"
                        >
                        <p>Modal text!</p>
                        <button onClick={this.handleCloseModal}>Cerrar</button>
                        </ReactModal>
                    </div>
                    {/* MODAL */}
                </div>
            </div>
        )
    }
}

export default Admin;