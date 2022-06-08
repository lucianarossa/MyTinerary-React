import React from "react";
import "../styles/footer.css"
import {Link as LinkRouter} from "react-router-dom"

const pages = [{name: "Home", to:"/" }, {name: "Cities", to:"/buildingpage"}];


     
      
      function Footer() {
          return(
              <div className="footer-container">
                 <div className="foot-nav">
                 <img className= "logo-footer" src={process.env.PUBLIC_URL+"/assets/logo2.png"} alt="logo" />
                 <div className="footer-navbar">
                 {pages.map((page, index) => (
                <LinkRouter  to={page.to} key={index} className='navbar-button'>
                 {page.name}
                </LinkRouter>
                 ))}
                 </div>
                 </div>
                 <div className="media-container">
                    <a href="https://www.instagram.com/">
                       <img className="social-media" src={process.env.PUBLIC_URL+"/assets/instagram.png"} alt="" />
                    </a>
                    <a href="https://www.facebook.com/">
                       <img className="social-media" src={process.env.PUBLIC_URL+"/assets/facebook.png"} alt="" />
                    </a>
                    <a href="https://www.twitter.com/">
                       <img className="social-media" src={process.env.PUBLIC_URL+"/assets/twitter.png"} alt="" />
                    </a>
                    <a href="https://www.youtube.com/">
                       <img className="social-media" src={process.env.PUBLIC_URL+"/assets/youtube.png"} alt="" />
                    </a>
                  </div>
              </div>
      )
      }
      
      export default Footer
