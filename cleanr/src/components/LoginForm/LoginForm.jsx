
import React, {useState} from 'react'
import {login} from "../../utilities/users-service"
export default function LoginForm(props) {
    async function submitLogin(){
        console.log(loginName)
        console.log(loginPass)
        let credentials = {username: loginName, password: loginPass}
        try{

            const user = await login(credentials);
        }
        catch{
            console.log("NO WORKING!")
        }
    }
    const [loginName, setLoginName] = useState('')
    const [loginPass, setLoginPass] = useState('')
    return (
        <div className="Component">
            Login

            <form>
                <label for="username">Username:</label>
                <input value={loginName} onChange={(e)=>{setLoginName(e.target.value)}} type="text" id="username"></input>
                
                <label for="password"> Password</label>
                <input value={loginPass} onChange={(e)=>{setLoginPass(e.target.value)}} type="password" id="password"></input>
                <button type="button" onClick={()=>{submitLogin()}}>Login</button>
            </form>
            <button onClick={()=>{submitLogin()}}>TEST</button>
        </div>
    )
}
