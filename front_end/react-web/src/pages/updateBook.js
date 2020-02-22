/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

const API = "http://localhost:8001/server/library";

export default class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autor: '',
            pais: '',
            año: '',
            titulo: '',
            editorial: '',
            existencias: '',
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
                autor: this.state.autor,
                pais: this.state.pais,
                año: this.state.año,
                titulo: this.state.titulo,
                editorial: this.state.editorial,
                existencias: this.state.existencias,
                portada: this.state.portada,
                id_estado_libro: 1,
            }
        }

        if (this.post.datos.autor === "" ||
            this.post.datos.pais === "" ||
            this.post.datos.año === "" ||
            this.post.datos.titulo === "" ||
            this.post.datos.editorial === "" ||
            this.post.datos.existencias === "" ||
            this.post.datos.portada === ""
            ) {
          alert("Complete todos los datos para continuar...");
        } else {
          axios.post(API, this.post)
          .then(response => {
            if ( response.data.ok === true ) {
                window.location.assign("http://localhost:3000/virtual_library");
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
        const { autor, pais, año, titulo, editorial, existencias, portada } = this.state
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
                                        Titulo
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
                                        Autor
                                    </label>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                                        type="text" 
                                        placeholder="Ej: Joel"
                                        name="autor"
                                        value={ autor }
                                        onChange={ this.changeHandler }
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="md:w-1/3 px-3">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="pais">
                                        Pais
                                    </label>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                                        type="text" 
                                        placeholder="Ej: Ecuador"
                                        name="pais"
                                        value={ pais }
                                        onChange={ this.changeHandler }
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="md:w-1/3 px-3">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="año">
                                        Año
                                    </label>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                                        type="text" 
                                        placeholder="Ej: 2020"
                                        name="año"
                                        value={ año }
                                        onChange={ this.changeHandler }
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6 ">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="editorial">
                                        Editorial
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
                                <div className="md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="existencias">
                                        Existencias
                                    </label>
                                    <input className="appearance-none block w-1/2 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-2" 
                                        type="number"
                                        name="existencias"
                                        min="1"
                                        value={ existencias }
                                        onChange={ this.changeHandler } 
                                    />
                                </div>
                                <div className="md:w-1/3 px-3">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="portada">
                                        Portada
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
                            <div className="mt-4">
                                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" type="submit">Guardar</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        )
    }
}
