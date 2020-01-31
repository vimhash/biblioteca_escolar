/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import axios from 'axios';

const API = "http://localhost:8001/server/library";

class AddStateBook extends Component {
    handleOpenModal () { this.setState({ showModal: true }) }      
    handleCloseModal () { this.setState({ showModal: false }) }

    constructor(props) {
        super(props);
        this.state = {
            table_header: {
                estado_libro_nombre: 'Nombre',
                estado_libro_descripcion:'Descripción'
            },
            stateBooks: [],
            estado_libro_nombre: '',
            estado_libro_descripcion: ''
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        axios.get(API+"?tabla=estado_libro")
        .then(response => {
            this.setState({ stateBooks: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })
    }

    saveData = e => {
        e.preventDefault()
        this.post = {
            tabla: "estado_libro",
            datos: {
                estado_libro_nombre: this.state.estado_libro_nombre,
                estado_libro_descripcion: this.state.estado_libro_descripcion
            }
        }

        if (this.post.datos.estado_libro_nombre === "" ||
            this.post.datos.estado_libro_descripcion === ""
            ) {
          alert("Complete todos los datos para continuar...");
        } else {
          axios.post(API, this.post)
          .then(response => {
            if ( response.data.ok === true ) {
                alert("Estado registrado exitosamente")
                window.location.assign("http://localhost:3000/config/state_books");
            }
          })
          .catch(error => {
            alert(error)
          })
        }
    };

    deleteData = (value) => {
        axios.delete(`${API}?tabla=estado_libro&&id=${value}`, {
            data: { id: value }
        })
        window.location.assign("http://localhost:3000/config/state_books");
    }

    render() {
        const { stateBooks, estado_libro_nombre, estado_libro_descripcion } = this.state
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <p className="text-center">Bienvenido a la sección para visualizar y eliminar los estados de libros.</p>

                        <div className="px-3 py-4 flex justify-center">
                            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                                <thead className="border-b">
                                    <tr>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.estado_libro_nombre }</th>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.estado_libro_descripcion }</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                        <td>
                                            { stateBooks.map(element => <p className="p-2 px-5"> {element.estado_libro_nombre} </p>) }
                                        </td>
                                        <td>
                                            { stateBooks.map(element => <p className="p-2 px-5"> {element.estado_libro_descripcion} </p>) }
                                        </td>
                                        <td>
                                            { stateBooks.map(element => <p className="p-2 px-5"><button onClick={ () => this.deleteData(element.id) } className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button></p> )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>

                    {/* MODAL */}
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                    <div className="mt-4">
                        <button onClick={ this.handleOpenModal } type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Nuevo Estado</button>
                    </div>
                        <ReactModal isOpen={this.state.showModal} contentLabel="onRequestClose Example" onRequestClose={this.handleCloseModal}
                        className="flex-1 text-white text-center pl-48 py  py-0 my-10 mr-40 ml-64">
                        <div className="leading-loose">
                            <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={ this.saveData }>
                                <p className="text-gray-800 font-medium">Nuevo Registro</p>
                                <div className="mt-2">
                                    <label className="block text-sm text-gray-600" for="cus_email">Nombre</label>
                                    <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" 
                                        type="text"
                                        placeholder="Ej: 175148795" 
                                        name="estado_libro_nombre"
                                        value={ estado_libro_nombre }
                                        onChange={ this.changeHandler } 
                                    />
                                </div>
                                <div className="mt-2">
                                    <label className="block text-sm text-gray-600" for="cus_email">Descripción</label>
                                    <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" 
                                        type="text" 
                                        placeholder="Ej: Joel Simbaña"
                                        name="estado_libro_descripcion"
                                        value={ estado_libro_descripcion }
                                        onChange={ this.changeHandler }
                                    />
                                </div>
                                <div className="mt-4">
                                    <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" type="submit">Guardar</button>
                                </div>
                            </form>
                        </div>
                        </ReactModal>
                    </div>
                    {/* MODAL */}
                </div>
            </div>
        )
    }
}

export default AddStateBook;