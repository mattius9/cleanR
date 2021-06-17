import React, {useState} from 'react'
import "./PopupCreateAppointment.css"
export default function PopupCreateAppointment({user, agent, service, trigger, setTrigger}) {




    const [date, setDate] = useInput({type: "date"});
    const [startTime, setStartTime] = useInput({type: "time"});
    const [endTime, setEndTime] = useInput({type: "time"});
    const [status, setStatus] = useState("pending");

    const [appointment, setAppointment] = useState(null);

    function useInput({ type /*...*/ }) {
        const [value, setValue] = useState("");
        let input="";
        input = <input required value={value} onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];
    }

    

    async function makeAppointment(){
        const newAppointment = {
            serviceName: service.name,
            // servicePrice: totalPrice,
            startTime: startTime,
            endTime: endTime,
            status: status,
            client: user._id,
            agent: agent,
        }
        try{
            // let response = await appointmentsAPI.makeAppointment(user._id,agent,newAppointment);
            // setAppointment(response);
            // REDIRECT TO APPOINTMENTS?
        } catch(err){
            console.log(`Make Appointment Error`);
        }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Submitting Appointment `);
      makeAppointment();
  }

    return ( trigger ? 
        <div className="popup">
            <div className="popup-inner">
                <h2>Make New Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <label for="date">Date:</label>
                    {setDate}
                    <label for="startTime">Start Time:</label>
                    {setStartTime}
                    <input type="submit" value="Submit" />
                </form>
                {/* SERVICE SELECTED, THIS IS THE FORM TO SELECT DATE/TIME */}
                <button type="button" onClick={()=>setTrigger(false)}>close</button>
            </div>
            
        </div>
    :null)
}
