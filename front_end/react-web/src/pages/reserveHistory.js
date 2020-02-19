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
            reservas_aprobadas: [],
            reservas_rechazadas: [],
        }
    }

    componentDidMount() {
        axios.get(API+"?estado_reserva=1")
        .then(response => {
            this.setState({ reservas_aprobadas: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })

        axios.get(API+"?estado_reserva=2")
        .then(response => {
            this.setState({ reservas_rechazadas: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { reservas_aprobadas, reservas_rechazadas } = this.state
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <div className="justify-center my-5 select-none flex">
                            <p className="mt-5 text-center mr-10 text-2xl">Historial de Reservas realizadas por los estudiantes.</p>
                        </div>  
                        <div className="justify-center my-5 select-none flex">
                            <p className="mt-5 text-center mr-10 text-2xl">Aprobados.</p>
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
                                            { reservas_aprobadas.map(element => <p className="p-2 px-5" key={ element.id }> { element.id_estudiante } </p>) }
                                        </td>
                                        <td>
                                            { reservas_aprobadas.map(element => <p className="p-2 px-5" key={ element.id }> { element.id_libro } </p>) }
                                        </td>
                                        <td>
                                            { reservas_aprobadas.map(element => <p className="p-2 px-5" key={ element.id }> { element.id_estado_reserva } </p>) }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="justify-center my-5 select-none flex">
                            <p className="mt-5 text-center mr-10 text-2xl">Rechazados.</p>
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
                                            { reservas_rechazadas.map(element => <p className="p-2 px-5" key={ element.id }> { element.id_estudiante } </p>) }
                                        </td>
                                        <td>
                                            { reservas_rechazadas.map(element => <p className="p-2 px-5" key={ element.id }> { element.id_libro } </p>) }
                                        </td>
                                        <td>
                                            { reservas_rechazadas.map(element => <p className="p-2 px-5" key={ element.id }> { element.id_estado_reserva } </p>) }
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
