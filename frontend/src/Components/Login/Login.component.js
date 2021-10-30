import React from 'react'
import "./Login.scss";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';





const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function LoginComponent() {
    return (
        <div className="login-form-container">
            <div className="login-form-title">Login</div>
            <div style={{padding:"10px",textAlign:"center"}}>We do everything in single step, whether its splitting expenses or Authentication</div>

            <div className="Login-form">
                <div className="login-form-welcome">Welcome to Splits</div>
                
                <form className="login-form-main">
                    <div className="login-form-input-group">
                        <input placeholder="Email" type="text" />
                    </div>
                    <div className="login-form-input-group">
                        <input  placeholder="Password"  type="password" />
                    </div> 
                    <div className="login-form-input-group">
                        <button className="login-form-submit login-btn-active">
                         Login
                        </button>
                    </div>

                    <div style={{padding:"10px"}}>
                        <Link to="/register">Don't have an account ? Register Here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
