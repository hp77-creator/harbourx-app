import React from 'react'
import "./Section3.scss"
import Section3img from "./../../../assets/Landing/Section3.png"
import Section3bg from "./../../../assets/Landing/Section3bg.jpg"
export default function Section3() {
    return (
        <div className="Section3-container" style={{background:"url("+Section3bg+")"}}>
            <div className="Section3-title">
                Doing all this, just for you.
            </div>
            <div className="Section3-Image">
                <img draggable={false} src={Section3img} />
            </div>
        </div>
    )
}
