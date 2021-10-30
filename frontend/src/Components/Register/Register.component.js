import React from 'react'
import "./Register.scss";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';





const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function RegisterComponent() {
    return (
        <div className="register-form-container">
            <div className="register-form-title">Register</div>
            <div style={{padding:"10px",textAlign:"center"}}>We do everything in single step, whether its splitting expenses or Authentication</div>

            <div className="register-form">
                <div className="register-form-welcome">Welcome to Splits</div>
                
                <form className="register-form-main">
                    <div className="register-form-input-group">
                        <input placeholder="Full Name" type="text" />
                    </div>
                    <div className="register-form-input-group">
                        <input placeholder="Username" type="text" />
                    </div>
                    <div className="register-form-input-group">
                        <input placeholder="Email" type="email" />
                    </div>
                    <div className="register-form-input-group">
                        <input placeholder="Phone Number" type="number" />
                    </div>
                    <div className="register-form-input-group">
                        <input  placeholder="Password"  type="password" />
                    </div> 
                    <div className="register-form-input-group">
                        <button className="register-form-submit register-btn-active">
                         Create an account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
