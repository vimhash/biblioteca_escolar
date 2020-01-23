/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const Home = () => {
  return (
    <div>
        <Sidebar />,
        <Header />,
        <div className="component_position">
            <main className="my-8">
                <hr />
                <div className="flex mb-4 h-56">
                    <div className="w-1/4 h-48 flex-1 text-center px-4 py-2 m-2">
                        <div className=" rounded  rounded-t-lg bg-pink-300 overflow-hidden shadow max-w-xs my-2 pt-20">
                            <div className="flex justify-center -mt-8">
                                <img src="http://www.cavsi.com/preguntasrespuestas/images/que-es-usuario.jpg" className="rounded-full h-24 w-24 border-solid border-white border-2 -mt-5" />		
                            </div>
                            <div className="text-center px-3 pb-6 pt-2 bg-white pt-5 hover:bg-gray-400 ">
                                <h3 className="text-black text-sm bold uppercase font-sans">Administrador</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 h-48 flex-1 text-center px-4 py-2 m-2">
                        <div className=" rounded  rounded-t-lg bg-pink-300 overflow-hidden shadow max-w-xs my-2 pt-20">
                            <div className="flex justify-center -mt-8">
                                <img src="https://image.flaticon.com/icons/png/512/44/44948.png" className="rounded-full h-24 w-24 border-solid bg-white border-white border-2 -mt-5" />		
                            </div>
                            <div className="text-center px-3 pb-6 pt-2 bg-white pt-5 hover:bg-gray-400 ">
                                <h3 className="text-black text-sm bold uppercase font-sans">Estudiantes</h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex mb-4 h-48">
                        <div className="w-1/4 h-48 flex-1 text-center px-4 py-2 m-2">
                            <div className=" rounded  rounded-t-lg bg-pink-300 overflow-hidden shadow max-w-xs my-2 pt-20">
                                <div className="flex justify-center -mt-8">
                                    <img src="https://image.flaticon.com/icons/png/512/29/29302.png" className="rounded-full h-24 w-24 border-solid bg-white border-white border-2 -mt-5" />		
                                </div>
                                <div className="text-center px-3 pb-6 pt-2 bg-white pt-5 hover:bg-gray-400 ">
                                    <h3 className="text-black text-sm bold uppercase font-sans">Libros</h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 h-48 flex-1 text-center px-4 py-2 m-2">
                            <div className=" rounded  rounded-t-lg bg-pink-300 overflow-hidden shadow max-w-xs my-2 pt-20">
                                <div className="flex justify-center -mt-8">
                                    <img src="data:image/png;base64,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" className="rounded-full h-24 w-24 border-solid bg-white border-white border-2 -mt-5" />
                                </div>
                                <div className="text-center px-3 pb-6 pt-2 bg-white pt-5 hover:bg-gray-400 ">
                                    <h3 className="text-black text-sm bold uppercase font-sans">Categorias</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  );
}

export default Home;
