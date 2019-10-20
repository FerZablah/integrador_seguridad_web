import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './Home';
export default function App() {
  return (
    <Router>
      <Route exact path="/home" component={Home} />
    </Router>
  );
}

/*
cd "C:\Program Files (x86)\Google\Chrome\Application" 
chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
*/