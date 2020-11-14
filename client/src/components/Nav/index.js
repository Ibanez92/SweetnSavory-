import React from "react";
import logo from "./logo2.png";



const heading = {
  fontSize: "25px",
  backgroundColor: "#d19fe4",
  paddingLeft: '364px',
  paddingTop: '7px',
  paddingBottom: '7px',
  fontWeight: 'bold'
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
            Home
          </a>
          <img src={logo} style={{ width: '260px' }} alt="logo"/>
          <a className="navbar-item" href="/explore">
            My Story
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
