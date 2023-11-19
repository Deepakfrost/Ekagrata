import React from 'react'
import Cards from './Cards'
import Footer from './Footer'
import "./Home.css"
import Navbar from './Navbar'
export default function Home() {
  return (
    <div className='home'>

      <div className='mask'>
        {/* <img src='/Images/logo3.png' className="homeimg" alt="logo"  /> */}
        <div className='homeimg' />
      </div>
      {/* <div className='content'>
            <p style={{color:'white'}}><h2>Focus on Goals<br></br> Not on Fear</h2></p>
        </div> */}
      {/* <div className="content">
          <h1>Hello there I Chandrachar A G completed Masters in Physics from Manglore University.
            <br />
            I completed Student pyschology from NITTR with 91% percentile, Chennai.
            <br />
          </h1>
        </div> */}
      <Cards />
      <hr />
      <div className='rotatingimgs'>
        <h2 className='notestext'>We Provide Interactive Notes And Assessment Tests</h2>
        <div className='mainslider'>
          <div className='slider'>
            <span style={{ "--i": 1 }}><img src='Images/notes0.jpg' /></span>
            <span style={{ "--i": 2 }}><img src='Images/notes1.jpg' /></span>
            <span style={{ "--i": 3 }}><img src='Images/notes2.jpg' /></span>
            <span style={{ "--i": 4 }}><img src='Images/notes3.jpg' /></span>
            <span style={{ "--i": 5 }}><img src='Images/notes4.jpg' /></span>
            <span style={{ "--i": 6 }}><img src='Images/notes5.jpg' /></span>
            <span style={{ "--i": 7 }}><img src='Images/notes6.jpg' /></span>
            <span style={{ "--i": 8 }}><img src='Images/notesandtest.png' /></span>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ marginBottom: '10rem' }}>
        <h1 style={{ padding: '4rem' }}>Parent's Reviews</h1>
        <div className='crdcontainer'>
          <div className='crd'>
            <p> <h3>Your passion towards teaching is very keen.
              Very empathetic and knowledgeable tutor . Being an expertise you don't just concentrate on the materialised content but the overall importance and further implications in future.

              The one on one session is helped a lot and Evidencing the progress as well..<br />
              Thanks a lot sir</h3>
              <br />

              - Lakshmi </p>
          </div>
          <div className='crd'>
            <p> <h3>
              We were despaterly looking for a trustworthy and efficient online tutor.
              We are now happy to have you as my daughters mentor,
              I'm very fortunate to find such a good online tutor.
              <br />
            </h3>
              <br />
              - Kiran </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div style={{backgroundColor:'black'}}>
        <Footer />
      </div>
    </div>
  )
}
