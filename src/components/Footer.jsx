import React from "react";
import logo from "../images/logo2.png"
import FooterVideo from "../images/footervideo.mp4"
import Instagram from "../images/instagram.png"
import Facebook from "../images/facebook.png"
import Twitter from "../images/twitter.png"
import YouTube from "../images/youtube.png"
import "../styles/footer.css"
     
      
      function Footer() {
          return(
              <div className="footer-container">
                 <div className="foot-nav">
                 <img className= "logo-footer" src={logo} alt="logo" />
                 <div className="footer-navbar">
                    <a className= "footer-link" href="/">HOME</a>
                    <a className= "footer-link" href="/">CITIES</a>
                 </div>
                 </div>
                 <div className="media-container">
                    <a href="https://www.instagram.com/">
                       <img className="social-media" src={Instagram} alt="" />
                    </a>
                    <a href="https://www.facebook.com/">
                       <img className="social-media" src={Facebook} alt="" />
                    </a>
                    <a href="https://www.twitter.com/">
                       <img className="social-media" src={Twitter} alt="" />
                    </a>
                    <a href="https://www.youtube.com/">
                       <img className="social-media" src={YouTube} alt="" />
                    </a>
                  </div>
              </div>
      )
      }
      
      export default Footer
