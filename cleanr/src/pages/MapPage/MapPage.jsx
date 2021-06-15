import './MapPage.css';
import React, { useEffect, useState} from 'react';
import { MapContainer, Marker, Popup, useMap} from 'react-leaflet';
import { BasemapLayer} from "react-esri-leaflet";

export default function MapPage() {

    // Lat & LNG used for testing
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);
    const [marker, setMarker] = useState([0,0]);
    const [markers, setMarkers] = useState([[43.555, 50.666],[50.012,49.555]]);


    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMap();
        
        useEffect(() => {
            map.locate().on("locationfound", function(e){
                // setMarker([89,0]);
                setPosition(e.latlng);
                map.panTo(e.latlng);
            });
        },[]);

        return position === null ? null : (
            <Marker position={position}>
            <Popup>You are here</Popup>
            </Marker>
        )
    }

    useEffect(() => {
        setMarker([89,0]);
        setMarkers([[10, -45], [-20, -30], [-30, 70]]);
        //SET MARKERS USING API CALL FOR APPOINTMENTS
        
    },[])
    


    return (
        <div className="Page">
            Map Page
            <MapContainer center={[lat, lng]} zoom={1} scrollWheelZoom={true}>
                <BasemapLayer name="Streets" />
                <LocationMarker />


                <Marker position={marker} />
                <Marker position={[lat,lng]} />

                {markers.map((position, idx) =>
                        <Marker key={`marker-${idx}`} position={position}></Marker>
                )}

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
