/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

class Reserve extends Component {
    render() {
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <p className="text-center">Aceptación o rechazos de reserva de libros.</p>
        
                    </main>
                </div>
            </div>
        )
    }
}

export default Reserve;