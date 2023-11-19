import "./Navbar.css";
import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="main-nav" >
      <div className="logo">
        <h1 className="navtext">EKAGRATA </h1>
      </div>
      {/* <div className="nav-menu">
     <ul >
      <li>
        <Link >
          About
        </Link>
      </li>
      <li>
        <Link >
          Contact 
        </Link>
      </li>
     </ul>
     </div> */}
    </nav>
    </>
  )
}
