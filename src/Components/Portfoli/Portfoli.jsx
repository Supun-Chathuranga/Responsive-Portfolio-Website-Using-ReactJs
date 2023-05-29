import React from 'react'
import './Portfoli.css'
import {Swiper, SwiperSlide} from'swiper/react'
import Sidebar from '../../img/hmss.png'
import Ecommerce from '../../img/ecom.png'
import HOC from '../../img/crudd.png'
import MusicApp from '../../img/mov.png'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfoli = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className="Portfoli">
        <span style={{color:darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='Portfoli-slider'
        >
            <SwiperSlide>
                <a href='https://github.com/Supun-Chathuranga/Hospital-Management-Website---PHP' target='_blank'><img src={Sidebar} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://www.distri.lk/' target='_blank'><img src={Ecommerce} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://www.youtube.com/watch?v=RGWdwi3_-AY&t=240s' target='_blank'><img src={MusicApp} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://github.com/Supun-Chathuranga/Mern-Stack-Student-Management-System---CRUD' target='_blank'><img src={HOC} alt="" /></a>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfoli