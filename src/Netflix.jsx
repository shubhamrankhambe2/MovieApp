import React from 'react';
import sdata from './sdata';
import Card from './Card';
const Netflix= () =>{
    return(
        <Card  
        imgsrc={sdata[1].imgsrc}
        title= {sdata[1].title}
        sname= {sdata[1].sname}
        link=  {sdata[1].link}
      
      />
        );

}

export default Netflix;

