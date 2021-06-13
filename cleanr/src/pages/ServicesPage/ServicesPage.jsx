import './ServicesPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceList from '../../components/ServiceList/ServiceList';

export default function ServicesPage() {
    return (
        <div className="Page">
            Services Page
            <ServiceList />
        </div>
    )
}
