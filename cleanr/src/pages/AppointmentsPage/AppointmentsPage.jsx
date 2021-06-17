import './AppointmentsPage.css';
import React, {useState, useEffect}from 'react';
import AppointmentList from '../../components/AppointmentList/AppointmentList';
import LogOut from '../../components/LogOut/LogOut';
import AppointmentCalendar from "../../components/AppointmentCalendar/AppointmentCalendar"

import * as appointmentsAPI from '../../utilities/appointments-api';

export default function AppointmentsPage({user, setUser}) {

    const [appointments, setAppointments] = useState([]);
    const[toggleAppointmentView, setToggleAppointmentView] = useState('list')
    function switchView(e){
        document.getElementById('appt-list');
        document.getElementById('appt-calendar');
    }

    useEffect( function(){
        async function fetchAppointments(){
            try {
                const data = await appointmentsAPI.getAppointments(user._id);
                console.log(data);
                if(data) setAppointments(data);
            } catch(err){
                console.log(err.message);
            }
        }
        fetchAppointments();
    },[toggleAppointmentView]);

    return (
        <div className="Page">
            <div className="appointment-container">
                
            {toggleAppointmentView === 'list' ?
            <AppointmentList appointments={appointments}/>:
            <AppointmentCalendar />}
            </div>
            <div className="toggle-appointment-view">
                <button type="button" id="appt-list" className="appt-view-btn calendar">List</button> 
                <button type="button" id="appt-calendar" className="appt-view-btn list">Calendar</button> 
                </div>
            <LogOut user={user} setUser={setUser}/>
        </div>
    )
}
