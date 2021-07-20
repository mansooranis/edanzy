import React from "react";
import Intro from "./intro";
import "./Home.css"
import NavBarMain from "../NavBar/NavBar";
export default function HomePage(){
    return(
        <div className="Home">
            <NavBarMain/>
            <Intro/>
        </div>
    )
}