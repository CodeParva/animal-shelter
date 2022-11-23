import React from 'react';
import { main_content } from '../../Data/data';
import { MainSection } from '../MainSection/MainSection';

export const MainBody=()=>{
    return(
      
    main_content.map(item=>
    <MainSection
        img={item.img}
        h2={item.h2}
        p={item.p}
        btn1={item.btn1}
        btn2={item.btn2}
        alt={item.img_alt}
        classUsed={item.class}
    />
    )
    
)
}


