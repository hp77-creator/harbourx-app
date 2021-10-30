import React from 'react'
import "./Section1.scss";
import Section1img from "./../../../assets/Landing/section1.png"
export default function Section1() {
    return (
      <div className="section1-container">
        <div className="Section1-left-container">
            <div className="left-top">
                <div>Splitting expenses</div>
                <div>never like before</div>

            </div>

            <div className="left-between">
                <div>Let we handle all your</div>
                <div>expenses</div>
            </div>

            <div className="left-bottom">
                <div>Start using splits</div>
            </div>

            
        </div>
        <div className="Section1-right-container" style={{userSelect:"none"}}><img draggable={true} src={Section1img}  style={{userSelect:"none"}} /></div>
    </div>
    )
}
 