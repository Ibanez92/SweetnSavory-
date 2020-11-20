import React from "react";
import 'bulma/css/bulma.css';
import ContactUs from "../src/pages/ContactUs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Nav from "./components/Nav";

function App() {
  return (

    <Router>
      <div>
        <Nav />
     <Route exact path="/" component={Explore} />
     
      <Route exact path="/contactus" component={ContactUs} />
     
     
      </div>
    </Router>
  );
}

export default App;
