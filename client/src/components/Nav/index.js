import React from "react";
import logo from "./logo2.png";



const heading = {
  fontSize: "25px",
  backgroundColor: "white",
  paddingLeft: '364px',
  
  fontWeight: 'bold',
  color: "#e986f0"
};

function Nav() {
  return (
    <nav
      style={heading}
      className="navbar is-transparent "
      role="navigation"
      aria-label="main navigation">
        
      <div className="navbar-brand ml-2">
        
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

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/explore"
          style={heading}>
            Menu
          </a>
          <img src={logo} style={{ width: '260px' }} alt="logo"/>
          <a className="navbar-item" href="/explore" style={{ color: "#e986f0" }}>
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
