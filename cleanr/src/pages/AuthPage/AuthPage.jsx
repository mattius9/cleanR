import React from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

function propsDisplay(props){
    console.log(props.setUser('Doug'))
}

// make login form and signup toggle
export default function AuthPage(props) {
    var view = 0; //there will be four views: one for login, one for signup pt1, one for signup pt 2, one for signup review and create
    return (
        <div>
            <button onClick={()=>{propsDisplay(props)}}>PROPS</button>
            <LoginForm />
            <SignUpForm />

        </div>
    )
}