import React from 'react'
import img1 from '../Images/pro.jpg'
import stack from '../Images/stack.png'
import { Link } from 'react-router-dom'
var FA = require('react-fontawesome')

export const Home = () => {
    let myStyle = {
        backgroundImage: "url(./bg.png)",
        backgroundRepeat:'no-repeat',
          backgroundSize: 'cover',
        position: "relative",
        textAlign: 'center',
        padding: "30px",
        width: '70%'
    }
    let picStyle = {
        width: '170px',
        height: '170px',
        borderRadius: '50%'
    }
    let stackStyle = {
        width: '40px',
        height: '40px',
        color: 'black'
    }
    return (
        <div style={{ backgroundImage: 'linear-gradient(purple, white)',  width: '100%'}}>
        <div className="container" style={myStyle}>
            < img src={img1} style={picStyle} alt=" profile pic" />
            <h1>Lekha Saraf</h1>
            <h4 style={{color:"orange"}}>Hello, I am Lekha Saraf. I am a Web Developer want to work as a freelancer. I am from Jabalpur, MP(India), looking for Remote projects.</h4>
            <p>Have a look at my skillset and career graph for more information.</p>
            <div className="resume">
                 <Link to='/career'>
                <button  type="button" class="btn btn-warning">Career Details</button>
                </Link>
            </div>
            <br>
            </br>
            <hr/>
<div  >
            <a href="https://www.github.com/devLekha/"
                className="github social">
                <FA name="github" size="2x" style={{ color: 'black' }} />
            </a>
            <a href="https://www.instagram.com/lekhasaraf/"
                className="instagram social">
                <FA name="instagram" size="2x" style={{ color: 'black' }} />
            </a>
            <a href="https://www.linkedin.com/in/lekha-saraf-524907187/"
                className="linkedin social">
                <FA name="linkedin" size="2x" style={{ color: 'black' }} />
            </a>
             <a href="https://stackoverflow.com/users/10380319/crypto-s"
                className="stackoverflow social">
                <img src={stack} style={stackStyle} alt="stackoverflow"/>
            </a>
            </div>
           </div>
            </div>
    )
}
