import "./FormContactStyles.css";

import React from 'react'

const FormContact = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="emai"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default FormContact