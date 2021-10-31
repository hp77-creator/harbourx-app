import React, { useContext, useState } from 'react'
import "./Register.scss";
import { notification, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import hosts from "./../../hosts.json";
import endpoints from "./../../endpoints.json";

import { MainContext } from '../../ContextAPIs/ContextAPIs';
import cookies from '../../functions/cookies';
import { Redirect } from 'react-router';



const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function RegisterComponent() {

    let contextState = useContext(MainContext);
    console.log(contextState)
    let [registerForm,setRegisterForm] = useState({
        fullname:"",
        username:"",
        email:"",
        phonenumber:"",
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
        let re = await fetch(hosts.default + endpoints.register,{
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


            notification["error"]({message:"Registration Error"})
        }


        
    }
    if(isLoggedIn == true){
        return <Redirect to="/home" />
    }

    return (
        <div className="register-form-container">
            <div className="register-form-title">Register</div>
            <div style={{padding:"10px",textAlign:"center"}}>We do everything in single step, whether its splitting expenses or Authentication</div>

            <div className="register-form">
                <div className="register-form-welcome">Welcome to Splits</div>
                
                <form className="register-form-main" onSubmit={onSubmit}> 
                    <div className="register-form-input-group">
                        <input placeholder="Full Name" type="text"  id="fullname" name="fullname" defaultValue={registerForm.fullname} required onChange={onChange} />
                    </div>
                    <div className="register-form-input-group">
                        <input placeholder="Username" type="text"  id="username" name="username" defaultValue={registerForm.username} required onChange={onChange}/>
                    </div>
                    <div className="register-form-input-group">
                        <input placeholder="Email" type="email"  id="email" name="email" defaultValue={registerForm.email} required onChange={onChange}/>
                    </div>
                    <div className="register-form-input-group">
                        <input placeholder="Phone Number" type="number"  id="phonenumber" name="phonenumber" defaultValue={registerForm.phonenumber} required onChange={onChange}/>
                    </div>
                    <div className="register-form-input-group">
                        <input  placeholder="Password"  type="password" id="password" name="password" defaultValue={registerForm.password} required onChange={onChange}/>
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
