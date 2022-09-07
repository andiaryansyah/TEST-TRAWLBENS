import "./BannerImgStyles.css";

import React from 'react'

const BannerImg = (props) => {
  return (
    <div className="banner-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default BannerImg