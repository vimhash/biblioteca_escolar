/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

const API = "http://localhost:8001/server/library/reserva";

class ReserveHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table_header: {
                estado_reserva_id: 'Estado',
                persona_id: 'Estudiante',
                libro_id: 'Nombre del libro'
            },
            reservas: [],
        }
    }

    componentDidMount() {
        axios.get(API+"?tabla=reserva")
        .then(response => {
            this.setState({ reservas: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { reservas } = this.state
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <div class="justify-center my-5 select-none flex">
                            <p className="mt-5 text-center mr-10 text-2xl">Historial de Reservas realizadas por los estudiantes.</p>
                        </div>  
                        <div className="px-3 py-4 flex justify-center">
                            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                                <thead className="border-b">
                                    <tr>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.persona_id }</th>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.libro_id }</th>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.estado_reserva_id }</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                        <td>
                                            { reservas.map(element => <p className="p-2 px-5" key={ element.id }> {element.persona_id} </p>) }
                                        </td>
                                        <td>
                                            { reservas.map(element => <p className="p-2 px-5" key={ element.id }> {element.libro_id} </p>) }
                                        </td>
                                        <td>
                                            { reservas.map(element => <p className="p-2 px-5" key={ element.id }> {element.estado_reserva_id} </p>) }
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

export default ReserveHistory;
