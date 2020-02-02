/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const VirtualLibrary = () => {
    return(
        <div>
            <Sidebar />,
            <Header />,
            <div className="ml-64">
                <hr />
                <main className="my-8">
                    <p className="text-center pb-8">Bienvenido a la biblioteca virtual.</p>
                    <div className="flex h-full">
                    <div className="w-1/2 max-w-md w-full lg:flex px-16">
                            <img className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="https://images-na.ssl-images-amazon.com/images/I/91zIwQ1iI1L.jpg" alt="pic" title="Woman holding a mug" />
                            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <div className="text-black font-bold text-xl mb-2">Libro: Viaje al Centro de la Tierra</div>
                                    <p className="text-grey-darker text-base">Autor: Julio Verde</p>
                                    <p className="text-grey-darker text-base">Editorial: Austral</p>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-10 h-10 rounded-full mr-4" src="https://img2.freepng.es/20181124/poz/kisspng-vector-graphics-book-computer-icons-encapsulated-p-5bf9f29b3c8296.9918153415431072272479.jpg" alt="profile_pic" />
                                    <div className="text-sm">
                                        <p className="text-black leading-none">Año: 1864</p>
                                        <p className="text-grey-dark">Pais: Francia</p>
                                    </div>
                                </div>
                                <div class="m-3">
                                    <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                    <span class="mr-2">Detalles</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                                    </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 max-w-md w-full lg:flex px-16">
                            <img className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="https://st-listas.20minutos.es/images/2011-09/302264/3167682_249px.jpg?1516782855" alt="pic" title="Woman holding a mug" />
                            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <div className="text-black font-bold text-xl mb-2">Libro: Cien años de Soledad</div>
                                    <p className="text-grey-darker text-base">Autor: Gabriel García Márquez</p>
                                    <p className="text-grey-darker text-base">Editorial: Sudamericana</p>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-10 h-10 rounded-full mr-4" src="https://img2.freepng.es/20181124/poz/kisspng-vector-graphics-book-computer-icons-encapsulated-p-5bf9f29b3c8296.9918153415431072272479.jpg" alt="profile_pic" />
                                    <div className="text-sm">
                                        <p className="text-black leading-none">Año: 1967</p>
                                        <p className="text-grey-dark">Pais: Colombia</p>
                                    </div>
                                </div>
                                <div class="m-3">
                                    <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                    <span class="mr-2">Detalles</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                                    </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default VirtualLibrary;