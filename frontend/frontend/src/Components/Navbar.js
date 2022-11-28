import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo2 from "../images/logo.png";
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
//   window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

  return (
    <nav className="navigation" >
      
      <a href="/" className="brand-name">
        
      <img
            // style={{ marginLeft: "43px", marginTop: "0px" }}
            className="agrofamLogo"
            src={logo2}
            width="150px"
            alt=""
          />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
          <NavLink to="/" >Home</NavLink>
            {/* <a href="/">Home</a> */}
          </li>
          <li>
          <NavLink to="/about" >About Us</NavLink>
            {/* <a href="/about">About Us</a> */}
          </li>
          
          <li>
          <NavLink to="/buyers" >Buyers</NavLink>
            {/* <a href="/buyers">Buyers</a> */}
          </li>
          <li>
          <NavLink to="/farmers" >Farmers</NavLink>
            {/* <a href="/farmers">Farmers</a> */}
          </li>
          <li>
          <NavLink to="/logistics" >Logistics</NavLink>
            {/* <a href="/logistics">Logistics</a> */}
          </li>
          <li>
          <NavLink to="/login" >Let's Connect</NavLink>
            {/* <a href="/letsconnect">Let's Connect</a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}
