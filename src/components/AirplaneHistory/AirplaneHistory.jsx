import React from 'react';


function AirplaneHistory() {
    const nombres = ['Aiplane-2286', "Aiplane-1973", "Aiplane-3600", "Aiplane-23587"]; // Puedes cambiar estos nombres según tus necesidades
    const estado = ['Active', "Inactive", 'Active', "Inactive"]; // Puedes cambiar el estado según tus necesidades

    return (
        <div className="w-1/2 mr-4 rounded-xl  shadow-md">
            <div className="overflow-x-auto rounded-xl">
                <table className="w-full lg:max-w-3xl bg-[#2C2C2C] rounded-lg shadow-md">
                    <thead className=''>
                        <tr className="bg-[#2C2C2C] text-white">
                            <th className="py-4 px-6 text-left">Airplane History</th>
                            <th className="py-4 px-6 text-right flex items-center justify-end">
                                <span className="mr-2">Status</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {nombres.map((nombre, index) => (
                            <tr key={index} className={index % 2 === 1 ? 'bg-[#2C2C2C]' : 'bg-black'}>
                                <td className="py-3 px-6 text-white">{nombre}</td>
                                <td className="py-3 px-6 text-right">
                                    <button className={`px-2 py-1 text-sm text-black font-bold rounded-full ${estado[index] === 'Active' ? 'bg-orange-500' : 'bg-white'}`}>
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
