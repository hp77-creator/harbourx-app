import React from 'react'
import Navbar from "../../Components/Navbar/Navbar.component";
import "./Register.scss"
import Loginbg from "./../../assets/login/loginbg.png"
import RegisterComponent from '../../Components/Register/Register.component';
export default function Register() {
    return (
        <div>
            <Navbar />
            <div className="rcol2-container">
                <div className="rcol2-right">
                    <RegisterComponent />
                </div>
                <div className="rcol2-left" style={{background:"url("+Loginbg+") no-repeat center ",height:"calc(100vh - 75px)"}}></div>
                
            </div>
        </div>
    )
}
