import Navbar from "./Navbar";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import farmer from "../images/farmer.jpg";
import farmer1 from "../images/farmer-2260636.jpg";
import farmer2 from "../images/land.jpg";
import farmer3 from "../images/fruites.jpg";
import imggg1 from "../images/imggg1.png";
import imggg2 from "../images/imggg2.png";
import imggg3 from "../images/imggg3.png";
import imggg4 from "../images/imggg4.png";
import img10 from "../images/tree_3119747.jpg"
import img11 from "../images/neelima1.jpg"
import img12 from "../images/project2.jpeg"
import img13 from "../images/neelima2.jpg"

// import Video from "https://youtu.be/5wqKJY2E5Pw";

import "../styles/home.css";
import Footer from "./Footer";
import Buyers from "./Buyers";
export default function Home() {
  
  return (
    <div>
      <div className="aboutimg">
        <img className="farmerimg" src={farmer}></img>
        <div class="centered">
          <p className="para">
            “The Agrofam is a game-changer! It's the only service out there that
            can immediately give me a sense of the market - what's available
            today and at what price.”
          </p>
        </div>
        <div className="stat">
          <h1>Statistics</h1>
        </div>
        <div className="test">
          <section class="wrapper">
            <div class="card1" data-effect="zoom">
              <button class="card__save  js-save" type="button">
                <i class="fa  fa-bookmark"></i>
              </button>
              <figure class="card__image">
                <img src={farmer1} alt="Short description"></img>
              </figure>

              <div class="card__body">
                <h3 class="card__name">
                  <h1>130+</h1>
                  <h3>Farmers</h3>
                </h3>
              </div>
            </div>
          </section>
          <section class="wrapper">
            <div class="card2" data-effect="zoom">
              <button class="card__save  js-save" type="button">
                <i class="fa  fa-bookmark"></i>
              </button>
              <figure class="card__image">
                <img src={farmer2} alt="Short description"></img>
              </figure>

              <div class="card__body">
                <h3 class="card__name">
                  <h1>120 acre+</h1>
                  <h3>Total Field Size</h3>
                </h3>
              </div>
            </div>
          </section>
          <section class="wrapper">
            <div class="card3" data-effect="zoom">
              <button class="card__save  js-save" type="button">
                <i class="fa  fa-bookmark"></i>
              </button>
              <figure class="card__image">
                <img src={farmer3} alt="Short description"></img>
              </figure>

              <div class="card__body">
                <h3 class="card__name">
                  <h1>30+</h1>
                  <h3>Commodity Types</h3>
                </h3>
              </div>
            </div>
          </section>
        </div>
        <div className="stat">
          <h1>Commodities we have</h1>
        </div>
        <div className="test">
          <div class="centere">
            <div class="property-card">
              <a href="#">
                <div class="property-image1">
                  <div class="property-image-title"></div>
                </div>
              </a>
              <div class="property-description">
                <h2>Food Grains</h2>
              </div>
              <a href="#">
                {/* <div class="property-social-icons"></div> */}
              </a>
            </div>
          </div>
          <div class="centere">
            <div class="property-card">
              <div class="property-image2">
                <div class="property-image-title"></div>
              </div>
              <div class="property-description">
                <h2> Oil Seeds</h2>
              </div>
              <a href="#">
                {/* <div class="property-social-icons"></div> */}
              </a>
            </div>
          </div>
          <div class="centere">
            <div class="property-card">
              <a href="#">
                <div class="property-image3">
                  <div class="property-image-title"></div>
                </div>
              </a>
              <div class="property-description">
                <h2>Spices</h2>
              </div>
              <a href="#">
                {/* <div class="property-social-icons"></div> */}
              </a>
            </div>
          </div>
          <div class="centere">
            <div class="property-card">
              <a href="#">
                <div class="property-image4">
                  <div class="property-image-title"></div>
                </div>
              </a>
              <div class="property-description">
                <h2> Flowers</h2>
              </div>
              <a href="#">
                {/* <div class="property-social-icons"></div> */}
              </a>
            </div>
          </div>
        </div>
        <div className="test1">
          <div class="centere">
            <div class="property-card">
              <a href="#">
                <div class="property-image5">
                  <div class="property-image-title"></div>
                </div>
              </a>
              <div class="property-description">
                <h2> Vegetables</h2>
              </div>
              <a href="#">
                {/* <div class="property-social-icons"></div> */}
              </a>
            </div>
          </div>
          <div class="centere">
            <div class="property-card">
              <a href="#">
                <div class="property-image6">
                  <div class="property-image-title"></div>
                </div>
              </a>
              <div class="property-description">
                <h2>Medicinal Herbs</h2>
              </div>
              <a href="#">
                {/* <div class="property-social-icons"></div> */}
              </a>
            </div>
          </div>
          <div class="centere">
            <div class="property-card">
              <a href="#">
                <div class="property-image7">
                  <div class="property-image-title"></div>
                </div>
              </a>
              <div class="property-description">
                <h2>Dry Fruits</h2>
              </div>
              <a href="#">
                {/* <div class="property-social-icons"></div> */}
              </a>
            </div>
          </div>
          <div class="centere">
            <div class="property-card">
              <a href="#">
                <div class="property-image8">
                  <div class="property-image-title"></div>
                </div>
              </a>
              <div class="property-description">
                <h2> Fruits</h2>
              </div>
              <a href="#">
                {/* <div class="property-social-icons"></div> */}
              </a>
            </div>
          </div>
        </div>
        <div className="stat">
          <h1>With Farmers For Farmers</h1>
        </div>
        <div className="test5">
          <div className="boxesfarmtest1">
            <img src={imggg1} height="80px" width="80px" />
            <br />
            <Link style={{textDecoration:'None'}} to="/buyers">
            <p style={{ marginBottom: "1rem" }} class="green">
              BUYERS
            </p>
            </Link>
            <p style={{ marginBottom: "1rem" }} class="green">
              Save Time
            </p>
            <p class="normal" style={{ fontSize: "1.5rem" }}>
              Reduce sourcing time by up to 95% Lower Costs Competitive pricing
              from a nationwide network of Sellers
            </p>
          </div>
          <div className="boxesfarmtest2">
            <img src={imggg2} height="80px" width="80px" />
            <Link style={{textDecoration:'None'}} to="/farmers">
            <p style={{ marginBottom: "1rem" }} class="green">
              SUSTAINABILITY
            </p>
            </Link>
            <p style={{ marginBottom: "1rem" }} class="green">
              Consumer demand
            </p>
            <p class="normal" style={{fontSize : '1.5rem'}}>
              Sustainable products are growing faster Save the world Fight food
              waste & climate change
            </p>
          </div>
          <div className="boxesfarmtest3">
            <img src={imggg3} height="80px" width="80px" />
            <Link style={{textDecoration:'None'}} to="/buyers">
            <p style={{ marginBottom: "1rem" }} class="green">
              SELLERS
            </p>
            </Link>
            <p style={{ marginBottom: "1rem" }} class="green">
              Earn more
            </p>
            <p class="normal" style={{ fontSize: "1.5rem" }}>
              Incremental revenue for produce you’ve already grown Sell more
              Access a nationwide network of buyers
            </p>
          </div>
          <div className="boxesfarmtest4">
            <img src={imggg4} height="80px" width="80px" />
            <Link style={{textDecoration:'None'}} to="/logistics">
            <p style={{ marginBottom: "1rem" }} class="green">
              DATA & LOGISTICS
            </p>
            </Link>
            <p style={{ marginBottom: "1rem" }} class="green">
              Data intelligence
            </p>
            <p class="normal" style={{ fontSize: "1.5rem" }}>
              Market trends & documents in one place Convenient delivery
              End-to-end logistics available
            </p>
          </div>
        </div>
        <div className="stat4">
          <h1>About Us</h1>
          <h3>AgroFam</h3>
          <p>
            Agrofam Connects with thousand of farmers and visits each of the
            them personally, Then we educate the farmers to use the proper
            methods of cultivation of suitable vegetable and fruits for that
            particular region with the help of modern equipment. We also check
            the quality of the soil with the help of special types of detector's
            and sensors which helps us to know the need of the soil and tells us
            the requirements need to enrich the soil with more minerals and
            nutrients ...........
            
          </p>
          <Link to="/readmore">
          <button class="button-72" role="button">Read More</button>
          </Link>
        </div>
        <div className="stat">
          <h1>Our Projects</h1>
        </div>
        <div class="vegfruitcontainer">
          {/* <div class="box"> */}
          <Link to="/project1">
            <img className="hey" src={img10} width="214px" height="154px" />
          {/* </div> */}
          </Link>
          {/* <div class="box"> */}
          <Link to="/project2">
            <img className="hey" src={img11} width="214px" height="154px" />
            </Link>
          {/* </div> */}
          {/* <div class="box"> */}
          <Link to="/project3">
            <img src={img12} width="214px" height="154px" />
            </Link>
          {/* </div> */}
          <Link to="/project4">
          <img src={img13} width="214px" height="154px" />
          </Link>
        </div>
        <div className="stat1">
              <h3 className="head_get_started1">GET STARTED</h3>
              <p className="para_get_startedpara1 col1">
                We open the door to thousands of approved buyers and sellers.
                Post your crop bid as a registered buyer, or create your crop
                offer as a platform verified seller. Through our rigorous
                customer compliance we make sure that only reliable users gain
                access to our digital marketplace. There are two ways to get
                started:
              </p>
              <Link to="/getstarted">
        <button class="button-72" role="button">Get Started</button>
        </Link>
            </div>
        
      </div>
      
            
          
      <Footer></Footer>
    </div>
  );
}
