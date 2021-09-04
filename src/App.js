import React from 'react';
import Auth from "./components/Auth"
import Registration from "./components/Registration"
//import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
 import {
 BrowserRouter as Router,
 Switch,
 Route,
  Link
} from "react-router-dom"


function App() {
  return (
    <>
      {
         <Router>
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route path="/Login" component={Auth} />
          <Route path="/Registration" component={Registration} />
        </Switch>
      </Router> }
      
    </>

  );
}

export default App;