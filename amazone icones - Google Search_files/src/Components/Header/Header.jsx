 import React from 'react';
 import {BsSearch} from 'react-icons/bs';
// import { FaBeer } from "react-icons/fa";

 import {BiCart} from "react-icons/bi";
import {SlLocationPin} from "react-icons/sl";
import classes from "./Header.module.css";
import LowerHeader from './LowerHeader';
 const Header =() =>{
   return (
     <>
       <section>
         <div className={classes.header_container}>
           <div className={classes.logo_container}>
             <a href="#">
               <img
                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                 alt="amazon log"
               />
             </a>
             {/* delivery */}
             <div className={classes.delivery}>
               <span>
                 {" "}
                 <SlLocationPin />{" "}
               </span>

               {/* <span>{/* icon */}
               {/* /* </span>  */}
               <div>
                 <p>Delivered to</p>
                 <span> Ethiopia</span>
               </div>
             </div>
           </div>

           {/* </div> */}

           {/* search */}

           <div className={classes.search}>
             <select name="" id="">
               <option value="">All</option>
             </select>
             <input type=" text" name="" id="" placeholder="search product" />
             <BsSearch size={40} />
           </div>
           {/* right side link */}

           <div className={classes.order_container}>
             <a href="" className={classes.language}>
               <img
                 src="https://www.shutterstock.com/image-vector/american-flage-vector-design-templet-260nw-2317427731.jpg"
                 alt=""
               />

               <select>
                 <option value="">EN</option>
               </select>
             </a>

             {/* three components */}
             <a href="">
               <div>
                 <p>Sign In</p>
                 <span>Account & Lists</span>
               </div>
             </a>
             {/* orders */}
             <a href="">
               <p>returns</p>
               <span>& Orders</span>
             </a>
             {/* cart  */}
             <a href="" className={classes.cart}>
               <BiCart size="35" />
               <span>0</span>
             </a>
           </div>
         </div>
         <LowerHeader />
       </section>
     </>
   ); 
 }

 export default Header




