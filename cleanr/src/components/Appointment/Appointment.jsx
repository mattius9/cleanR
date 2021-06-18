import React from 'react';
import './Appointment.css';

export default function Appointment({role, user, appointment}) {

    const setTime = (time) => {
        let hours = time.getHours();
        let minutes = time.getMinutes();    
        const ampm = hours >= 12 ? 'pm' : 'am';
      
        hours %= 12;
        hours = hours || 12;    
        minutes = minutes < 10 ? `0${minutes}` : minutes;
      
        const timeString = `${hours}:${minutes} ${ampm}`;
      
        return timeString;
      };
      const endTimeToDate= new Date(appointment.endTime);
      const startTimeToDate = new Date(appointment.startTime);
      const startTime=setTime(startTimeToDate)
      const endTime= setTime(endTimeToDate)
      

      const endHours = Date.parse(appointment.endTime);
      const startHours = Date.parse(appointment.startTime);
      const difference = endHours-startHours;
      const hours = 1000 *60* 60;
  
      const totalHours = Math.round(difference/hours)
      const apptDate = new Date(appointment.startTime)

    console.log(apptDate.toLocaleString([], { hour12: true}));
    return (
        <div className="card">
            <div className={`appointment-card appt-status-${appointment.status}`}>
                <div className="appointment-details appt-service-title">Service: {appointment.serviceName}</div>
                <div className="appointment-details appt-date">{startTimeToDate.getFullYear() + "/" + (startTimeToDate.getMonth() + 1) + "/" + startTimeToDate.getDate()}</div>
                <div className="appointment-details appt-times">@{startTime} for {totalHours} hrs</div>
                <div className="appointment-details appt-user1">agent: {appointment.agent.name}</div>
                <div className="appointment-details appt-user2">client: {appointment.client.name}</div>
                <div className="appointment-details appt-service-price">${appointment.servicePrice*totalHours} </div>
            </div>
            {/* <p>total price: {appointment.servicePrice*totalHours}</p> */}
        </div>
    )
}
