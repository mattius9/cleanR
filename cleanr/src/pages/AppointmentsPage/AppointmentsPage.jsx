import './AppointmentsPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AppointmentList from '../../components/AppointmentList/AppointmentList';

export default function AppointmentsPage() {
    return (
        <div className="Page">
            Appointments Page
            <AppointmentList/>
        </div>
    )
}
