import React from "react";
import 'bulma/css/bulma.css';
import ContactUs from "../src/pages/ContactUs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Explore from "./pages/Explore";

function App() {
  return (

    <Router>
      <Route exact path="/" component={Explore} />
      <Route exact path="/contactus" component={ContactUs} />
      
      
    </Router>
  );
}

export default App;
