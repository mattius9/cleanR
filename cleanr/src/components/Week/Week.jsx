import React, {useState, useEffect} from 'react'
import Day from '../Day/Day'
import './Week.css'
export default function Week(props) {
    function createDays(dayList){
        const b = dayList.map((day)=><Day month={props.month} date={day}/>)
        // dayList.forEach(day=>console.log(day))
        console.log(b)
        return b
    }
    const [daysObject, setDaysObject] = useState(createDays(props.dayList))
    useEffect(()=>{
        console.log('here')
        setDaysObject(createDays(props.dayList))
    }, [props.month])
    return (
        <div className="week-container">
            {daysObject}
        </div>
    )
}
