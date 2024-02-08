import React from "react";
import Layout from "./layout/layout";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Layout />
      </div>
    </Router>
  );
};

export default App;


