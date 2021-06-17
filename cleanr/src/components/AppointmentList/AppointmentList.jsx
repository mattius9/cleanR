import React from 'react';
import Appointment from '../Appointment/Appointment';
import './AppointmentList.css';

export default function AppointmentList({role, user, appointments}) {
    
    let appointmentList = null;
    if (appointments){
        // serviceList = services.map(service => console.log(service))
        appointmentList = appointments.map(appointment =>
            <Appointment 
            appointment = {appointment} role={role} user={user}
            />
        );
    }

    return (
        <div className="appointment-list-container">
            {appointmentList ? <>{appointmentList}</>: <p>No Appointments Yet</p>}
        </div>
    )
}
