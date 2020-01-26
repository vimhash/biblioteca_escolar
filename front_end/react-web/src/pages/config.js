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
                <main className="my-8">
                    <p className="text-center">Bienvenido a la seccion de configuración del sistema.</p>
    

    
                </main>
            </div>
        </div>
    )
}

export default Config;