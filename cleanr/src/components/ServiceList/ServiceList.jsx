import "./ServiceList.css";
import React, {useState} from 'react';
import Service from '../Service/Service';

export default function ServiceList({services,setServices}) {
    // State
    const [name, setName] = useInput({type: "text"}, "Service Name");
    const [price, setPrice] = useInput({type: "number"}, "Hourly Price");

    const [minHours, setMinHours] = useState(3);

    
    let serviceList = null;

    if (services){
        serviceList = services.map(service =>
            <Service 
            key={service._id}
            service = {service}
            />
        );
    }

    function useInput({ type /*...*/ }, placeholder) {
        const [value, setValue] = useState("");
        let input="";

        input = <input required value={value} placeholder={placeholder} onChange={e => setValue(e.target.value)} type={type} />;

        return [value, input];
    }

    function addService(){
        // CONTINUE
    }

    return (
        <div className="Component">
            {serviceList ? <p>No Services Yet</p> : {serviceList}}

            ADD SERVICE

            <table className="add-service-form">
                        <thead>
                        <th>Add Service</th>
                        </thead>
                <tbody>
                    <tr>
                        <td><label for="name">Type:</label></td>
                        <td>{setName}</td>
                    </tr>
                    <tr>
                        <td><label for="price">Hourly Price: </label></td>
                        <td>{setPrice}</td>
                    </tr>
                    <tr>
                        <td><label for="minHours"> minimumHours: </label></td>
                        <td>
                            <select name='minHours'value={minHours} onChange={(e) => setMinHours(e.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={addService}>Add Service</button>

        </div>
    )
}
