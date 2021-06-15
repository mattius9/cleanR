import './ServicesPage.css';
import React, { useState, useEffect } from 'react';
import ServiceList from '../../components/ServiceList/ServiceList';
import LogOut from '../../components/LogOut/LogOut';

import * as servicesAPI from '../../utilities/services-api';

export default function ServicesPage({ user, setUser}) {
    // State
    const [services, setServices] = useState([]);

    // Hooks
    useEffect(function(){
        async function fetchServices(){
            const data = await servicesAPI.getAll();
            setServices(data);
        }
        fetchServices();
    }, []);


    return (
        <div className="Page">
            Services Page 
            <ServiceList services = {services} setServices= {setServices}/>
            <LogOut user={user} setUser={setUser}/>
        </div>
    )
}
