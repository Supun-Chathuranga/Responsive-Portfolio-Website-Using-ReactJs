import React from 'react'
import './Work.css'
import Amazon from '../../img/node.png'
import Upwork from '../../img/mngg.png'
import Facebook from '../../img/redx.png'
import Fiverr from '../../img/exr.png'
import Shopify from '../../img/react.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Work = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className="works">
        <div className="awesome">
        <span style={{color:darkMode? 'white': ''}}>Work for All these</span>
        <span>Categories</span>
        <span>I am dedicated to Transforming your ideas into beautifully crafted digital products.
            <br/>Responsive Web Development
            <br/>Frontend Development
            <br/>Backend Development
            <br/>Database Design and Optimization
            <br/>

        </span>
        <a href='https://drive.google.com/file/d/1abTeS7KmpmSYjT7ST8vkqLDUoUrHjU10/view?usp=share_link' target='_blank'><button className="button s-button">Download CV</button></a>
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