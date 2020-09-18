import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Gene Lee</h1>
        <div className="info-bar">
          <p className="info-item">genelee@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
            className="info-item" 
            to={{pathname: "https://www.instagram.com/gen_etics/"}}
            target="_blank">
              
              Instagram
          </Link>
          <Link
            className="info-item" 
            to={{pathname: "https://www.linkedin.com/in/gene-h-lee/"}}
            target="_blank">
              
              LinkedIn
          </Link>
          <Link
            className="info-item" 
            to={{pathname: "https://github.com/SpeedyCannon"}}
            target="_blank">
              
              GitHub
          </Link>
        </div>
      </div>
      <div className="nav-background">
      <Link
            className="nav-link" 
            to={{pathname:"/about"}}
            /* target="_blank" <-opens link in new tab*/>
              
              About
      </Link>
      <Link
          className="nav-link" 
          to={{pathname:"/education"}}>
            
            Education
      </Link>
      <Link
          className="nav-link" 
          to={{pathname:"/experience"}}>
            
            Experience
      </Link>
      <Link
          className="nav-link" 
          to={{pathname:"/projects"}}>
            
            Projects
      </Link>
      </div>
    </>
  );
}
