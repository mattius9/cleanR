
import './LoginForm.css';
import React, {useState} from 'react'
import {login} from "../../utilities/users-service"
export default function LoginForm(props) {
    async function submitLogin(){
        let credentials = {username: loginName, password: loginPass}
        let user1;
        try{
            const user = await login(credentials);
            user1 = user;
            // props.setUser(user);
        }
        catch(err){
            console.log(err);
        }
        props.setUser(user1);
    }
    const [loginName, setLoginName] = useState('')
    const [loginPass, setLoginPass] = useState('')
    return (
        <div className="Component">
            Login

            <form className="login-form">
                <div>
                    <label for="username">Username:</label>
                    <input value={loginName} onChange={(e)=>{setLoginName(e.target.value)}} type="text" id="username"></input>
                </div>
                
                <div>
                    <label for="password"> Password</label>
                    <input value={loginPass} onChange={(e)=>{setLoginPass(e.target.value)}} type="password" id="password"></input>
                </div>
                
                <button className="login-btn" type="button" onClick={()=>{submitLogin()}}>Login</button>
            </form>
        </div>
    )
}
