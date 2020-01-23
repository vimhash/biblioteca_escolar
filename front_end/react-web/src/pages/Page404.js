/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Page404 = () => {
    return(
        <div>
            <div className="h-screen w-screen bg-blue-600 flex justify-center content-center flex-wrap">
                <p className="font-sans text-white">404 - Página no Encontrada</p>
            </div>

            <div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
                <span className="opacity-50">Regresar</span>
            </div>
        </div>
    )
}

export default Page404;