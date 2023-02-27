import React from "react";
import  {createRoot}  from "react-dom/client";
import "./index.css";
import  {useState} from "react"
import Navbar from "./Navbar.js"
//import Name from "./Name.js"

function App(){
    return(
        <>
            <Navbar/>
        </>
    )
}

const root = document.getElementById("root");
createRoot(root).render(<App></App>);
