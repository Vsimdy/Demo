import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import  {useState} from "react"

let menuIcon = <i className=" bi bi-list" id="menu-icon"></i>;
let cvIcon = <i className="bi bi-caret-down-fill"></i>;


export default function Navbar(){
   
const [open, setOpen] = useState(false);
const [cvState, setCvState] = useState(false);
{/*setting the state of the menuList and resume-content */}

 function menuClick(){
    setOpen(!open)
    iconSwitch();
    
}
{/*handler function for the menuList click event*/}

function iconSwitch(){
   menuIcon = <i className=" bi bi-x" id="menu-x-icon"></i>
   if(open){
    menuIcon = <i className=" bi bi-list" id="menu-icon"></i>
   }
}
{/*handler function for the menu icon switch click event*/}


function cvClick(){
    setCvState(!cvState)
    cvIconSwitch();
}
{/*handler function for the resume content click event*/}

function cvIconSwitch(){
    cvIcon = <i className="bi bi-caret-up-fill"></i>
    if(cvState){
        cvIcon = <i className="bi bi-caret-down-fill"></i>
    }
}
{/*handler function for the cv icon switch click event*/}
    
        return(
            <nav className="App">

            <div id="menu">
            <button id="icon-btn"  onClick={menuClick}>{menuIcon}</button>
              <div className={`drop-menu-container ${open? "active": "inactive"}`}>
                <MenuItems />
              </div>
            </div>
  
              <div id="logo">
                  <span id="v">V</span>
                  <span id="s">S</span>
                  <span id="c">C</span>
              </div>
              
              
              <div id="cv-container">
                  <button onClick={cvClick}>
                      <input type="button" name="cv-btn" value="RESUME" id="cv-btn"/>
                      {cvIcon}
                  </button>
  
                  <div className={`resume-content ${cvState? "active": "inactive"}`}>
              <a href="#gg">Download CV</a>
              <a href="#ggs">View CV</a>
                 </div>
  
              </div>
          </nav>
        )
        }

function MenuItems() {

 

        return(
            <>
              <a href="#about">ABOUT</a>
              <a href="#stack">STACK</a>
              <a href="#contact">CONTACT</a>
              <a href="#project">PROJECTS</a>
            </> 
        )
}


