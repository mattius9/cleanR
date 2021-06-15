import "./Service.css";
import React from 'react'

export default function Service({service}) {
    return (
        <div className="card">
            <p>Type: {service.name}</p>
            <p>Hourly Price: {service.price}</p>
            <p>Minimum Hours: {service.minimumHours}</p>
        </div>
    )
}
