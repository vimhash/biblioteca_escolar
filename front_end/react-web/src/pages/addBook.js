/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Swal from 'sweetalert2';
import axios from 'axios';

const API = "http://localhost:8001/server/library";

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autor: '',
            pais: '',
            año: '',
            titulo: '',
            editorial: '',
            portada: '',
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    saveData = e => {
        e.preventDefault()
        this.post = {
            tabla: "libro",
            datos: {
                id_estado_libro: 1,
                autor: this.state.autor,
                pais: this.state.pais,
                año: this.state.año,
                titulo: this.state.titulo,
                editorial: this.state.editorial,
                disponible: 1,
                portada: this.state.portada,
            }
        }

        if (this.post.datos.autor === "" ||
            this.post.datos.pais === "" ||
            this.post.datos.año === "" ||
            this.post.datos.titulo === "" ||
            this.post.datos.editorial === "" ||
            this.post.datos.portada === ""
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
                .then( () => this.props.history.push('/virtual_library'))
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
        const { autor, pais, año, titulo, editorial, portada } = this.state
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <p className="text-center my-5 text-2xl">Agregar un nuevo libro al catálogo.</p>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mx-8" onSubmit={ this.saveData }>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="titulo">
                                        Titulo *
                                    </label>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" 
                                        type="text" 
                                        placeholder="Ej: El Viaje al Centro de la Tierra"
                                        name="titulo"
                                        value={ titulo }
                                        onChange={ this.changeHandler }
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6 ">
                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="autor">
                                        Autor/es *
                                    </label>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                                        type="text" 
                                        placeholder="Ej: Joel"
                                        name="autor"
                                        pattern="[A-Za-z .]*"
                                        value={ autor }
                                        onChange={ this.changeHandler }
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="md:w-1/3 px-3">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="pais">
                                        Pais *
                                    </label>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                                        type="text" 
                                        placeholder="Ej: Ecuador"
                                        name="pais"
                                        pattern="[A-Z a-z]*"
                                        value={ pais }
                                        onChange={ this.changeHandler }
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="md:w-1/3 px-3">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="año">
                                        Año *
                                    </label>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                                        type="text" 
                                        placeholder="Ej: 2020"
                                        name="año"
                                        pattern="[0-9]{4}"
                                        value={ año }
                                        onChange={ this.changeHandler }
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6 ">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="editorial">
                                        Editorial *
                                    </label>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                                        type="text" 
                                        placeholder="Ej: Encarta Interprise"
                                        name="editorial"
                                        value={ editorial }
                                        onChange={ this.changeHandler }
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="portada">
                                        Portada *
                                    </label>
                                    <input 
                                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                        name="portada"
                                        type="file"
                                        defaultValue={ portada }
                                        onChange={ this.onFileChange }
                                    />
                                </div>
                            </div>
                            <p className="text-red text-xs italic">Por favor complete todos los campos*.</p>
                            <div className="mt-4 text-center">
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

export default withRouter(AddBook);
