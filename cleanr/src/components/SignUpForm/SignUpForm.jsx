
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

    function signUpViewCheck(num){
        if(num===1){
            let validEls = []
           let els= document.getElementById('signUpForm').querySelectorAll("[required]");
           console.log(els)
           els.forEach(el=>{el.reportValidity()});
           els.forEach(el=>{validEls.push(el.reportValidity())})
           let count = validEls.filter(Boolean).length
           console.log(count)
           if (roleCount === 0){
            setError('Please select a role!')
            changeSignUpView(0)
        }
        else if (roleCount >0){
            setError('');
        }
           if (els.length === count && roleCount>0) {
               console.log('all clear')
               changeSignUpView(1)
           }       }
           else if(num===0){
               changeSignUpView(num)
           }
           else if(num===2){
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


    const[roleCount, setRoleCount] = useState(0)
    const [signUpView, changeSignUpView]=useState(0)
    const [userName, setUserName] = useInput({type: "text"}, "Username", "required");
    const [email, setEmail] = useInput({type: "text"}, "Email", "required");
    const [address, setAddress] = useInput({type: "text"}, "Address", "required");
    const [password, setPassword] = useInput({type: "password"}, "Password", "required");
    const [confirmPassword, setConfirmPassword] = useInput({type: "password"}, "Confirm Password", "required");
    const [birthday, setBirthday] = useInput({type:"date"}, "birthday","not required");
    const [creditCard, setCreditCard] = useInput({type:'number'},'Credit Card', 'unrequired');
    const [displayName, setDisplayName] = useInput({type:"text"}, "Display Name", "unrequired");
    const [agentCheck, setAgentCheck] = useState(false);
    const [clientCheck, setClientCheck] = useState(true);
    const [error, setError] = useState('')


    async function roleCounter(e){
        // await console.log(e.target.checked)
        if(e.target.id === "agent"){
            console.log(e.target.id)
            console.log(e.target.checked)
            await setAgentCheck(e.target.checked)
            console.log(`agent --> ${agentCheck}`)
        }
        else{
            console.log('client')
            await setClientCheck(e.target.value)
        }


        if (e.target.checked){
            await setRoleCount(roleCount+1)
            await console.log(roleCount)
        }
        else {
            await console.log(roleCount)
            await setRoleCount(roleCount-1)
            await console.log(roleCount)
            if (roleCount === 0){
                console.log("yup")
                setRoleCount(0)
            }
            else{
                
            }
        }

    }
    useEffect(()=>{
        //console.log(userName)
    })


    return (
        <div className="Component">
            Sign Up
            <form id="signUpForm">
                {signUpView===0? 
                <div>

                    <label for="username">Usrname:</label>
                    {setUserName} <br />
                    <label for="email">E-mail: </label>
                    {setEmail} <br />
                    {/* <input id="username" placeholder="Password"></input> */}
                    <label for="password"> Password: </label>
                    {setPassword} <br />
                    <label for="confirm-password"> Confirm: </label>
                    {setConfirmPassword}
                    <label for="address"> Address: </label>
                    {setAddress} <br />
                    <input onChange={async(e) => {await setClientCheck(e.target.value)}} defaultChecked={clientCheck} type="checkbox" id="client" name="client" />

                <label for="client">Client</label>  
                <input value={agentCheck} onClick={(e)=>{roleCounter(e)}} type="checkbox" id="agent" name="agent" />
                <label for="agent">Agent</label>
                {/* <input type="password" id="password"></input> */}
                <p>rolecount {roleCount}</p>
                <p>{error}  </p>AGENT: {agentCheck}
                <p>  Client: {clientCheck}</p>
                    <button onClick={()=>{changeSignUpView(1)}}>Go to second view</button>
                </div>
                :(signUpView===1 ? 
                <div>
                    <label for="birthday">Birthday: </label>
                    {setBirthday}<br />
                    <label for="ccn">Credit Card: </label>
                    {setCreditCard}<br />
                    <label for="display-name">Display Name</label>
                    {setDisplayName}
                    <p onClick={()=>{changeSignUpView(2)}}>----</p>
                    <button onClick={()=>{signUpViewCheck(0)}}>Go to first view</button>
                    <button onClick={()=>{changeSignUpView(2)}}>Go to third view</button>
                </div>
                :
                <div>
                    <li>User: {userName}</li>
                    <li>Display Name: {displayName}</li>
                    <li>Email: {email}</li>
                    <li>Address: {address}</li>
                    <li>Birthday: {birthday}</li>
                    <li>Credit Card: {creditCard}</li>
                    <button onClick={()=>{changeSignUpView(1)}}>Go to second view</button>
                    <input type="submit" value="Enter!" />
                </div>)
                
                }
            </form>
            <button onClick={()=>{testThis()}}>stateCheck</button>
            <button onClick={()=>{printPasswords()}}>passCheck</button>
        </div>
    )
}
