import React, {Component} from 'react';



class Slider extends Component
{

    render()
    {

        return(


<section id="content">

<div class="container-fluid">
 
 <div id="myCarousel" class="carousel slide" data-ride="carousel">
   
   <ol class="carousel-indicators">
     <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
     <li data-target="#myCarousel" data-slide-to="1"></li>
     <li data-target="#myCarousel" data-slide-to="2"></li>
   </ol>

   
   <div class="carousel-inner">
     <div class="item active">
       <img src="img/matkiphod.jpeg" alt="Los Angeles" style={{width:"100%"}}></img>
     </div>

     <div class="item">
       <img src="img/download.jpeg" alt="Chicago" style={{width:"100%"}}></img>
     </div>
   
     <div class="item">
       <img src="img/court.jpeg" alt="New york" style={{width:"100%"}}></img>
     </div>
   </div>

 
   <a class="left carousel-control" href="#myCarousel" data-slide="prev">
     <span class="glyphicon glyphicon-chevron-left"></span>
     <span class="sr-only">Previous</span>
   </a>
   <a class="right carousel-control" href="#myCarousel" data-slide="next">
     <span class="glyphicon glyphicon-chevron-right"></span>
     <span class="sr-only">Next</span>
   </a>
 </div>
</div>

</section>

            
        );

    }
}

    


export default Slider;