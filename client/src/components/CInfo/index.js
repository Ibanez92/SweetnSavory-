import React from "react";
import ContactImg from "../../components/Header/menuimg.png"
import '../CInfo/background.css';
import Cupcakes from "../../components/Header/cupcakes.png"
import Aboutuslogo from "../../components/Header/aboutusimg.png"
import Menuimg from "../Header/cupcakecontact.png"
import BackImg from '../../components/Header/contactimg.png'

function ContactInfo() {
    return (
        <div className="hero-container">
      
      <div>
      

      

      <img src={BackImg} style={{ width: '300px', height: '300px', marginTop: '153px', marginLeft: '800px' }} alt="logo"/>
    
    <h1 className="text2">Located in the Garden State where we are committed to using fresh ingredients and custom blends to create authentic American Indian styled cupcakes, cookies and so much more.
    <br></br>
    <br></br>


   
    The menu consists of flavors that are infamous to the Indian culture and have been curated into making deserts that are unique to us here at Sweet’n Savory. 
   
   <br></br>
   <br></br>
   
   Whether you have a birthday, dinner party or a wedding, let us cater to you by creating each and every batch with our cultural essence.</h1>

   

   <img src={Menuimg} style={{ marginLeft: '414px', marginTop: '136px', width: '1125px', height: '165px', }} alt="logo"/>

  
    
        
    




	</div>


</div>
    
    
      );
    }
            

{/* <img className= "cupcakeimg" src={ContactImg} style={{ marginTop: '-500px'}} alt="logo"/> */}



export default ContactInfo;