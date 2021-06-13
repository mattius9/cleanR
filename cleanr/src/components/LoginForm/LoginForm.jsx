
import React from 'react'
function testThis(props){
    console.log('dootdoot')
}
export default function LoginForm(props) {
    return (
        <div className="Component">
            Login

            <form>
                <label for="username">Username:</label>
                <input id="username"></input>
                
                <label for="password"> Password</label>
                <input type="password" id="password"></input>
                <input type="submit" value="Enter!" />
            </form>
            <button onClick={()=>{testThis()}}>TEST</button>
        </div>
    )
}
