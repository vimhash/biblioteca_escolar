/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const Home = () => {
  return (
    <div>
        <Sidebar />,
        <Header />,
        <div className="ml-64">
            <hr />
            <main className="my-8">
                <div className="flex h-56">
                    <div className="w-1/2 h-48 flex-1 text-center px-4 py-2 ml-24">
                        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                            <img className="w-full" src="https://lh4.googleusercontent.com/proxy/gcPI9_7KcNOYzKPcfLVwa1a6WMufmoMKD7ST7aeZDsms9NdLRVnFm7_BXL-pyUmZ-XtS1kPUC7A52vRqUrRhokRe1NzUflGxmnN4kq8Y4WqZvskAgvcoiDBrpe8" alt="Sunset in the mountains"></img>
                            <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Administrador</div>
                                <p className="text-grey-darker text-base">
                                    2
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-40 flex-1 text-center px-4 py-2 m-2">
                        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                            <img className="w-full" src="https://www.hotelogix.com/es/blog/wp-content/uploads/2019/06/Aumentar-reservaciones-directas.jpg" alt="Sunset in the mountains"></img>
                            <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Reserva</div>
                                <p className="text-grey-darker text-base">
                                    2
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex h-56 my-32">
                    <div className="w-3/5 flex-1 h-48 content-center text-center px-4 py-2 ml-24">
                        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                            <img className="w-full" src="https://andinaediciones.com.ec/modules/fieldslideshow/images/libros-andina-ediciones-602.jpg" alt="Sunset in the mountains"></img>
                            <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Libros</div>
                                <p className="text-grey-darker text-base">
                                    2
                                </p>
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
