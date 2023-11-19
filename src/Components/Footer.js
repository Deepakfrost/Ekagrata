import "./Footer.css"
import React from 'react'
import {FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp, FaYoutube} from 'react-icons/fa'
export default function Footer() {
  return (
    <div className="footer" id="Footer">
       
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:'white', }}/>
                <div><p>Tumkur,Karnataka </p></div>
            </div>
            <div className="phone" >
            <FaWhatsapp size={20} style={{color:'white', }}/>
                <div><p>9353983115</p></div>
            </div>
            <div className="email">
           <FaMailBulk size={20} style={{color:'white', }}/>
                <div><p>ekagrataclasses1@gmail.com</p></div>
            </div>
        </div>
        <div className="right">
            <h4><b>About Ekagrata</b></h4>
            <p>Ekagrata classes focus on giving genuine
                tutoring services via both offline and online modes. 
                It aims to accelerate students' academic performance and also enhance their knowledge.</p>
            <div className="social">
            <a href="https://youtube.com/channel/UCw18q0ClHXFCCIxJmqsLaJw" target="_blank"><FaYoutube size={35} style={{color:'white', marginRight:'auto',}} /></a>
            <a href="https://www.linkedin.com/in/chandrachar-a-g-9792aa215" target="_blank"><FaLinkedin size={35} style={{color:'white', marginRight:'2rem',marginLeft:'2rem'}}/></a>
            <a href="https://www.instagram.com/nishakhara_/" target="_blank"><FaInstagram size={35} style={{color:'white', marginRight:'auto',marginLeft:'10px'}}/></a>
            </div>
        </div>
        </div>
    </div>
  )
}
