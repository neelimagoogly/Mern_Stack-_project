import Navbar from "./Navbar";
import React from "react";
import { Link,useNavigate } from "react-router-dom";
import farmer from "../images/farmer.jpg";
import farmer1 from "../images/farmer-2260636.jpg";
import farmer2 from "../images/land.jpg";
import farmer3 from "../images/fruites.jpg";
import img1 from '../images/efficient.png'
import img2 from '../images/save-energy.png'
import img3 from '../images/analytics.png'
import "../styles/home.css";
import Footer from "./Footer";
export default function Buyers() {
    
    return (
        <div>
          <div className="aboutimg" >
          <div className="test4">
          <div className="boxesfarm4">
          <img src={img1} height="80px" width="80px" />
          <br />
          <p style={{marginBottom : '1rem'}} class="green">
          DRIVE OPERATIONAL EFFICIENCIES
          </p>
          <p class="normal">Quickly see what produce is available and at what price. Save up to 95% of your time sourcing organic and conventional produce. Fulfill contract and spot buy needs.

</p>

          </div>
          <div className="boxesfarm5">
          <img src={img2} height="80px" width="80px" />
          <p style={{marginBottom : '1rem'}} class="green">BOTTOM-LINE IMPROVEMENTS</p>
          <p class="normal">
          Competitive pricing from a nationwide network of top-tier growers in one central online marketplace.
          </p>
          </div>
          <div className="boxesfarm6">
          <img src={img3} height="80px" width="80px" />
          <p style={{marginBottom : '1rem'}} class="green">
          BOTTOM-LINE IMPROVEMENTS
          </p>
          <p class="normal">
          Reduce the environmental carbon footprint of your supply chain by using imperfect and surplus produce. {/*Source within seconds from Full Harvest.*/}


          </p>
          </div>
          
          </div> 
          <Link to="/productlist"><button class="button-71" role="button">Try Now</button></Link>
          <div className="stat2">
            <h1>"Agrofam allows us to find the largest order for the best price. Being able to see that balance and selection on one screen is very helpful."</h1>
            <p>- Production Supply Manager, INDIA

</p>
          </div>
          <div className="pcenter">For a complete list of all the commodities that Agrofam carries, sign up and check out our marketplace.</div>
          <div className="stat"><h1>Commodities we have</h1></div>
          <div className="test">
<div class="centere">
  <div class="property-card">
    <a href="#">
      <div class="property-image1">
        <div class="property-image-title">
          
        </div>
      </div></a>
    <div class="property-description">
      <h2>Food Grains</h2>
      
    </div>
    <a href="#">
      {/* <div class="property-social-icons">
        
      </div> */}
    </a>
  </div>
</div>
<div class="centere">
  <div class="property-card">
  
      <div class="property-image2">
        <div class="property-image-title">
          
        </div>
      </div>
    <div class="property-description">
      <h2> Oil Seeds</h2>
      
    </div>
    <a href="#">
      {/* <div class="property-social-icons">
        
        
      </div> */}
    </a>
  </div>
</div>
<div class="centere">
  <div class="property-card">
    <a href="#">
      <div class="property-image3">
        <div class="property-image-title">
          
        </div>
      </div></a>
    <div class="property-description">
      <h2>Spices</h2>
      
    </div>
    <a href="#">
      {/* <div class="property-social-icons">
        
      </div> */}
    </a>
  </div>
</div>
<div class="centere">
  <div class="property-card">
    <a href="#">
      <div class="property-image4">
        <div class="property-image-title">
          
        </div>
      </div></a>
    <div class="property-description">
      <h2> Flowers</h2>
      
    </div>
    <a href="#">
      {/* <div class="property-social-icons">
        
      </div> */}
    </a>
  </div>
</div>
</div>
<div className="test1">
<div class="centere">
  <div class="property-card">
    <a href="#">
      <div class="property-image5">
        <div class="property-image-title">
          
        </div>
      </div></a>
    <div class="property-description">
      <h2> Vegetables</h2>
      
    </div>
    <a href="#">
      {/* <div class="property-social-icons">
        
      </div> */}
    </a>
  </div>
</div>
<div class="centere">
  <div class="property-card">
    <a href="#">
      <div class="property-image6">
        <div class="property-image-title">
           
        </div>
      </div></a>
    <div class="property-description">
      <h2>Medicinal Herbs</h2>
      
    </div>
    <a href="#">
      {/* <div class="property-social-icons">
        
      </div> */}
    </a>
  </div>
</div>
<div class="centere">
  <div class="property-card">
    <a href="#">
      <div class="property-image7">
        <div class="property-image-title">
          
        </div>
      </div></a>
    <div class="property-description">
      <h2>Dry Fruits</h2>
      
    </div>
    <a href="#">
      {/* <div class="property-social-icons">
        
      </div> */}
    </a>
  </div>
</div>
<div class="centere">
  <div class="property-card">
    <a href="#">
      <div class="property-image8">
        <div class="property-image-title">
          
        </div>
      </div></a>
    <div class="property-description">
      <h2> Fruits</h2>
      
    </div>
    <a href="#">
      {/* <div class="property-social-icons">
        
      </div> */}
    </a>
  </div>
</div>
</div>
    
        </div>
        <Footer></Footer>
        </div>

    )
}