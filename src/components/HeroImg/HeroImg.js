import './HeroImgStyles.css';

import React from 'react'
import IntroImg from '../../assets/img/banner.png'
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' 
            src={IntroImg} alt="..."/>
        </div>
        <div className='content'>
            <p>WELCOME</p>
            <h1>LET'S MAKE YOUR OWN CINEMA</h1>
            <div>
                <Link className='btn' to="/">Movies</Link>
                <Link className='btn btn-light' to="/">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg