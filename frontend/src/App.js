import { useState } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import {MainContext, defaultValues} from './ContextAPIs/ContextAPIs';
import Home from './Pages/Home/Home.page';
import Landing from './Pages/Landing/Landing.page';
import Login from './Pages/Login/Login.page';
import Register from './Pages/Register/Register.page';


function App() {
  let [appState,setAppState] = useState({...defaultValues,islogged:true});
  let finalValues = {
    appState,
    setAppState,
  }

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
