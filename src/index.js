import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import './index.css';
import sdata from'./sdata';
// import Netflix from './Netflix';
// import Amazon from "./Amazon";
import NavBar from "./NavBar"; 
import Slider from "./Slider";










ReactDom.render(
<section>
<NavBar />


<Slider />



<h1 className="heading_style">Orignals</h1>
{/* <h1 className="heading_style"> List of top 5 Netflix Series in 2020</h1> */}
 {sdata.map( function ncard(val){
     return(
    <Card  
imgsrc={val.imgsrc}
title= {val.title}
sname= {val.sname}
link=  {val.link}

/>

     );

 }) };

 <h1 className="heading_style">Orignals</h1>
{/* <h1 className="heading_style"> List of top 5 Netflix Series in 2020</h1> */}
 {sdata.map( function ncard(val){
     return(
    <Card  
imgsrc={val.imgsrc}
title= {val.title}
sname= {val.sname}
link=  {val.link}

/>

     );

 }) }
  



{/* { (fav=="Netflix") ?  <Netflix/> : <Amazon/>   } */}


</section>
,document.getElementById('root')
);
