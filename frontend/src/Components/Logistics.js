import Navbar from "./Navbar";
import React from "react";
import { Link,useNavigate } from "react-router-dom";
import about from "../images/wallpaperflare.com_wallpaper(15).jpg";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import imgg1 from "../images/imgg1.png";
import imgg2 from "../images/imgg2.png";
import imgg3 from "../images/imgg3.png";
import img4 from "../images/agro1.png";
import "../styles/home.css";
import Footer from "./Footer";
export default function Logistics() {
    
    return (
        <div>
         <div className="test4">
          <div className="boxesfarm4">
          <img src={img1} height="80px" width="80px" />
          <br />
          <p style={{marginBottom : '1rem'}} class="green">
          
Promotes operational efficiency and accuracy
          </p>
          <p class="normal">Quickly see the product that are available here. Get up to 50% discount on organic items. We provide pure organic items and quality checked Products



</p>

          </div>
          <div className="boxesfarm5">
          <img src={img2} height="80px" width="80px" />
          <p style={{marginBottom : '1rem'}} class="green">Fundamental Exponential improvements</p>
          <p class="normal">
          Profitable Pricing from all over India . With more than thousand of farmer working on needs of the market , and producing organic fruites nad veggies.


          </p>
          </div>
          <div className="boxesfarm6">
          <img src={img3} height="80px" width="80px" />
          <p style={{marginBottom : '1rem'}} class="green">
          
          Supports environment Friendly goals
          </p>
          <p class="normal">
          Reduces the amount of carbon-dioxide, promotes greenery and brings surplus 


          </p>
          </div>
          
          </div>  
          <Link to='/letsconnect'><button class="button-7" role="button">Try Now</button></Link>
          
          <div className="stat2">
            <h1>
Agrofam is an end-to-end solution for efficiently sourcing sustainable produce.</h1>
            
        </div>
        <img class="imgm1" src={img4} />
        <div className="stat2">
            <h1>
            "Agrofam allows us to find the largest order for the best price. Being able to see that balance and selection on one screen is very helpful."</h1>
            
        </div>
        <div className="test4">
          <div className="boxesfarm4">
          <img src={imgg1} height="80px" width="80px" />
          <br />
          <p style={{marginBottom : '1rem'}} class="green">
          
          METRICS DASHBOARD
          </p>
          <p class="normal">Data-driven decision making. Purchasing data and trends help you make smarter decisions. See pricing and purchase history metrics at-a-glance.



</p>

          </div>
          <div className="boxesfarm5">
          <img src={imgg2} height="80px" width="80px" />
          <p style={{marginBottom : '1rem'}} class="green">END-TO-END LOGISTIC SERVICE</p>
          <p class="normal">
          Best-in-className delivery. Agrofam offers logistics with on-time and in-full deliveries.

          </p>
          </div>
          <div className="boxesfarm6">
          <img src={imgg3} height="80px" width="80px" />
          <p style={{marginBottom : '1rem'}} class="green">
          
          CUSTOMER SUPPORT


          </p>
          <p class="normal">
          We are here for you! Dedicated Account Managers are on call to assist you through every stage of the purchasing process


          </p>
          </div>
          
          </div> 
          <Link to='/letsconnect'><button class="button-7" role="button">Try Now</button></Link>
          <div className="pcenter">For a complete list of all the commodities that Agrofam carries, sign up and check out our marketplace.</div> 
        <Footer></Footer>
        </div>

    )
}