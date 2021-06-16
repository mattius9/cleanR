import './ServicesPage.css';
import React, { useState, useEffect } from 'react';
import ServiceList from '../../components/ServiceList/ServiceList';
import LogOut from '../../components/LogOut/LogOut';

import * as servicesAPI from '../../utilities/services-api';

export default function ServicesPage({ currentRole, user, setUser}) {
    // State
    const [services, setServices] = useState([]);
    let agentId;
    if(currentRole == "agent") agentId = user._id;
    // {currentRole == "agent" ? agentId=user._id : null}
    
    console.log(`UserID`,user._id);
    console.log(`AgentID`, agentId);
    // Hooks
    useEffect( function(){
        async function fetchServices(){
            try {
                // Using this route in case of separation of services from user in model
                const data = await servicesAPI.getMyServices(user._id);
                console.log('REACHED BEYOND FETCH');
                console.log(data);
                if(data) setServices(data);
                console.log(`Service Page ${services}`);
            } catch(err){
                console.log(err.message);
            }
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
