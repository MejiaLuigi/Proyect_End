import React from "react";
import { Link } from "react-router-dom";
import GlobantLogo from "../assets/img/Globant_Logo.svg.png"
import '../assets/style.css'

export function Navbar(){
    return(
        <>
            
                <nav>
                    <div className="content-img">
                        <img src={GlobantLogo} width="150px" height="30px" alt="logo of Globant"/>
                    </div>
                    <div>
                        <ul>
                            
                            <li>
                                <Link to='/' className={location.pathname === "/" ? "selected" : ""}>Overview</Link>
                            </li>
                            <li>
                                <Link to='/contacts' className={location.pathname === "/contacts" ? "selected" : ""}>Contacts</Link>
                            </li>
                            <li>
                                <Link to='/favorites' className={location.pathname === "/favorites" ? "selected" : ""}>Favorites</Link>
                            </li>
                            <li> <button className="btn-formNew">+ NEW</button> </li>
                        </ul>
                    </div>
                </nav>

        </>
    )
}

