import React, { Component } from 'react';
import  {MenuItems} from './MultiItems';    
import './NavBar.css';


class Navbar extends Component{
state={clicked:false}



render() {
    return (
      <nav className="NavbarItems">

      <h1 className="navbar-logo"><img className="navlogo" src='logo.png'/></h1>
      <div className="menu-icon" >
       

      </div>
      <ul className="nav-menu">
      {MenuItems.map((items,index)=>{
          return(
            <li key={index}>
            <a className={items.cName }>
            {items.titles}
            </a>
            </li>
          )

      })}


</ul>


	<div id="sb-search" class="sb-search">
		<input class="sb-search-input" placeholder="Enter your search term..." type="search" value="" name="search" id="search"></input>
		<input class="sb-search-submit" type="submit" value=""></input>
		<span class="sb-icon-search"></span>
	
    </div>

        



      </nav>
      
    )


}


}
export default Navbar;