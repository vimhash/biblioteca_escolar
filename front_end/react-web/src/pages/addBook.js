/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const AddBook = () => {
    return(
        <div>
            <Sidebar />,
            <Header />,
            <div className="component_position">
                <main className="my-8">
                    <p className="text-center">Bienvenido a la sección para agregar un nuevo libro a la biblioteca virtual.</p>
    

    
                </main>
            </div>
        </div>
    )
}

export default AddBook;