import React from "react"
import "../style.css";
import {GlobeHemisphereWest} from "phosphor-react"





export default function NavBar(){
    return(
        <div className="navBar">
            <div className="globeIcon">
            <GlobeHemisphereWest color="white" weight="fill" size={32} />
            </div>
            <div>
            <h2 className="navBar--title">my travel journal.</h2>
            </div>
            
        </div>
    )
}