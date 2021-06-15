import './SignUpForm.css';
import React, {useState, useEffect} from 'react'
import { MapContainer, Marker, Popup, useMap} from 'react-leaflet';
import { BasemapLayer} from "react-esri-leaflet";

function useInput({ type /*...*/ }, placeholder, required) {
    const [value, setValue] = useState("");
    let input="";
    //console.log(required === 'required');
    if (placeholder.includes('Card')){
            input = <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxLength="16" placeholder="xxxxxxxxxxxxxxxx" />
    }
    else if(required === 'required'){
        input = <input required value={value} placeholder={placeholder} onChange={e => setValue(e.target.value)} type={type} />;
    }
    else{
        input = <input value={value} placeholder={placeholder} onChange={e => setValue(e.target.value)} type={type} />;
    }
    return [value, input];
}


export default function SignUpForm(props) {

    function testThis(self){
        // signUpView=2;
        console.log(signUpView)
    }
    function handleSubmit(e){

    }
    async function signUpViewCheck(num){
        let errorString="";
        let errorEl = document.getElementById('errorMessage')
        
        if(num===1){
            let validEls = []
           let els= document.getElementById('signUpForm').querySelectorAll("[required]");
           console.log(els)
           els.forEach(el=>{el.reportValidity()});
           els.forEach(el=>{validEls.push(el.reportValidity())})
           let count = validEls.filter(Boolean).length
           console.log(count)
           validEls.forEach((valid, index) => {
               if(!valid){
                els[index].style.background='red'
                els[index].style.color='white'
               }
               else{
                els[index].style.background='white'
                els[index].style.color='black'
               }
            }) 
            //TODO email in db? 
            //TODO username exists in db?
            if(!email.includes('@')) errorString+="-Missing domain on email <br/>"
            if(email.length<3) errorString+="-Email invalid<br/>"
            if (password !== confirmPassword){
                errorString="- Passwords do not match <br/>"
            }
            if(agentCheck==false && clientCheck==false){
                errorString+="-Please select a role <br/>"
            }
            if(password.length < 8) (errorString+="- Password must be at least 8 characters <br/>")
        if(errorString.length !== 0) return errorEl.innerHTML=errorString
        if (els.length === count && errorString.length ===0) {
                errorEl.innerHTML=""
               changeSignUpView(num)
           }
        }
        else if(num===0){
            changeSignUpView(num)
        }
        else if(num===2){
            changeSignUpView(num)
        }
        else if(num===3){
            let validEls = []
           let els= document.getElementById('signUpForm').querySelectorAll("[required]");
           if(latitude ==="" && longitude === ""){
               let searchString=addressLine1.replace(" ", "%20")
               console.log(addressLine1)
               let searchURL="https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q="
               let response = await fetch(`${searchURL}${searchString}`);
               response = await response.json();
               if (response.length === 0){
                   console.log('hello?')
                   return errorEl.innerHTML= 'Cannot get coordinates from address!'
               }
               else{
                console.log(response[0].lat)
                console.log(response[0].lon)
                return errorEl.innerHTML= ''
               }
               console.log(response)
           }
           console.log(els)
           els.forEach(el=>{el.reportValidity()});
           els.forEach(el=>{validEls.push(el.reportValidity())})
           let count = validEls.filter(Boolean).length
           validEls.forEach((valid, index) => valid ? els[index].style.background='red':null)
           console.log(count)
           if (els.length === count) {
            setError("What's your address?")
            changeSignUpView(num)
        }
        else{
            setError('Please fill out all the required fields!')
        }
        }
        else if(num===4){
            changeSignUpView(num)
        }


    }

    function printPasswords(){
        let signupErrorString = '';
        // signUpView =1;
        console.log(signUpView);
        console.log(password)
        password===confirmPassword ? console.log('same'):console.log('diff');
    }


    const [signUpView, changeSignUpView]=useState(0)

    const [userName, setUserName] = useInput({type: "text"}, "Username", "required");
    const [email, setEmail] = useInput({type: "text"}, "Email", "required");
    const [password, setPassword] = useInput({type: "password"}, "Password", "required");
    const [confirmPassword, setConfirmPassword] = useInput({type: "password"}, "Confirm Password", "required");

    // const [addressLine1, setAddressLine1] = useInput({type:"text"}, "1123 Gumdrop Lane", "required")
    const [addressLine2, setAddressLine2] = useInput({type:"text"}, "basement on the right ", "unrequired")
    const [unitNumber, setUnitNumber] = useInput({type:"text"}, "2", "unrequired");
    const [addressLine1, setAddressLine1] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const [birthday, setBirthday] = useInput({type:"date"}, "birthday","unrequired");
    const [creditCard, setCreditCard] = useInput({type:'number'},'Credit Card', 'unrequired');
    const [displayName, setDisplayName] = useInput({type:"text"}, "Display Name", "unrequired");
    const [agentCheck, setAgentCheck] = useState(false);
    const [clientCheck, setClientCheck] = useState(false);
    const countryNames = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas (the)", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory (the)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands (the)", "Central African Republic (the)", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands (the)", "Colombia", "Comoros (the)", "Congo (the Democratic Republic of the)", "Congo (the)", "Cook Islands (the)", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czechia", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic (the)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands (the) [Malvinas]", "Faroe Islands (the)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories (the)", "Gabon", "Gambia (the)", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (the)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic (the)", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands (the)", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Moldova (the Republic of)", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands (the)", "New Caledonia", "New Zealand", "Nicaragua", "Niger (the)", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands (the)", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines (the)", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of North Macedonia", "Romania", "Russian Federation (the)", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan (the)", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan (Province of China)", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands (the)", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (the)", "United Kingdom of Great Britain and Northern Ireland (the)", "United States Minor Outlying Islands (the)", "United States of America (the)", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe", "Åland Islands"]
    const countryCode = ["AFG", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "CPV", "KHM", "CMR", "CAN", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COD", "COG", "COK", "CRI", "HRV", "CUB", "CUW", "CYP", "CZE", "CIV", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "SWZ", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "MKD", "ROU", "RUS", "RWA", "REU", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "UMI", "USA", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE", "ALA"]
    const countryDict ={};
    countryCode.forEach((code,index)=>countryDict[code]=countryNames[index])
    const [error, setError] = useState('')


    async function roleSetter(e){
        // await console.log(e.target.checked)
        if(e.target.id === "agent"){
            await setAgentCheck(e.target.checked)
        }
        else{
            await setClientCheck(e.target.checked)
        }

    }

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

    // MAP CONFIGURATION
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);

    async function addressFetch(lat,lng){
        let response = await fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=json&featureTypes=PointAddress&location=${lng}%2C${lat}`);
        response = await response.json();
        console.log(response)
        console.log(response.address);
        console.log(response.address.Address);
        // addressLine1=response.address.Address
        await setAddressLine1(response.address.Address)
        await setCity(response.address.City)
        await setCountry(countryDict[response.address.CountryCode])
        await setPostalCode(`${response.address.Postal} ${response.address.PostalExt}`)
        // await setLatitude(lat)
        // await setLongitude(lng)
        console.log(longitude, latitude);
        // setAdressLine1(response.address.Address);
    }


    return (
        <div className="Component">
            Sign Up
            <form id="signUpForm">
            {signUpView===0 ? 
            <div>
            <label for="username">Usrname:</label>
            {setUserName} <br />
            <label for="email">E-mail: </label>
            {setEmail} <br />
            {/* <required  id="username" placeholder="Password"></input> */}
            <label for="password"> Password: </label>
            {setPassword} <br />
            <label for="confirm-password"> Confirm: </label>
            {setConfirmPassword}< br />
            <input onClick={(e)=>{roleSetter(e)}} value={clientCheck} defaultChecked={clientCheck} type="checkbox" id="client" name="client" />

        <label for="client">Client</label>  
        <input  onClick={(e)=>{roleSetter(e)}} value={agentCheck} defaultChecked={agentCheck}type="checkbox" id="agent" name="agent" />
        <label for="agent">Agent</label>
            <button type="button" onClick={()=>{changeSignUpView(1)}}>Go to next view</button>
        </div>
            :
            (signUpView===1 ?
                <div>
                    <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
                        <BasemapLayer name="Streets" />
                        <LocationMarker />
                    </MapContainer>
                    <button type="button" onClick={()=>{changeSignUpView(0)}}>Go to previous view</button>
                    <button type="button" onClick={()=>{changeSignUpView(2)}}>Go to next view</button>

                </div>
             :(signUpView ===2 ?
                <div>
                    
                    <label for="addressLine1"> Address : * </label>
                     <input type="text" required value={addressLine1} onChange={(e)=>setAddressLine1(e.target.value)}></input> <br />
                     <label for="addressLine2"> Address details: </label>
                     {setAddressLine2} <br />
                     <label for="unit"> Unit: </label>
                     {setUnitNumber} <br />
                     <label for="city"> City: * </label>
                     <input type="text" required value={city} onChange={(e)=>setCity(e.target.value)}></input> <br />
                     <label for="country"> Country: * </label>
                     <input type="text" required value={country} onChange={(e)=>setCountry(e.target.value)}></input> <br />
                     <label for="postal_code"> Postal Code: * </label>
                     <input type="text" required value={postalCode} onChange={(e)=>setPostalCode(e.target.value)}></input> <br />
                    <button type="button" onClick={()=>{changeSignUpView(1)}}>Go to previous view</button>
                    <button type="button" onClick={()=>{signUpViewCheck(3)}}>Go to next view</button>
                    <p>{error}</p>
                </div>
                :
             ((signUpView===3 ?
                <div>
                <label for="birthday">Birthday: </label>
                {setBirthday}<br />
                <label for="ccn">Credit Card: </label>
                {setCreditCard}<br />
                <label for="display-name">Display Name</label>
                {setDisplayName}
                <p onClick={()=>{changeSignUpView(2)}}>----</p>
                    <button type="button" onClick={()=>{changeSignUpView(2)}}>Go to previous view</button>
                    <button type="button" onClick={()=>{changeSignUpView(4)}}>Go to next view</button>
            </div>
              :
              <div>
                  <ul>
                      <li>YSS</li>
                      <ul>
                          <li>YESS</li>
                      </ul>
                  </ul>
                    <li>User: {userName}</li>
                    {displayName ? <li> Display: {displayName}</li>: null}
                    <li>Email: {email}</li>
                    <li>Address: {addressLine1}</li>
                    {birthday ? <li> Birthday: {birthday}</li>: null}
                    {creditCard ? <li> Credit Card: {creditCard}</li>: null}
                    
                    <button type="button" onClick={()=>{changeSignUpView(3)}}>Go to previous view</button>
                    <input onClick={(e)=>{handleSubmit(e)}} type="submit" value="Enter!" />
                </div>
               ))))}
               <div id="errorMessage"></div>




                
            </form>
            <button onClick={()=>{testThis()}}>stateCheck</button>
            <button onClick={()=>{printPasswords()}}>passCheck</button>
        </div>
    )
}
