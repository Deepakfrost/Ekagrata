import "./Cards.css"
import React from 'react'
import { Link } from 'react-scroll'

export default function Cards() {
  return (
    <div className="maincontainer">
      <div className="cardcontainer">
        <div className="card">
          < div className="innercard">
            {/* <img src='Images/prfimage.jpg' alt="Profile Image" />  style={{width:'8rem', height:'13rem', marginRight:'1.5rem',borderRadius:'1rem'}} */}
            <img src='Images/prfimage.jpg' alt="Profile Image" />
            <h3>It’s good to know about your faculty.
              <br />
              <br />
              Master in physics from Mangalore university.<br/> 
              Student psychology from NITTR.<br/>
              Distinction at communication skills from TCS.<br/>
               Trained at national level in physics from NIT, Karnataka.
              <br />
            </h3>
          </div>
        </div>
        <div className="card">
          <h3>
            <b>Areas of expertise in experience</b>  <br />
            <br />
            PCMB (CBSE ,ICSE ,IGCSE, State )] 11th Physics(CET,NEET).  <br />
            Experienced Mentor, taught 150 + candidates (Grade 8 -11).
          </h3>
        </div>
        <div className="card">
          <h3>
            Being very passionate towards teaching I always believe that Education  should always be content oriented rather being Marketed.<br/><br/>
            Education should not just be for marks but solely towards the cognitive development of one towards the subject.
          </h3>
        </div>
        <div className="card">
          <h3>
            Aim of Ekagrata <br />
            Understand the pupil potential and providing potential oriented education.<br />
            Providing Psychological comfort.<br />
            Maintain disciplined and sustainable routine. <br />
            Small and frequent analysis of the acquired information.
          </h3>
        </div>
      </div>
      <Link spy={true} to='Footer' smooth={true} >
      <div className="footercard">
        <h2 style={{color:'black'}}> Book your <span style={{color:'red'}}>"FREE"</span> demo class today and decide to join my tribe </h2>
      </div>
      </Link>
    </div>
  )
}
