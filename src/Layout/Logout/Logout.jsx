import React, { useEffect } from "react";
import {
    Navigate
} from "react-router-dom";
import { useContextAir } from "../../Context";

const Logout = () => {
    const { logout } = useContextAir()

    useEffect(() => {
        logout()
        localStorage.clear();
        window.location.reload();
        
    });


    return (
        <Navigate to='/' replace />
    )

}

export default Logout