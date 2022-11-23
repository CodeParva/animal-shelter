import {React,useState} from "react";
import { MyAdoptModal } from "../../Modal/MyAdoptModal";

export const FooterSection=({item})=>{
    const [adoptModalShow, setAdoptModalShow] = useState(false);
    return(

          item.section==="col-1"? 
                <>
                    <div className={item.classUsed}>
                        <img src="images/footer-logo.jpg" alt="" className="mb-0 mb-lg-3"/>
                        <p className="my-3 text-start">{item.p}</p>
                        <button className="btn  mt-0 mt-lg-4 mb-2 mb-lg-0 active-btn" onClick={() => setAdoptModalShow(true)}>{item.btn}<i className="fa-sharp fa-solid fa-arrow-right"></i></button>
                    </div>
                    <MyAdoptModal
                        show={adoptModalShow}
                        onHide={() => setAdoptModalShow(false)}
                    />
                    </>
                    :
                    <div className={item.classUsed}>
                        <h6 className={item.h6_class}>{item.h6}</h6>
                        {item.contact_links.map(item=>{
                         return(
                            <>
                                <a href="/#" className={item.f_class}><i className={item.f_icon}></i>{item.f_text}</a>
                            </>
                        )
                        })}
                        {item.follow_links?
                        <>
                            <h6 className="text-white my-lg-4 mt-4 mb-3">FOLLOW US</h6>
                            {item.follow_links.map(item=><a href="/#" >
                                <i className={item}></i>
                            </a>)}
                        </>:null
                        }
                    </div>
                    
  
    
    )
}
       
    