import {React,useState} from "react";
import { MyAdoptModal } from "../../Modal/MyAdoptModal";
import { MyPetsModal } from "../../Modal/MyPetsModal";
import { MyGiveAwayModal } from "../../Modal/MyGiveAwayModal";

export const MainSection=({h2,p,btn1,btn2,img,alt,classUsed})=>{

    const [petModalShow, setPetModalShow] = useState(false);
    const [adoptModalShow, setAdoptModalShow] = useState(false);
    const [giveAwayModalShow, setGiveAwayModalShow] = useState(false);
    return(
        
        <div className="container">
            <section className={classUsed}>
                <div className="col-12">
                    <h2>{h2}</h2>
                    <div className="col-12 s-section-1">
                        <p className="col-12">{p}</p>   
                        {img?<div className="text-center">
                                    <img src={img} alt={alt}/>
                        </div>:null}
                    </div>
                    <div className="col-lg-6 col-md-4 col-12 d-flex d-lg-inline flex-column mx-md-auto s-section-2">
                        {btn1?<button type="button" className="btn mb-3 mb-lg-0 active-btn me-0 me-lg-2" onClick={() => setAdoptModalShow(true)}  >{btn1}</button>:null}
                        {btn2 !== "Give Away" ?<button className="btn btn-outline-dark" onClick={() => setPetModalShow(true)}>{btn2}</button>:<button className="btn btn-outline-dark" onClick={() => setGiveAwayModalShow(true)}>{btn2}</button>}
                    </div>
                    <MyPetsModal
                        show={petModalShow}
                        onHide={() => setPetModalShow(false)}
                    />
                    <MyAdoptModal
                        show={adoptModalShow}
                        onHide={() => setAdoptModalShow(false)}
                    />
                    <MyGiveAwayModal
                        show={giveAwayModalShow}
                        onHide={() => setGiveAwayModalShow(false)}
                    />
            </div>
        </section>
    </div>
        
    )
}