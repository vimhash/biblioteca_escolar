/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

const API = "http://localhost:8001/server/";

export default class ApprovedOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table_header: {
                id_estudiante: 'Identificación',
                nombre_estudiante: 'Estudiante',
                id_libro: 'Nombre del libro',
                disponible: '¿Libro disponible? / ¿Devuelto?',
            },
            reservas_aprobadas: [],
        }
    }

    componentDidMount() {
        axios.get(API+"library/reserva?estado_reserva=1")
        .then(response => {
            this.setState({ reservas_aprobadas: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })
    }

    stateBook = (id, state) => {
        axios.get(`${API}library_byID?tabla=reserva&&id=${ id }&&campo=id_libro`)
        .then(response => {
            axios.put(API+"library?tabla=libro", {
                datos: [{
                    id: JSON.stringify(response.data.datos[0].id_libro),
                    disponible: state
                }]
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        const { reservas_aprobadas } = this.state
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <div className="justify-center my-5 select-none flex">
                            <p className="mt-5 text-center mr-10 text-2xl">Aprobados.</p>
                        </div>  
                        <div className="px-3 py-4 flex justify-center">
                            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                                <thead className="border-b">
                                    <tr>
                                        <th className="text-left p-3 px-5 text-center">{ this.state.table_header.id_estudiante }</th>
                                        <th className="text-left p-3 px-5 text-center">{ this.state.table_header.nombre_estudiante }</th>
                                        <th className="text-left p-3 px-5 text-center">{ this.state.table_header.id_libro }</th>
                                        <th className="text-left p-3 px-5 text-center">{ this.state.table_header.disponible }</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                        <td>
                                            { reservas_aprobadas.map(element => <p className="p-2 px-5 text-center" key={ element.id }> { element.id_estudiante } </p>) }
                                        </td>
                                        <td>
                                            { reservas_aprobadas.map(element => <p className="p-2 px-5 text-center" key={ element.id }> { element.nombre_estudiante } </p>) }
                                        </td>
                                        <td>
                                            { reservas_aprobadas.map(element => <p className="p-2 px-5 text-center" key={ element.id }> { element.id_libro } </p>) }
                                        </td>
                                        <td>
                                            { reservas_aprobadas.map(element => <p className="p-2 px-5 text-center" key={ element.id }><button onClick={ () => this.stateBook(element.id, 'true') } className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">SI</button></p>) }
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
