/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const Config = () => {
    return(
        <div>
            <Sidebar />,
            <Header />,
            <div className="ml-64">
                <hr />
                <main className="my-8">
                    <p className="text-center">Bienvenido a la sección de configuración del sistema.</p>

                    <div className="flex ml-2 mr-2">
                        <button className="flex-1 bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded">
                            Agregar Tipo de Persona
                        </button>

                        <button className="flex-1 bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 ml-2 rounded">
                            Agregar Estado de Persona
                        </button>

                        <button className="flex-1 bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 ml-2 rounded">
                            Agregar Estado de Reserva
                        </button>

                        <button className="flex-1 bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 ml-2 rounded">
                            Agregar Estado de Libro
                        </button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Config;