import React from 'react'
import BannerImg from '../../components/ContactImg/BannerImg'
import FormContact from '../../components/Form/FormContact'

const Contact = () => {
  return (
    <div>
        <BannerImg heading="Contact" text="Let's have a chat."/>
        <FormContact />
    </div>
  )
}

export default Contact