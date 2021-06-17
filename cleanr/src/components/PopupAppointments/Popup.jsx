import React from 'react'
import "./Popup.css"
export default function Popup(props) {
    return (props.trigger ? 
        <div className="popup">
            <div className="popup-inner">
                My Popup
                <button type="button" onClick={()=>props.setTrigger(false)}className="close-popup">close</button>
            </div>
            
        </div>
    :null)
}
