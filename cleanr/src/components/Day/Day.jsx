import React, {useEffect, useState, componentDidUpdate} from 'react'
import './Day.css'
import Popup from '../PopupAppointments/Popup'
export default function Day(props) {
    function makeDate(){

    }
    const [date, setDate] = useState(props.date)
    const [popupBoolean, setPopupBoolean] = useState(false)
    useEffect(()=>{
        setDate(props.date)
    },[props.date])
    
    return (
        <div className="day-container">
            <div className="day-date">
                {date !== 0 ? 
                <div> 
                    <button type="button" onClick={(e)=>{setPopupBoolean(true)}}className="date-button">{date}</button>
                    <Popup trigger={popupBoolean} setTrigger={setPopupBoolean}/> 
                </div>
                :null}
                {/* {props.date !== 0 ? props.date:null} */}
            </div>
            <div className="day-appointments">

            </div>
        </div>
    )
}
