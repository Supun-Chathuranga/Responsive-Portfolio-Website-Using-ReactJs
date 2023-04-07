import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Experience = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="experience">
        <div className="achivements">
            <div className="circle">8+</div>
            <span>Years</span>
            <span>Experience</span>
        </div>
        <div className="achivements">
            <div className="circle">20+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className="achivements">
            <div className="circle">2+</div>
            <span>Companies</span>
            <span>Experience</span>
        </div>
    </div>
  )
}

export default Experience