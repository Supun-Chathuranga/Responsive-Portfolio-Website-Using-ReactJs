import React from 'react'
import './Work.css'
import Amazon from '../../img/amazon.png'
import Upwork from '../../img/Upwork.png'
import Facebook from '../../img/Facebook.png'
import Fiverr from '../../img/fiverr.png'
import Shopify from '../../img/Shopify.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Work = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className="works">
        <div className="awesome">
        <span style={{color:darkMode? 'white': ''}}>Work for All these</span>
        <span>Brand & Clients</span>
        <span>Lorem ipsum dolor sit amet consectetur aascjjlclcnjcn slxnlnjasnxjasjlxnslsjxnlxans
            <br/>adipisicing elit. Ipsa, cupiditate.
            <br/>adipisicing elit. Ipsa, cupiditate.
            <br/>adipisicing elit. Ipsa, cupiditate.<br/>

        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-subCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-subCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-subCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-subCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-subCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Work