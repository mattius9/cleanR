import './MapPage.css';
import React, { useEffect, useState} from 'react';
import { MapContainer, Marker, Popup, useMap} from 'react-leaflet';
import { BasemapLayer} from "react-esri-leaflet";

export default function MapPage() {

    // Lat & LNG used for testing
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);

    async function addressFetch(lat,lng){
        let response = await fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=json&featureTypes=PointAddress&location=${lng}%2C${lat}`);
        response = await response.json();
        console.log(response.address);
        console.log(response.address.Address);
    }

    // function addMarker(){
    //     e.preventDefault();
    //     const marker = e.latlng;
    //     setMarkers(currentMarkers => [...currentMarkers, marker])
    //     console.log(markers);
    //   };

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMap();
        
        useEffect(() => {
            map.locate().on("locationfound", function(e){
                setPosition(e.latlng);
                map.panTo(e.latlng);
                console.log("done");
                addressFetch(e.latlng.lat, e.latlng.lng);
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
            <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>

                <BasemapLayer name="Streets" />
                <LocationMarker />
            </MapContainer>

            <button onClick={()=> addressFetch(lat, lng)}>Get Address</button>
        </div>
    )
}
