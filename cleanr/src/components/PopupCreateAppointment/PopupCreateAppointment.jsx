import React from 'react'
import "./PopupCreateAppointment.css"
export default function PopupCreateAppointment({trigger, setTrigger}) {

    const [name, setName] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Submitting Appointment `);
  }

    return ( trigger ? 
        <div className="popup">
            <div className="popup-inner">
                <form onSubmit={handleSubmit}>
                    <label>
                        Date:
                        <input
                        type="date"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {/* SERVICE SELECTED, THIS IS THE FORM TO SELECT DATE/TIME */}
                <button type="button" onClick={()=>setTrigger(false)}>close</button>
            </div>
            
        </div>
    :null)
}
