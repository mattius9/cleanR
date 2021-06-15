import './ServicesPage.css';
import React from 'react';
import ServiceList from '../../components/ServiceList/ServiceList';
import LogOut from '../../components/LogOut/LogOut';

export default function ServicesPage({ user, setUser}) {
    return (
        <div className="Page">
            Services Page 
            <ServiceList />
            <LogOut user={user} setUser={setUser}/>
        </div>
    )
}
