import React, { useState } from "react";

export const Header=()=> {
    const[setNavBar,isSetNavBar]=useState(false);
    const openNavBar=()=>{
        isSetNavBar(!setNavBar)
    }
    return(
        <header className="container d-flex justify-content-between justify-content-lg-around align-items-center">
        <div className="col-6 col-md-6">
            <img src="images/animal-shelter-logo.jpg" alt="animal-shelter-logo" className="logo"/>
        </div>
        <div className="hamburger d-block d-lg-none" onClick={()=>openNavBar()}>
            <i className="fas fa-bars"></i>
        </div>
        <nav className={setNavBar?"nav-bar col-6 col-md-6 d-flex justify-content-around active":"nav-bar col-6 col-md-6 d-flex justify-content-around"}>
            <ul className="head_pageLink d-flex col-5 justify-content-around list-unstyled flex-lg-row flex-column">
                <li className="mb-3 mb-lg-0"><a href="/#" >Home</a></li>
                <li><a href="/#">Contact Us</a></li>
            </ul> 
            <ul className="head_socialLinks d-flex justify-content-between col-2 list-unstyled">
                <li><a href="/#">
                    <i className="fa-brands fa-linkedin"></i>
                </a></li>
                <li><a href="/#">
                    <i className="fa-brands fa-square-twitter"></i>
                </a></li>
                <li><a href="/#">
                    <i className="fa-brands fa-square-instagram"></i>
                </a></li>
            </ul>
            
        </nav>
    </header>
    
    )
}

