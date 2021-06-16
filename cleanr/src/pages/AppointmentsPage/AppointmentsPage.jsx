import './AppointmentsPage.css';
import React from 'react';
import AppointmentList from '../../components/AppointmentList/AppointmentList';
import LogOut from '../../components/LogOut/LogOut';
import AppointmentCalendar from "../../components/AppointmentCalendar/AppointmentCalendar"

export default function AppointmentsPage({user, setUser}) {
    return (
        <div className="Page">
            Appointments Page
            <AppointmentCalendar />
            <AppointmentList/>
            <LogOut user={user} setUser={setUser}/>
        </div>
    )
}
