import './MapPage.css';
import React, { useEffect, useState} from 'react';
import LogOut from '../../components/LogOut/LogOut';
import { MapContainer, Marker, Popup, useMap} from 'react-leaflet';
import { BasemapLayer} from "react-esri-leaflet";

export default function MapPage({ user, setUser}) {

    // Lat & LNG used for testing
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);


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
            setAppointments([[10, -45], [-20, -30], [-30, 70]]);
            //SET MARKERS USING API CALL FOR APPOINTMENTS
        },[]);

        return appointments.length === 0 ? null : (
            appointments.map((position, idx) =>
                <Marker key={`marker-${idx}`} position={position}>
                    <Popup>APPOINTMENT</Popup>
                </Marker>
            )
        )
    }

    function AgentMarkers(){
        const [agents, setAgents] = useState([]);

        useEffect(() => {
            setAgents([[-50, -15], [-60, -30], [-60, -80]]);
            //SET MARKERS USING API CALL FOR APPOINTMENTS
        },[]);

        return agents.length === 0 ? null : (
            agents.map((position, idx) =>
                <Marker key={`marker-${idx}`} position={position}>
                    <Popup>AGENTS</Popup>
                </Marker>
            )
        )
    }    
    


    return (
        <div className="Page">
            Map Page
            <MapContainer center={[lat, lng]} zoom={3} scrollWheelZoom={true}>
                <BasemapLayer name="Streets" />
                <LocationMarker />

                <AppointmentMarkers />
                <AgentMarkers />

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
