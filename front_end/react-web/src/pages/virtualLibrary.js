/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

const API = "http://localhost:8001/server/library";

class VirtualLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            libros: []
        }
    }

    componentDidMount() {
        axios.get(API+"?tabla=libro")
        .then(response => {
            this.setState({ libros: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })
    }

    updateBook = (p_id, p_id_estado_libro, p_autor, p_pais, p_año, p_titulo, p_editorial, p_portada) => {
        localStorage.setItem('id', p_id);
        localStorage.setItem('id_estado_libro', p_id_estado_libro);
        localStorage.setItem('autor', p_autor);
        localStorage.setItem('pais', p_pais);
        localStorage.setItem('año', p_año);
        localStorage.setItem('titulo', p_titulo);
        localStorage.setItem('editorial', p_editorial);
        localStorage.setItem('portada', p_portada);
        this.props.history.push('/update_book')
    }

    render() {
        const { libros } = this.state
        const assets1 = require('../assets/logoLibro.jpg');

        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <p className="text-center pb-8 text-2xl my-5">Catálogo de Libros.</p>
                        <div className="flex flex-wrap items-center justify-center">
                            { libros.map(element => 
                                <div className="max-w-md w-full lg:flex" key={ element.id }>
                                    <img className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={ element.portada }  alt={ element.titulo } />
                                    <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div className="mb-8">
                                            <div className="text-black font-bold text-xl mb-2">{ element.titulo }</div>
                                            <p className="text-grey-darker text-base">Autor: { element.autor }</p>
                                            <p className="text-grey-darker text-base">Editorial: { element.editorial }</p>
                                        </div>
                                        <div className="flex items-center">
                                            <img className="w-10 h-10 rounded-full mr-4" src={ assets1 } alt="pic" />
                                            <div className="text-sm">
                                                <p className="text-black leading-none">Año: { element.año }</p>
                                                <p className="text-grey-dark">Pais: { element.pais }</p>
                                            </div>
                                        </div>
                                        <div className="m-3">
                                            <button className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                                                onClick={ () => this.updateBook(element.id, element.id_estado_libro, element.autor, element.pais, element.año, element.titulo, element.editorial, element.portada) }>
                                                <i class="fas fa-edit"></i>
                                                <span className="mr-2">Actualizar</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) }
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default withRouter(VirtualLibrary);
