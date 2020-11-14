import React from "react";
import 'bulma/css/bulma.css';
import Explore from "./pages/Explore";


import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <Route exact path="/" component={Explore} />
      
    </Router>
  );
}

export default App;
