import {React, useState} from 'react';

export const Tab =()=>{
    const [toggleState,setToggleState]=useState(1);

    const toggleTab =(index)=>{
        setToggleState(index)
    }
    return(
        <>
            <div className="tabs">
              <div className='mb-4'>
                    <span 
                    className={toggleState === 1?"tabs_toggle is-active ":"tabs_toggle "}
                    onClick={()=>toggleTab(1)}
                    >DOGS
                    </span> |
                    <span 
                     className={toggleState === 2?"tabs_toggle  is-active":"tabs_toggle"}
                    onClick={()=>toggleTab(2)}
                    >CATS
                    </span>
              </div>
                    <div 
                    className={toggleState === 1?"table-responsive tabs_content is-active mt-3":"table-responsive tabs_content mt-3"}
                    >
                    <table className="table caption-top table-borderless">
                        <tr className="table_head">
                          <th>Name</th>
                          <th>Breed</th>
                          <th>Age(Months)</th>
                        </tr>
                        <tr>
                          <td>Happy</td>
                          <td>Lab</td>
                          <td>3</td>
                        </tr>
                        <tr>
                          <td>Happy 2.0</td>
                          <td>Beagle</td>
                          <td>2</td>
                        </tr>
                        <tr>
                            <td>Joe</td>
                            <td>Akita</td>
                            <td>10 </td>
                          </tr>
                          <tr>
                            <td>John</td>
                            <td>Barbet</td>
                            <td>20</td>
                          </tr>
                      </table>
                </div>
                <div  className={toggleState === 2?"table-responsive tabs_content is-active mt-3":"table-responsive tabs_content mt-3"}>
                    <table className="table caption-top table-borderless">
                        <tr className="table_head">
                          <th >Name</th>
                          <th >Breed</th>
                          <th >Age(Months)</th>
                        </tr>
                        <tr>
                          <td >Brian</td>
                          <td >Bengal Cat</td>
                          <td >3</td>
                        </tr>
                        <tr>
                          <td>Meg</td>
                          <td>Bombay Cat</td>
                          <td>6</td>
                        </tr>
                        <tr>
                            <td>Hippo</td>
                            <td>Himalayan Cat</td>
                            <td>10</td>
                          </tr>
                          <tr>
                            <td>Ricky</td>
                            <td>Persian Cat</td>
                            <td>8</td>
                          </tr>
                      </table>
                </div>
         </div>
        </>
    )
}