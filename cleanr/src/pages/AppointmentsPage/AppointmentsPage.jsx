import './AppointmentsPage.css';
import React, {useState, useEffect}from 'react';
import AppointmentList from '../../components/AppointmentList/AppointmentList';
import LogOut from '../../components/LogOut/LogOut';
import AppointmentCalendar from "../../components/AppointmentCalendar/AppointmentCalendar"

import * as appointmentsAPI from '../../utilities/appointments-api';

export default function AppointmentsPage({user, setUser}) {

    const [appointments, setAppointments] = useState([]);

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
    },[]);

    return (
        <div className="Page">
            <AppointmentCalendar />
            <AppointmentList appointments={appointments}/>
            <LogOut user={user} setUser={setUser}/>
        </div>
    )
}
