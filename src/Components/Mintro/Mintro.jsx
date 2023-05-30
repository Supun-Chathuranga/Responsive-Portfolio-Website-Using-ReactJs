import React from 'react'
import './Mintro.css'
import Github from '../../img/github.png'
import LinkedIN from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/prius cut.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Mintro = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="mintro">
        <div className="i-left">
        <div className="i-name">
            <span style={{color:darkMode? 'white': ''}}>Hi ! I Am</span>
            <span>Supun Chathuranga</span>
            <span>Full Stack Developer</span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
            <a href='https://github.com/Supun-Chathuranga' target='_blank'><img src={Github} alt="" srcset="" /></a>
            <a href='https://www.linkedin.com/in/supun-chathuranga-1451b4267/ ' target='_blank'><img src={LinkedIN} alt="" srcset="" /></a>
            <a href=''><img src={Instagram} alt="" srcset="" /></a>
        </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" srcset="" />
            <img src={Vector2} alt="" srcset="" />
            <img src={Boy} alt="" srcset="" />
            <img src={Glassesimoji} alt="" srcset="" />
            <div style={{top:'-4%', left:'68%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top:'18.2rem', left:'1.5rem'}}>
                <FloatingDiv image={thumbup} txt1='ML Model' txt2='Trainer'/>
            </div>
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" 
            style={{
                background: '#C1F5FF',
                top: '17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'
            }}></div>
            
        </div>
    </div>
  )
}

export default Mintro