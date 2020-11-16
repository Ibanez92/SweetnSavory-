import React from "react";
import './Header.css';
import Cupcakes from "../../components/Header/cupcakes.png"
import Aboutuslogo from "../../components/Header/aboutusimg.png"

function Header() {
  return (
    <div className="hero-container">
      
      <div >
      <img className= "cupcakeimg" src={Cupcakes} style={{ width: '685px', float: 'left', paddingRight: '100px', marginTop: '-320px' }} alt="logo"/>

      <img className="aboutuslogo" src={Aboutuslogo} style={{ width: '550px', height: '300px', float: 'left', paddingLeft: '270px', marginTop: '-420px' }} alt="logo"/>
    
    <h1 className="text1">Located in the Garden State where we are committed to using fresh ingredients and custom blends to create authentic American Indian styled cupcakes, cookies and so much more.
    <br></br>
    <br></br>


   
    The menu consists of flavors that are infamous to the Indian culture and have been curated into making deserts that are unique to us here at Sweet’n Savory. 
   
   <br></br>
   <br></br>
   
   Whether you have a birthday, dinner party or a wedding, let us cater to you by creating each and every batch with our cultural essence.</h1>

   <hr style={{ marginTop: "60px" }}></hr>

  

</div>
    </div>
    
      );
    }


export default Header;



