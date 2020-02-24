/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from'react';
import ReactModal from 'react-modal';
import { Link } from "react-router-dom";
import axios from 'axios';

const API = "http://localhost:8001/server/library_searchbook";

export default class Header extends Component {
    handleOpenModal () { this.setState({ showModal: true }) }      
    handleCloseModal () { this.setState({ showModal: false }) }

    constructor(props) {
        super(props)
        this.state = {
            titulo: '',
            libros: [],
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    searchBook = e => {
        e.preventDefault()
        axios.get(`${API}?titulo=${ this.state.titulo }`)
        .then( response => {
            this.setState({ libros: response.data.datos })
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
        window.location.assign("http://localhost:3000/update_book");
    }

    render() {
        const { titulo, libros } = this.state
        return(
            <div className="flex-grow flex mr-2 ml-64">
                <div className="flex-grow flex">
                    <form className="relative text-gray-600 block mt-4 lg:inline-block lg:mt-0 mr-4" onSubmit={ this.searchBook }>
                        <input 
                            className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                            type="search" 
                            placeholder="Buscar Libro" 
                            name="titulo" 
                            value={ titulo }
                            onChange={ this.changeHandler }
                            autoComplete="off" 
                        />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4" onClick={ this.handleOpenModal }>
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
                <div>
                    <Link to="/">
                        <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                        Salir
                        </button>
                    </Link>
                </div>

                {/* MODAL */}
                <ReactModal isOpen={this.state.showModal} contentLabel="onRequestClose Example" onRequestClose={this.handleCloseModal}
                className="flex-1 text-white text-center pl-48 py  py-0 my-10 mr-40 ml-64">
                    <div className="leading-loose">
                        <div className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                            <div className="flex flex-wrap items-center justify-center">
                                { libros.map(element => 
                                    <div key={ element.id }>
                                        <h1 className="text-black">{ element.titulo }</h1>
                                        <img 
                                            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden m-4" 
                                            src={ element.portada }  
                                            alt={ element.titulo } 
                                            onClick={ () => this.updateBook(element.id, element.id_estado_libro, element.autor, element.pais, element.año, element.titulo, element.editorial, element.portada) }
                                        />
                                    </div>
                                ) }
                            </div>
                        </div>
                    </div>
                </ReactModal>
                {/* MODAL */}
            </div>
        )
    }
}
