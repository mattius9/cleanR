import React from 'react';
import './Appointment.css';

export default function Appointment({appointment}) {
    const endTime = Date.parse(appointment.endTime);
    const startTime = Date.parse(appointment.startTime);
    const difference = endTime-startTime;
    const minutes = 1000 *60
    const hours = minutes * 60;

    const totalHours = Math.round(difference/hours)

    console.log(typeof appointment.startTime);
    return (
        <div className="card">
            <p>{appointment.status}</p>
            <p>Duration : {totalHours}</p>
            <p>Date: {appointment.startTime} </p>
            <p>Start Time: {appointment.startTime} </p>
            <p>End Time: {appointment.endTime}</p>
            <p>Service: {appointment.serviceName}</p>
            <p>agent: {appointment.agent.name}</p>
            <p>client: {appointment.client.name}</p>
            <p>total price: {appointment.servicePrice*totalHours}</p>
        </div>
    )
}
