import './MapPage.css';
import React, { useEffect, useState} from 'react';
import LogOut from '../../components/LogOut/LogOut';
import { MapContainer, Marker, Popup, useMap} from 'react-leaflet';
import { BasemapLayer} from "react-esri-leaflet";

import * as mapsAPI from '../../utilities/map-api';

export default function MapPage({ currentRole, user, setUser}) {

    // Lat & LNG used for testing
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);
    console.log(currentRole.role);


    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMap();
        
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
                    console.log('REACHED BEFORE FETCH');
                    console.log(`USER ID`, user._id);
                    // Using this route in case of separation of services from user in model
                    const data = await mapsAPI.getAppointments(user._id);
                    console.log('REACHED BEYOND FETCH');
                    console.log(data);
                    if(data) setAppointments(data);
                } catch(err){
                    console.log(JSON.parse(err));
                }
            }
            fetchAppointments();

            // setAppointments([[10, -45], [-20, -30], [-30, 70]]);
            //SET MARKERS USING API CALL FOR APPOINTMENTS
        },[]);

        return appointments.length === 0 ? null : (
            appointments.map((appointment, idx) =>
                <Marker key={`marker-${idx}`} position={[appointment.client.latitude,appointment.client.longitude]}>
                    <Popup>Appointment at {appointment.client.location.address} on {appointment.startTime}</Popup>
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
                    console.log(data);
                    if(data) setAgents(data);
                } catch(err){
                    console.log(JSON.parse(err));
                }
            }
            fetchAgents();

            // setAgents([[-50, -15], [-60, -30], [-60, -80]]);
        },[]);

        return agents.length === 0 ? null : (
            agents.map((agent, idx) =>
                <Marker key={`marker-${idx}`} position={[agent.latitude, agent.longitude]}>
                    <Popup>AGENT: {agent.name} ID: {agent._id}</Popup>
                </Marker>
            )
        )
    }    
    


    return (
        <div className="Page">
            Map Page
            <MapContainer center={[lat, lng]} zoom={10} scrollWheelZoom={true}>
                <BasemapLayer name="Streets" />
                <LocationMarker />

                {currentRole.role == "agent" ? <AppointmentMarkers /> : null}

                {currentRole.role == "client" ? <AgentMarkers /> : null}
                
                <Marker position={[lat,lng]} />

            </MapContainer>
            <LogOut user={user} setUser={setUser}/>

        </div>
    )
}


// Unused functionality:

/*
                addressFetch(e.latlng.lat, e.latlng.lng);

                    function addMarker(){
                        e.preventDefault();
                        const marker = e.latlng;
                        setMarkers(currentMarkers => [...currentMarkers, marker])
                        console.log(markers);
                    };

    async function addressFetch(lat,lng){
        let response = await fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=json&featureTypes=PointAddress&location=${lng}%2C${lat}`);
        response = await response.json();
        console.log(response.address);
        console.log(response.address.Address);
    }

                <button onClick={()=> addressFetch(lat, lng)}>Get Address</button>


*/
