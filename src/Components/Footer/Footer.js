import React from 'react';
import { FooterSection } from '../FooterSection/FooterSection';
import { footer_content } from '../../Data/data';



export const Footer=()=>{
    return(
    <>
        <footer className="footer_section">
            <div className="container">
                <div className="col-12 fo-s-1">
                    <div className="col-12 d-flex flex-column flex-lg-row justify-content-lg-between">
                        {footer_content.map(item=><FooterSection item={item}/>)}
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-between fo-s-2 ">
                <div className="col-7">
                    <p>Copyright ©2023. Animal Shelter</p>
                </div>
                
                <div className="col-5 d-none d-lg-flex justify-content-between align-items-center">
                    <a href="/#">Privacy Policy</a>
                    <a href="/#">Terms of Services</a>
                    <a href="/#">Cookies Settings</a>
                </div>
            </div>
            </div>
        </footer>
    </>

)
}
