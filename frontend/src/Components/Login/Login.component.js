import React, { useContext, useState } from 'react'
import "./Login.scss";
import { notification, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import cookies from '../../functions/cookies';
import { MainContext } from '../../ContextAPIs/ContextAPIs';

import hosts from "./../../hosts.json";
import endpoints from "./../../endpoints.json";

import { Redirect } from 'react-router';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function LoginComponent() {

    let contextState = useContext(MainContext);
    console.log(contextState)
    let [registerForm,setRegisterForm] = useState({
        email:"",
        password:""
    })
    let [isLoggedIn,setIsLoggedIn] = useState(contextState?.appState?.islogged)
    let onChange = (e)=>{
        setRegisterForm(prev=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }
    let onSubmit = async (e)=>{
        e.preventDefault();
        let re = await fetch(hosts.default + endpoints.login,{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(registerForm)
        })
        let data = await re.json();
        if(re.ok && data){
            
            contextState.setUser(data)
            cookies.setCookie("accessToken",data.accessToken)
            localStorage.setItem("accessToken",data.accessToken)
            localStorage.setItem("contextValues",JSON.stringify(data))
            notification["success"]({message:"User Created"})
            setIsLoggedIn(true)
            
        }else{


            notification["error"]({message:"Login Error"})
        }


        
    }
    if(isLoggedIn == true){
        return <Redirect to="/home" />
    }


    return (
        <div className="login-form-container">
            <div className="login-form-title">Login</div>
            <div style={{padding:"10px",textAlign:"center"}}>We do everything in single step, whether its splitting expenses or Authentication</div>

            <div className="Login-form">
                <div className="login-form-welcome">Welcome to Splits</div>
                
                <form className="login-form-main" onSubmit={onSubmit}>
                    <div className="login-form-input-group">
                        <input placeholder="Email" type="email" id="email" name="email" defaultValue={registerForm.email} required onChange={onChange} />
                    </div>
                    <div className="login-form-input-group">
                        <input  placeholder="Password"  type="password" id="password" name="password" defaultValue={registerForm.password} required onChange={onChange} />
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
