import React from 'react';
import Card from './Card';
import sdata from'./sdata';

const Amazon=()=>{
    return(
        <Card  
        imgsrc={sdata[2].imgsrc}
        title= {sdata[2].title}
        sname= {sdata[2].sname}
        link=  {sdata[2].link}
      
      />
        );
}

export default Amazon;
