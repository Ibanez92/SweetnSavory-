import React from "react";
import logo from "./logo2.png";



const heading = {
  fontSize: "25px",
  fontWeight: 'bold',
  color: "#e986f0",
  
 
  
};

function Nav() {
  return (
    <nav
      style={{ 
      width: '100%', 
      marginTop: "-8px", 
      backgroundColor: "white",
      position: 'fixed'
    }}
      className="navbar "
      role="navigation"
      aria-label="main navigation">
        
      <div className="navbar">
        
        <a
          
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href="/explore"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div style={{  paddingLeft: '725px', }} id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/explore"
          style={{
           
            color: "#e986f0", 
          fontSize: "25px",
          fontWeight: 'bold',
          }}>
            Menu
          </a>
          <img 
          src={logo} 
          style={{ 
            width: '200px'
           }} 
          alt="logo"/>
          <a 
          className="navbar-item" 
          href="/explore" 
          style={{ 
          color: "#e986f0", 
          fontSize: "25px",
          fontWeight: 'bold', }}>
            
            Our Story
          </a>
          
        </div>

        {/* <div className="navbar-item">
                        <a className="button is-primary" href="/">
                            Logout
                        </a>
                </div> */}
      </div>
    </nav>
  );
}

export default Nav;
