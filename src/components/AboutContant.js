import { Link } from "react-router-dom";
import "./AboutContantStyle.css";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

import React from 'react'

const AboutContant = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a recat font-end developer. I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-contaioner">
                <div className="img-stack top">
                    <img src= {React1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src= {React2} className="img" alt="true" />
                </div>
            </div>
        </div>
        <div className="right"></div>
    </div>
  )
}

export default AboutContant