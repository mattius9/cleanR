import './MapPage.css';
import React, { useEffect, useState} from 'react';
import { MapContainer, Marker, Popup, useMap} from 'react-leaflet';
import { BasemapLayer} from "react-esri-leaflet";

export default function MapPage() {

    // Lat & LNG used for testing
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);
    const [marker, setMarker] = useState([0,0]);


    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMap();
        
        useEffect(() => {
            map.locate().on("locationfound", function(e){
                setPosition(e.latlng);
                map.panTo(e.latlng);
            });
        }, [map]);

        
        
        return position === null ? null : (
            <Marker position={position}>
            <Popup>You are here</Popup>
            </Marker>
        )
    }


    return (
        <div className="Page">
            Map Page
            <MapContainer center={[lat, lng]} zoom={10} scrollWheelZoom={true}>
                <BasemapLayer name="Streets" />
                <LocationMarker />


                <Marker position={marker} />
                <Marker position={[lat,lng]} />

                
            </MapContainer>
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
