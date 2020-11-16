import React from "react";
import './Header.css';
import Cupcakes from "../../components/Header/cupcakes.png"

function Header() {
  return (
    <div className="hero-container">
      
      
      <img id="cupcakeimg" src={Cupcakes} style={{ width: '260px' }} alt="logo"/>
    <h1>"Located in the Garden State where we are committed to using fresh ingredients and custom blends to create authentic American Indian styled cupcakes, cookies and so much more. 



The menu consists of flavors that are infamous to the Indian culture and have been curated into making deserts that are unique to us here at Sweet’n Savory. 



Whether you have a birthday, dinner party or a wedding, let us cater to you by creating each and every batch with our cultural essence.</h1>

    </div>
    
  );
}

export default Header;

