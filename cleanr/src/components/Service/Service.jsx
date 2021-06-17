import "./Service.css";
import React, {useState} from 'react';
import PopupCreateAppointment from "../PopupCreateAppointment/PopupCreateAppointment";

export default function Service({service}) {

    const [popupBoolean, setPopupBoolean] = useState(false);

    return (
        <div className="card">
            <div className="service">
                <PopupCreateAppointment service={service} trigger={popupBoolean} setTrigger={setPopupBoolean}/>
                <p>Type: {service.name}</p>
                <p>Hourly Price: {service.price}</p>
                <p>Minimum Hours: {service.minimumHours}</p>
                <button type="button" onClick={(e)=>{setPopupBoolean(true)}}>Select</button>
            </div>
        </div>
    )
}
