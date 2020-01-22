/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const Admin = () => {
    return(
        <div>
            <Sidebar />,
            <Header />,
            <div className="component_position">
                <main className="my-8">
                    <p className="text-center">Bienvenido a la sección para ver a los administradores.</p>
    

    
                </main>
            </div>
        </div>
    )
}

export default Admin;