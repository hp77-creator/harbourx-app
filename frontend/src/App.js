import { useEffect, useState } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import {MainContext, defaultValues} from './ContextAPIs/ContextAPIs';
import Home from './Pages/Home/Home.page';
import Landing from './Pages/Landing/Landing.page';
import Login from './Pages/Login/Login.page';
import Register from './Pages/Register/Register.page';

import cookies from './functions/cookies';

function App() {
  let obj=JSON.parse(localStorage.getItem("contextValues"));
  // console.log(obj.email)
  let [appState,setAppState] = useState({...obj,islogged: obj?.email ? true : false});
  let finalValues = {
    appState,
    setAppState,
    setUser:(newuser)=>{
      setAppState(prev=>{
        let obj = {...prev};
        obj.user = newuser;
        obj.islogged = true;
        return obj;
      });
    },
    logoutUser:()=>{
      
    }
  }



  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
     document.body.appendChild(script);
   });
};

useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
},[]);
  return (
    <MainContext.Provider value={finalValues}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" exact component={Home} />
          <Route path="/home/:action" component={Home} />
        </Switch>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
