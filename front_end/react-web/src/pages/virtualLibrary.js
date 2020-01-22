/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const VirtualLibrary = () => {
    return(
        <div>
            <Sidebar />,
            <Header />,
            <div className="component_position">
                <main className="my-8">
                    <p className="text-center">Bienvenido a la biblioteca virtual.</p>
    

    
                </main>
            </div>
        </div>
    )
}

export default VirtualLibrary;