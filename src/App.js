import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';


import StartEvent from "./components/startevent.componenet";
import Login from "./components/login.component";

function App() {
  return (
    <Router>
    <Route path="/admin/start" component={StartEvent} />
    <Route path="/admin/login" component={Login}/>
   </Router>
  );
}

export default App;
