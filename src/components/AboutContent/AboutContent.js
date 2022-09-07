import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>
                Im a react front-end developer. I create responsive secure websites for my clients.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src="https://images.unsplash.com/photo-1661115111372-8360e73141fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" 
                        className="img" alt="..."
                    />
                </div>
                <div className="img-stack bottom">
                    <img src="https://images.unsplash.com/photo-1661177028752-15985760458f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" 
                        className="img" alt="..."
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent