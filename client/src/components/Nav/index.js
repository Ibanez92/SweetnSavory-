import React from "react";
import logo from "./logo2.png";
import IgLogo from "./iglogo.png";

const heading = {
  fontSize: "25px",
  fontWeight: "bold",
  color: "#e986f0",
};

function Nav() {
  return (
    <nav
      style={{
        width: "100%",
        marginTop: "-8px",
        backgroundColor: "white",
        position: "fixed",
      }}
      className="navbar "
      role="navigation"
      aria-label="main navigation"
    >
      <a
        className="col"
        style={{
          marginTop: "20px",
          color: "#e986f0",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        (973)-999-9999
      </a>

      <a className="navbar-item" style={{}}>
        <img
          className="col"
          src={IgLogo}
          style={{ marginRight: "0px" }}
          href=""
          alt="logo"
        />
      </a>

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

      <div
        style={{ paddingLeft: "537px" }}
        id="navbarBasicExample"
        className="navbar-menu"
      >
        <div className="navbar-start">
          <a
            className="navbar-item"
            href="/"
            style={{
              color: "#e986f0",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Home
          </a>
          <img
            src={logo}
            style={{
              width: "200px",
            }}
            alt="logo"
          />
          <a
            className="navbar-item"
            href="/contactus"
            style={{
              color: "#e986f0",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Contact Us
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
