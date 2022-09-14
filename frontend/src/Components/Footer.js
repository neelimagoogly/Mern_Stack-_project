import React from "react";
import logo2 from "../images/logo.png";
import "../styles/footer.css";
import "../styles/home.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer">{/*Added class footer*/}
  	 <div class="container"> {/*Added class container*/}
  	 	<div class="row"> {/*Added class row*/}
  	 		
        <div className="testy">
  	 		<div class="footer-col1">
  	 			
  	 			<ul>
           <h4 className="h4">Company</h4>
  	 				<li><a href="/about">About</a></li>
  	 				<li><a href="/buyers">Buyers</a></li>
  	 				<li><a href="/farmers">Farmers</a></li>
  	 				<li><a href="/logistics">Logistics</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col2">
  	 			<h4 className="h4">Resources</h4>
  	 			<ul>
  	 				<li><a href="/about">Blog</a></li>
  	 				<li><a href="/buyers">FAQ</a></li>
  	 				<li><a href="/farmers">Media</a></li>
  	 				<li><a href="/contactus">Contact Us</a></li>
  	 			</ul>
  	 		</div>
         <img src={logo2} width='200px' alt="" />
  	 		</div>
  	 	</div>
       
  	 </div>
  </footer>
      {/*<div className="footer2" >
      
        <div className="divFoot1"
          id="divFoot1"
          style={{display: "flex",
          marginRight: "10rem",
          flexDirection: "column"
          }}
        >
          <h4>Company</h4>
          <a href="/about">About</a>
          <a href="/buyers">Buyers</a>
          <a href="/farmers">Farmers</a>
          <a href="/dataLogistics">Logistics</a>
        </div>
        
        
        <div className="divFoot2"
          style={{
            display: "flex",
            marginRight: "20rem",
            flexDirection: "column",
          }}
          id="divFoot2"
        >
          <h4>Resources</h4>
          <a href="/about">Blog</a>
          <a href="/buyers">FAQ</a>
          <a href="/farmers">Media</a>
          <a href="/dataLogistics">Contact Us</a>
        </div>
        <img src={logo2} width='200px' alt="" />
        
        </div>*/}
      
      <hr style={{ width: "68vw", color: "gray", opacity: "0.2" }} />
      
      <div id="FooterDiv1" style={{margin : '2rem'}}>
      <div className="testin">
        <div id="innerFootDiv1" style={{display : 'flex' , alignItems : 'center'}}>
          <a href="">Privacy Policy</a>
          <div style={{width : '0.09rem' , height : '1rem' , background  : 'gray' , opacity : '0.5'}}></div>
        </div>
        <div id="innerFootDiv2" style={{display : 'flex' , alignItems : 'center'}}>
          <a href="">Terms of Use</a>
          <div style={{width : '0.09rem' , height : '1rem' , background  : 'gray' , opacity : '0.5'}}></div>
        </div>
        <div id="innerFootDiv3" style={{display : 'flex' , alignItems : 'center'}}>
          <a href="">Refund Policy</a>
          <div style={{width : '0.09rem' , height : '1rem' , background  : 'gray' , opacity : '0.5'}}></div>
        </div>
        <span style={{marginLeft : '1rem'}}>© 2022 Agrofam Private Limited</span>
      </div>
      </div>
    </div>

  );
};

export default Footer;
