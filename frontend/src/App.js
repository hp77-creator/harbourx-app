import { useState } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import {MainContext, defaultValues} from './ContextAPIs/ContextAPIs';
import Home from './Pages/Home/Home.page';
import Landing from './Pages/Landing/Landing.page';


function App() {
  let [appState,setAppState] = useState({defaultValues});
  let finalValues = {
    appState,
    setAppState,
  }

  return (
    <MainContext.Provider value={finalValues}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
