/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const AddBook = () => {
    return(
        <div>
            <Sidebar />,
            <Header />,
            <div className="ml-64">
                <hr />
                <main className="my-8">
                    <p className="text-center my-5">Bienvenido a la sección para agregar un nuevo libro a la biblioteca virtual.</p>
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mx-8">
                    <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-full px-3">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                                    Titulo
                                </label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="text" placeholder="Ej: El Viaje al Centro de la Tierra"></input>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-6 ">
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                    Autor
                                </label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Ej: Joel"></input>
                            </div>
                            <div className="md:w-1/3 px-3">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                    Pais
                                </label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Ej: Ecuador"></input>
                            </div>
                            <div className="md:w-1/3 px-3">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                    Año
                                </label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Ej: 2020"></input>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-6 ">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                    Editorial
                                </label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Ej: Encarta Interprise"></input>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                    Número de copias
                                </label>
                                <input className="appearance-none block w-1/2 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-2" id="grid-last-name" type="number"></input>
                            </div>
                        </div>
                        <p className="text-red text-xs italic">Por favor complete todos los campos.</p>
                        <div className="mt-4">
                            <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" type="submit">Guardar</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AddBook;