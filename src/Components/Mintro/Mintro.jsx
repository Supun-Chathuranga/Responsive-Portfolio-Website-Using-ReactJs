import React from 'react'
import './Mintro.css'
import Github from '../../img/github.png'
import LinkedIN from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
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
            <span>Front End Developer full stack python developer</span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
            <img src={Github} alt="" srcset="" />
            <img src={LinkedIN} alt="" srcset="" />
            <img src={Instagram} alt="" srcset="" />
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
                <FloatingDiv image={thumbup} txt1='Best' txt2='Design'/>
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