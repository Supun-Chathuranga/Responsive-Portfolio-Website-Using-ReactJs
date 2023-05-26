import React from 'react'
import './Services.css'
import Heartimoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Services = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className="services">
        <div className="awesome">
        <span style={{color:darkMode? 'white': ''}}>My Awesome</span>
        <span>Services</span>
        <span>Lorem ipsum dolor sit amet consectetur aascjjlclcnjcn slxnlnjasnxjasjlxnslsjxnlxans
            <br/>adipisicing elit. Ipsa, cupiditate.
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card
                emoji = {Heartimoji}
                heading ={'Front End Design'}
                detail ={"HTML,CSS,Javascript,React"}
                />
            </div>
            <div style={{top: '12rem',left:'-4rem'}}>
                <Card
                emoji = {Glasses}
                heading ={'Back End Develop'}
                detail ={"PHP,Python,Wordpress"}
                />
            </div>
            <div style={{top: '19rem',left:'12rem'}}>
                <Card
                emoji = {Humble}
                heading ={'ML Model Training'}
                detail ={"Colab,Kaggle"}
                />
            </div>
            <div className="blur s-blur" style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services