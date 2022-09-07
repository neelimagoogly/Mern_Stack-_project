import Navbar from "./Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import about from "../images/team.jpg";
import img1 from "../images/read.jpeg";

import "../styles/home.css";
import Footer from "./Footer";
export default function ReadMore() {
    
    return (
        <div>
          <div className="aboutimg" >
          <img className="farmerimg" src={about}></img> 
          <div class="centered1"><p className="para">
            {/* <h1>ABOUT US</h1> */}
          </p></div>
          <div className="stat1"><h3>ABOUT US</h3>
          <p>Nowadays we often get to hear about the use of the harmful chemical in our fruits and vegetables, We don't know the vegetables we are eating in our daily lives are healthy or not, We are least bothered to know about them, The food we are consuming is made up of fatal chemicals.<br /> 

Farmers are using these chemicals to promote the artificial beauty of their vegetables so that they can attract customers, without taking care of the harmful side effects of those deadly chemicals. The chemical causes various types of illness among the consumers including mental impairment and even cancer. Some of the lists of the deadly diseases caused by consuming chemical injected food are<br />
<ul style={{marginLeft : '1rem' , marginTop : '1rem'}}>
  <li>Reproductive problems</li>
  <li>Respiratory problems</li>
  <li>Neurological damage</li>
</ul>
</p>
</div>
<div className="stat1"><h3>What AGROFAM does?</h3>
 <p><br />
Agrofam Connects with thousand of farmers and visits each of them personally, Then we raise efforts to educate the farmers to grow pure organic vegetables, not only this we work with farmers to teach them the proper methods of cultivation of suitable vegetables and fruits for that particular region we check the quality of the soil with the help of special types of detectors and sensors which helps us to know the need of the soil and let us know the requirements need to enrich the soil with more minerals and nutrients.
<br />
By doing this we promote a purely organic and healthy way of growing Crops that doesn't cause any harm and will boost the immunity of the consumers.
<br />
Connecting with agrofam will help farmers to sell their products at a genuine price, and produce better earnings and consumers will get the goods at the lowest price with full nutrients in them.
</p>    

</div>
<div className="stat">
    <h3>Meet our Team</h3>
    <img className="farmerimg" src={img1}></img>
        
        
    
</div>

   
        
</div>

        <Footer></Footer>
        </div>

    )
}