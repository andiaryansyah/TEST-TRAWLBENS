import React from 'react'
import AboutContent from '../../components/AboutContent/AboutContent'
import BannerImg from '../../components/ContactImg/BannerImg'

const About = () => {
  return (
    <div>
      <BannerImg heading="ABOUT" text="Im a friendly Front-End Developer."/>
      <AboutContent/>
    </div>
  )
}

export default About