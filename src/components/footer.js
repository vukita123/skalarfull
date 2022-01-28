import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { Col, Container, Row, } from "react-bootstrap";



const Footer = () => {
  return (

   
    
    <ul>
      <li>
          <a href="https://www.instagram.com/skalar_novi_sad/"> 
            {/* <img src="https://i.imgur.com/dCZ836c.png"/>  */}
            <div class="social_link">Instagram</div>
          </a>
      </li>
      <li>
          <a href="https://www.facebook.com/skalarnovisad/"> 
            {/* <img src="https://i.imgur.com/G72qmyS.png"/>  */}
            <div class="social_link">Facebook</div>
          </a>
      </li>
      <li>
            {/* <img src="https://i.imgur.com/gsTnSfH.png"/>  */}
            <div class="social_link">021/635-0171</div>
      </li>
      <li>
          <a href="https://www.google.com/maps/place/Radni%C4%8Dka+16a,+Novi+Sad/@45.2492113,19.846848,17z/data=!3m1!4b1!4m5!3m4!1s0x475b106d016c4793:0x5c11260aa98620cd!8m2!3d45.2492113!4d19.8490367"> 
            {/* <img src="https://i.imgur.com/llVVnVa.png"/>  */}
            <div class="social_link">Radnicka 16a, Novi Sad</div>
          </a>
      </li>
    </ul>
  
  )};

 
export default Footer;