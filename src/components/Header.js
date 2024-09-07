import { useState } from "react";
import { LOGO } from "../Utils/constant";
import { Link } from "react-router-dom";

const Header = () =>{
   
   const [btnName , setBtnName] = useState("Login");


   const handleClick = () => {

          btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
         
   }

    return (
        <div className="header">
           <div className="logo-container">
                 <img className="logo" src= {LOGO} alt="" />
           </div>
           <div className="nav-items">
              <ul className="header-items" >
               <li className="item1"><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <button className="btn" onClick={() => {handleClick()}}>{btnName}</button>
              </ul>
           </div>
            
        </div>
    )
}

export default Header;