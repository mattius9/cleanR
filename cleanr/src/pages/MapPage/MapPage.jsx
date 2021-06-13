import './MapPage.css';
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { getCurrentLatLng } from '../../utilities/geolocation';

export default function MapPage() {
    
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
      
        return position === null ? null : (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )
      }
    
    // useEffect( async () => {
    //     const {lat,lng} = await getCurrentLatLng();
    //     setLat(lat);
    //     setLng(lng);
    // },[]);

    return (
        <div className="Page">
            Map Page
            <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
            </MapContainer>
            <Link to="/appointments">Appointments</Link>
            |
            <Link to="services">Services</Link>
            |
            <Link to="/">Home</Link>
        </div>
    )
}
