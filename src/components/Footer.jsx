import React from "react";
import logo from "../images/logo2.png"
import FooterVideo from "../images/footervideo.mp4"
import Instagram from "../images/instagram.png"
import Facebook from "../images/facebook.png"
import Twitter from "../images/twitter.png"
import "../styles/footer.css"

function Footer() {
    return(
       <>
        <div className="footer-container">
           <video className="footer-video" autoPlay loop muted>
             <source src={FooterVideo} type='video/mp4'/>
           </video>
           <img className= "logo-footer" src={logo} alt="logo" />
           <div className="footer-navbar">
              <a className= "footer-link" href="/">HOME</a>
              <a className= "footer-link" href="/">CITIES</a>
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
            </div>
        </div>
        <div className="all-rights-reserved">Design by Luciana Rossa | 2022 | all rights reserved</div>
        </>
)
}

export default Footer