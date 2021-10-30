import React from 'react'
import Navbar from "../../Components/Navbar/Navbar.component";
import "./Login.scss"
import Loginbg from "./../../assets/login/loginbg.png"
import LoginComponent from '../../Components/Login/Login.component';
export default function Login() {
    return (
        <div>
            <Navbar />
            <div className="col2-container">
                <div className="col2-left" style={{background:"url("+Loginbg+") no-repeat center ",height:"calc(100vh - 75px)"}}></div>
                <div className="col2-right">
                    <LoginComponent />
                </div>
            </div>
        </div>
    )
}
