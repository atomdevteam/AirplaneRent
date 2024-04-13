import React, { useState, useEffect } from 'react';
import { useContextAir } from '../../Context';

function AdditionalPersonalInformation() {
    const {InforPerfil} =  useContextAir()
    // https://imgv2-2-f.scribdassets.com/img/document/374883636/original/6640e45e4a/1604851331?v=1
    // https://th.bing.com/th/id/R.3310e2cbafdad69a3ba763b96f3b2f77?rik=IHyFU810gVG%2b%2fA&pid=ImgRaw&r=0
    // https://th.bing.com/th/id/OIP.XKCn6qtMi4AAusMjT3mTdAHaFL?rs=1&pid=ImgDetMain
    return (
        <div className="rounded-lg bg-[#2C2C2C] p-4">
            <div className="flex flex-col sm:flex-row">
                <div className="mb-6 sm:mb-0">
                    <h1 className="text-xl font-bold text-white mb-4">Logbook</h1>
                    <Card imagen={InforPerfil?.Logbook} />
                </div>
                <div className="pl-4 sm:pl-10">
                    <h1 className="text-xl font-bold text-white mb-4">Licence</h1>
                    <Card imagen={InforPerfil?.Licence} />
                </div>
                <div className="pl-4 sm:pl-10">
                    <h1 className="text-xl font-bold text-white mb-4">Medical Certificate</h1>
                    <Card imagen={InforPerfil?.MedicalCertificate} />
                </div>
            </div>
        </div>
    );
}

const Card = ({ imagen }) => {
    return (
        <div className="m-2 p-6 bg-black rounded-lg border border-orange-500 w-full">
            <img
                src={imagen}
                alt="Placeholder"
                className="rounded-lg w-96 h-40"
            />

        </div>
    );
};





export default AdditionalPersonalInformation