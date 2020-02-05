/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

const API = "http://localhost:8001/server/library";

class Reserve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reserves: [],
        }
    }

    componentDidMount() {
        axios.get(API+"?tabla=reserva")
        .then(response => {
            this.setState({ reserves: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { reserves } = this.state
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <p className="text-center">Aceptación o rechazo de reserva de libros.</p>
                        { reserves.map(element => 
                            <div className="max-w-md w-full lg:flex" key={ element.id }>
                                <img className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="https://tailwindcss.com/img/card-left.jpg" alt="pic" />
                                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-black font-bold text-xl mb-2">Libro: { element.libro_id }</div>
                                        <p className="text-grey-darker text-base">Estado: { element.estado_reserva_id }</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="profile_pic" />
                                        <div className="text-sm">
                                            <p className="text-black leading-none">Jonathan Reinink</p>
                                            <p className="text-grey-dark">Fecha pedido: Aug 18</p>
                                        </div>
                                    </div>
                                    <div className="m-3">
                                        <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                        <span className="mr-2">Aprovar</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                                        </svg>
                                        </button>
                                    </div>
                                    <div className="m-3">
                                        <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                        <span className="mr-2">Rechazar</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
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

export default Reserve;