import React from "react";
import ReactPlayer from "react-player"

import './Landing.scss'
import courthouse from '../../images/courthouse.png'

const Landing = () => {
    return (
        <div className="landing-div">
            
            <section className="description-box">
                    <img src={courthouse} alt="Spokane Courthouse" />
                <div className="description">
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
            </section>
            <section className="video-box">
                <h2>Our Story:</h2>
                <ReactPlayer className="video" url="https://youtu.be/91D3_5H5Sz0" controls="true" />
            </section>
            
        </div>
    )
}

export default Landing;