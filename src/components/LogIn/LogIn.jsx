import React, { useState } from "react";
import { getToken } from "../../services/getToken";

import './LogIn.css';

export const LogIn = ({loggedin, setLoggedin}) => {
    let [emailInput, setEmailInput] = useState('');
    let [passInput, setPassInput] = useState('');

    const credentialsSubmit = () => {
        getToken(emailInput, passInput)
            .then(token => {
                if (token !== undefined){
                    localStorage.setItem('token', token);
                }
                if (localStorage.getItem('token')){
                    setLoggedin(!loggedin);
                    console.log(loggedin)
                } else {
                    return (
                        <div className="wrapper fadeInDown">
                            <div id="formContent">
                                <p className='warning'>Incorrect email or password!!!</p>
                                <form>
                                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="email" onChange={email} />
                                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" onChange={password}/>
                                    <input type="button" className="fadeIn fourth" value="Log In" onClick={credentialsSubmit}/>
                                </form>
                
                            </div>
                        </div>
                    )
                }
            })
    }

    const password = (event) => {
        setPassInput(event.target.value);
    }

    const email = (event) => {
        setEmailInput(event.target.value);
    }
    

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="email" onChange={email} />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" onChange={password}/>
                    <input type="button" className="fadeIn fourth" value="Log In" onClick={credentialsSubmit}/>
                </form>

            </div>
        </div>
    )
}