import Navbar from "./Navbar";
import React from "react";
import { Link,useNavigate } from "react-router-dom";
import imgg from "../images/Crop.jpg";
import about from "../images/wallpaperflare.com_wallpaper(15).jpg";
import img2 from "../images/growth.png";
import img3 from "../images/distribution-network.png";
import img4 from "../images/sell.png";
import img5 from "../images/box.png";
import img6 from "../images/sell.png";
import img7 from "../images/cart.png";
import img8 from "../images/truck.png";
import img9 from "../images/pay.png";
import img10 from "../images/lemons.jpg";
import img11 from "../images/orange.jpg";
import img12 from "../images/taro.jpg";
import img13 from "../images/cauliflower.jpg";
import img14 from "../images/okra.jpg";
import img15 from "../images/spiny-gourd.jpg";
import img16 from "../images/bananas.jpg";
import img17 from "../images/capsicum.jpg";
import img18 from "../images/peas.jpg";
import img19 from "../images/bitter-melon.jpg";
import img20 from "../images/apple.jpg";

import "../styles/home.css";
import Footer from "./Footer";
export default function Farmers() {
    
    return (
        <div>
          <div className="aboutimg" >
          <img className="farmerimg" src={imgg}></img> 
          <div class="centered2"><p className="para">
            <h3>Sell your excess produce and products directly to Agrofam-</h3>
            <Link to='/register'><button className="button1">SIGN UP FOR FREE →</button></Link>
            
          </p>
          </div>
          <div className="test2">
          <div className="boxesfarm1">
          <img src={img2} height="80px" width="80px" />
          <br />
          <p style={{marginBottom : '1rem'}} class="green">
            Sell more, Earn
             more
          </p>
          <p class="normal">Our growers have increased profits by up to 12%</p>

          </div>
          <div className="boxesfarm2">
          <img src={img3} height="80px" width="80px" />
          <p style={{marginBottom : '1rem'}} class="green">Reach More Buyers</p>
          <p class="normal">
            Instantly access thousands of food & beverage processors and
            manufacturers who are in search for your product.
          </p>
          </div>
          <div className="boxesfarm3">
          <img src={img4} height="80px" width="80px" />
          <p style={{marginBottom : '1rem'}} class="green">
            Sell Online with
            Ease
          </p>
          <p class="normal">
            Post and sell all in one place. Then get paid on time.
          </p>
          </div>
          
          </div>
          <Link to='/letsconnect'><button class="button-7" role="button">Try Now</button></Link>
          <div className="stat2">
            <h1>Less Emailing, More Selling</h1>
            <p>Showcase your produce with details and photos to speed up the sales process.</p>
          </div>
          
           {/* <img class="imgm" src={img5} /> */}
           <div className="stat3">
            <h1>The Agrofam marketplace is your sales channel for excess produce.</h1>
            
          </div>
          <div className="test3">
          <div className="farm1">
          <img src={img6} height="80px" width="80px" />
          <br />
          
          <p >List your produce in under a minute</p>

          </div>
          <div className="farm2">
          <img src={img7} height="80px" width="80px" />
          
          <p >
          Buyers purchase your produce from our marketplace
          </p>
          </div>
          <div className="farm3">
          <img src={img8} height="80px" width="80px" />
          
          <p >
          Agrofam arranges delivery


          </p>
          </div>
          <div className="farm4">
          <img src={img9} height="80px" width="80px" />
          
          <p >
          You get paid on time
          </p>
          </div>
          
          </div>
          <div className="stat2">
            <h1>We sell excess produce of all shapes & sizes</h1>
            <p>Here are real supplier photos of our top selling commodities

</p>
          </div>
          <div class="vegfruitcontainer">
          {/* <div class="box"> */}
            <img className="hey" src={img10} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img className="hey" src={img11} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img12} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img13} width="214px" height="154" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img14} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img15} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img16} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img17} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img18} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img19} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img20} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
          <img src={img16} width="214px" height="154px" />
          {/* </div> */}
        </div>
        </div>
        {/* <div class="center space"> */}
          {/* <h1 className="spaceHead">Ready to start earning?</h1> */}
          {/* <br /> */}
          {/* <button class="btn3">Sell Your Product Today</button> */}
        {/* </div> */}
        
        <Footer></Footer>
        </div>

    )
}