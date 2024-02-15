import React from 'react';


function AirplaneHistory() {
    const nombres = ['Aiplane-2286', "Aiplane-1973", "Aiplane-3600", "Aiplane-23587"]; // Puedes cambiar estos nombres según tus necesidades
    const estado = ['Active', "Inactive", 'Active', "Inactive"]; // Puedes cambiar el estado según tus necesidades

    return (
        <div class="container mx-auto my-8 px-4 lg:px-8  ">
            <div class="overflow-x-auto rounded-lg">
                <table class="w-full lg:max-w-3xl bg-[#2C2C2C] rounded-lg shadow-md">
                    <thead>
                        <tr class="bg-gray-800 text-white">
                            <th class="py-4 px-6 text-left">Airplane</th>
                            <th class="py-4 px-6 text-right flex items-center justify-end">
                                <span class="mr-2">Status</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {nombres.map((nombre, index) => (
                            <tr key={index} class={index % 2 === 0 ? 'bg-[#2C2C2C]' : 'bg-black'}>
                                <td class="py-3 px-6 text-white">{nombre}</td>
                                <td class="py-3 px-6 text-right">
                                    <button class="bg-orange-500 text-white font-bold py-2 px-4 rounded">
                                        {estado[index]}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>





    );
};


export default AirplaneHistory;
