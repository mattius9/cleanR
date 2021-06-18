import './MapPage.css';
import React, { useEffect, useState} from 'react';
import { MapContainer, Marker, Popup, useMap} from 'react-leaflet';
import { BasemapLayer} from "react-esri-leaflet";
import {Link} from 'react-router-dom';

import * as mapsAPI from '../../utilities/map-api';

export default function MapPage({ currentRole, user, setUser, setAgent}) {

    // Lat & LNG used for testing
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);

    let map;

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        map = useMap();
        
        useEffect(() => {
            map.locate().on("locationfound", function(e){
                setPosition(e.latlng);
                map.panTo(e.latlng);
            });
        },[map]);

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }

    function AppointmentMarkers(){
        const [appointments, setAppointments] = useState([]);

        useEffect(() => {

            async function fetchAppointments(){
                try {
                    // Using this route in case of separation of services from user in model
                    const data = await mapsAPI.getAppointments(user._id);
                    if(data) setAppointments(data);
                } catch(err){
                    console.log(JSON.parse(err));
                }
            }
            fetchAppointments();

        },[map]);

        return appointments.length === 0 ? null : (
            appointments.map((appointment, idx) =>
                <Marker key={`marker-${idx}`} position={[appointment.client.latitude,appointment.client.longitude]}>
                    <Popup>Appointment at {appointment.client.location.address} on {appointment.startTime.slice(0,10)}<Link/></Popup>
                </Marker>
            )
        )
    }

    function AgentMarkers(){
        const [agents, setAgents] = useState([]);

        useEffect(() => {

            async function fetchAgents(){
                try {
                    // Using this route in case of separation of services from user in model
                    const data = await mapsAPI.getAgents();
                    if(data) setAgents(data);
                } catch(err){
                    console.log(JSON.parse(err));
                }
            }
            fetchAgents();
        },[map]);

        return agents.length === 0 ? null : (
            agents.map((agent, idx) =>
                <Marker key={`marker-${idx}`} position={[agent.latitude, agent.longitude]}>
                    <Popup>Agent: {agent.name}<Link to={`/services/${agent._id}`}>See my Services</Link></Popup>
                </Marker>
            )
        )
    }    
    


    return (
        <div className="Page">
            <MapContainer center={[lat, lng]} zoom={10} scrollWheelZoom={true}>
                <BasemapLayer name="Streets" />
                <LocationMarker />

                {currentRole.role == "agent" ? <AppointmentMarkers /> : null}

                {currentRole.role == "client" ? <AgentMarkers /> : null}
                
                <Marker position={[lat,lng]} />

            </MapContainer>

        </div>
    )
}
