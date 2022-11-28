import Navbar from "./Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import about from "../images/wallpaperflare.com_wallpaper(15).jpg";

import "../styles/home.css";
import Footer from "./Footer";
export default function Aboutus() {
    
    return (
        <div>
          <div className="aboutimg" >
          <img className="farmerimg" src={about}></img> 
          <div class="centered1"><p className="para">
            <h1>AGROFAM</h1>
          </p></div>
          <div className="stat1"><h3>Supply Chain and Tech</h3>
           <p>Agrofam is India's largest fresh produce supply chain company that is solving one of the toughest problems in the world through technology.
We connect producers of food directly with retailers, restaurants, and service providers using in-house applications that drive end to end operations. Currently, our Supply Chain is equipped to move 1400 tonnes of perishables from farms to businesses, every day, in less than 12 hours.</p>

<h3>The Problem</h3>
<ol><li>Farmers experience price risk, information asymmetry about demand, distribution inefficiency, and receive late payments.</li>
<li>Retailers face problems like higher costs, low quality and unhygienic produce, high price volatility, and the everyday hassle of going to the market.</li>
<li>The traditional Supply Chain is highly inefficient, unorganized, and has a high rate of food wastage.
</li></ol>
<img className="ab1"
            src="https://ninjacart.in/uploads/gallery/3af2b7e2c36f0e1b339884ec14748487.png"
            alt=""
          />
<h3>Our Solution</h3>
<ol><li>We eliminate intermediaries by taking control of the Supply Chain by using technology and analytics.</li>
<li>We build reliable, cost-effective, and high-speed logistics and infrastructure to solve for inefficiencies in the Supply Chain.
</li>
<li>On one end, farmers get better prices and consistent demand, and on the other end, retailers receive fresh produce at competitive prices that are delivered to their doorstep</li></ol>
<img
          className="ab2"
          width="450px"
          src="https://ninjacart.in/uploads/gallery/0646263251da437e2faa6d0ac2c412a7.png"
          alt=""
        />
<h3>The Road Ahead</h3>
<p>Our vision is to build India's most efficient and largest Supply Chain platform and improve the lives of producers, businesses, and consumers in a meaningful manner.

We are focused on making the Agrofam innovation more accessible to the most fragmented parts of society. We intend to leverage our strengths and resources to innovate for new product categories and customer segments while solving complex supply chain problems.</p>
          </div>
          
    
        </div>
        <Footer></Footer>
        </div>

    )
}