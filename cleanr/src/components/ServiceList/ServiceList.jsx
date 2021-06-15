import "./ServiceList.css";
import React from 'react';
import Service from '../Service/Service';

export default function ServiceList({services,setServices}) {

    const serviceList = services.map(service =>
        <Service 
        key={service._id}
        service = {service}
        />
    );
    return (
        <div className="Component">
            {services ? {services} : <p>No Services Yet</p>}
        </div>
    )
}
