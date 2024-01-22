
import React, { useState, useEffect } from 'react';
function PersonalDetails() {

    return (
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
            <div className="text-center p-4">
                <h2 className="text-xl font-bold">Título del Card</h2>
            </div>
            <div className="aspect-w-16 aspect-h-9">
                <img
                    className="object-cover object-center w-full h-full"
                    src="URL_DE_LA_IMAGEN_MEDIANA"
                    alt="Imagen Mediana"
                />
            </div>
            <div className="p-4 text-center">
                <p className="text-lg font-semibold">Nombre</p>
            </div>
        </div>

    )
}


export default PersonalDetails