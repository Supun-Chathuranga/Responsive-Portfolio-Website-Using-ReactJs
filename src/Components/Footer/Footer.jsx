import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedIN from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>www.supunchathurangacs@gmail.com</span>
            <span>+94-0769841736</span> 
            <div className="f-icons">
                <a href=''><Insta color='black' size='3rem'/></a>
                <a href='https://www.linkedin.com/in/supun-chathuranga-1451b4267/' target='_blank'><LinkedIN color='black' size='3rem'/></a>
                <a href='https://github.com/Supun-Chathuranga' target='_blank'><Github color='black' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer