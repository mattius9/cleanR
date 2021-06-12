import './MapPage.css';
import React, { useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getCurrentLatLng } from '../../utilities/geolocation';

export default function MapPage() {
    
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);
    
    useEffect( async () => {
        const {lat,lng} = await getCurrentLatLng();
        setLat(lat);
        setLng(lng);
    },[]);

    return (
        <div>
            Map Page
            <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
