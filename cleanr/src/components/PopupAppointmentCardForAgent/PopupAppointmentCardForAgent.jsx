import React, {useEffect} from 'react'
import './PopupAppointmentCardForAgent.css'
export default function PopupAppointmentCardForAgent(props) {
    useEffect(()=>{
        console.log('props', props)
        console.log('endprops')
    },[])
    return (
        <div className="agent-card card">
            {props.status === 'pending' ?
            <div className="pending-popup-card">
                {}
            </div>
            :
            null}

            
            <div className=""></div>
            {props.price}
        </div>
    )
}
