import React from "react";
import "./Header.css";
import Cupcakes from "../../components/Header/cupcakes.png";
import Aboutuslogo from "../../components/Header/aboutusimg.png";
import Menuimg from "../Header/menuimg.png";
import "../Cards/Cards.css";

function Header() {
  return (
    <div className="hero-container">
      <div>
        <img
          className="cupcakeimg"
          src={Cupcakes}
          style={{
            width: "600px",
            float: "left",
            marginLeft: "200px",
            paddingTop: "300px",
          }}
          alt="logo"
        />

        <img
          className="aboutuslogo"
          src={Aboutuslogo}
          style={{
            width: "300px",
            height: "300px",
            marginTop: "183px",
            marginLeft: "340px",
          }}
          alt="logo"
        />

        <h1 className="text1">
          Located in the Garden State where we are committed to using fresh
          ingredients and custom blends to create authentic American Indian
          styled cupcakes, cookies and so much more.
          <br></br>
          <br></br>
          The menu consists of flavors that are infamous to the Indian culture
          and have been curated into making deserts that are unique to us here
          at Sweet’n Savory.
          <br></br>
          <br></br>
          Whether you have a birthday, dinner party or a wedding, let us cater
          to you by creating each and every batch with our cultural essence.
        </h1>

        <hr
          style={{ marginTop: "120px", width: "70%", marginLeft: "295px" }}
        ></hr>

        <img
          src={Menuimg}
          style={{
            marginLeft: "814px",
            marginTop: "-30px",
            width: "305px",
            height: "263px",
          }}
          alt="logo"
        />
{/* 
        <div className="card container">
          <div className="card-image">
            <img
              className="image is-500x500"
              src="http://via.placeholder.com/500x500"
              alt="Placeholder image"
            />
          </div> */}

          {/* <div className="card-content">
            <div className="media">
              <div className="media-left">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </div>

              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
              <a href="#">#responsive</a>
              <br></br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div> */}
        {/* </div> */}
        <br></br>
      </div>
    </div>
  );
}

export default Header;
