
import React, {useState, useEffect} from 'react'

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
    function signUpViewCheck(num){
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

    const [addressLine1, setAddressLine1] = useInput({type:"text"}, "1123 Gumdrop Lane", "required")
    const [addressLine2, setAddressLine2] = useInput({type:"text"}, "basement on the right ", "unrequired")
    const [unitNumber, setUnitNumber] = useInput({type:"text"}, "2", "unrequired");
    const [city, setCity] = useInput({type:"text"}, "Toronto", "required");
    const [country, setCountry] = useInput({type:"text"}, "Canada", "required");
    const [postalCode, setPostalCode] = useState('')

    const [birthday, setBirthday] = useInput({type:"date"}, "birthday","unrequired");
    const [creditCard, setCreditCard] = useInput({type:'number'},'Credit Card', 'unrequired');
    const [displayName, setDisplayName] = useInput({type:"text"}, "Display Name", "unrequired");
    const [agentCheck, setAgentCheck] = useState(false);
    const [clientCheck, setClientCheck] = useState(false);


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
    useEffect(()=>{
        //console.log(userName)
    })


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
            {/* <input id="username" placeholder="Password"></input> */}
            <label for="password"> Password: </label>
            {setPassword} <br />
            <label for="confirm-password"> Confirm: </label>
            {setConfirmPassword}< br />
            <input onClick={(e)=>{roleSetter(e)}} value={clientCheck} defaultChecked={clientCheck} type="checkbox" id="client" name="client" />

        <label for="client">Client</label>  
        <input  onClick={(e)=>{roleSetter(e)}} value={agentCheck} defaultChecked={agentCheck}type="checkbox" id="agent" name="agent" />
        <label for="agent">Agent</label>
            <button type="button" onClick={()=>{signUpViewCheck(1)}}>Go to next view</button>
        </div>
            :
            (signUpView===1 ?
                <div>
                    <div>The map goes here</div>
                    <button type="button" onClick={()=>{changeSignUpView(0)}}>Go to previous view</button>
                    <button type="button" onClick={()=>{changeSignUpView(2)}}>Go to next view</button>

                </div>
             :(signUpView ===2 ?
                <div>
                    
                    <label for="addressLine1"> Address : * </label>
                     {setAddressLine1} <br />
                     <label for="addressLine2"> Address details: </label>
                     {setAddressLine2} <br />
                     <label for="unit"> Unit: </label>
                     {setUnitNumber} <br />
                     <label for="city"> City: * </label>
                     {setCity} <br />
                     <label for="country"> Country: * </label>
                     {setCountry} <br />
                     <label for="postal_code"> Postal Code: * </label>
                     <input />
                    <button type="button" onClick={()=>{changeSignUpView(1)}}>Go to previous view</button>
                    <button type="button" onClick={()=>{signUpViewCheck(3)}}>Go to next view</button>
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
