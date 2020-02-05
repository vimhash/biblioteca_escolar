/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
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

    render() {
        const { libros } = this.state
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <p className="text-center pb-8 text-2xl my-5">Bienvenido a la biblioteca virtual.</p>
                            { libros.map(element => 
                                <div className="max-w-md w-full lg:flex px-16" key={ element.id }>
                                    <img className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="../../assets/book.png" alt={ element.libro_titulo } />
                                    <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div className="mb-8">
                                            <div className="text-black font-bold text-xl mb-2">Libro: { element.libro_titulo }</div>
                                            <p className="text-grey-darker text-base">Autor: { element.libro_autor }</p>
                                            <p className="text-grey-darker text-base">Editorial: { element.libro_editorial }</p>
                                        </div>
                                        <div className="flex items-center">
                                            <img className="w-10 h-10 rounded-full mr-4" src="https://img2.freepng.es/20181124/poz/kisspng-vector-graphics-book-computer-icons-encapsulated-p-5bf9f29b3c8296.9918153415431072272479.jpg" alt="pic" />
                                            <div className="text-sm">
                                                <p className="text-black leading-none">Año: { element.libro_año }</p>
                                                <p className="text-grey-dark">Pais: { element.libro_pais }</p>
                                            </div>
                                        </div>
                                        <div className="m-3">
                                            <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                            <span className="mr-2">Detalles</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                                            </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) }
                    </main>
                </div>
            </div>
        )
    }
}

export default VirtualLibrary;