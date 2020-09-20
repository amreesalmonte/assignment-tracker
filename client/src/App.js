import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import AssignmentList from "./components/Assignments";
import EditAssignment from "./components/EditAssignment";
import Subjects from "./components/Subjects";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="MainAppContent">
          <Route path="/" exact component={AssignmentList} />
          <Route path="/edit/:id" component={EditAssignment} />
          <Route path="/subjects" component={Subjects} />
        </div>
      </div>
    </Router>
  );
}

export default App;
