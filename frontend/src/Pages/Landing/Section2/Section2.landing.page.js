import React from 'react'
import "./Section2.scss"
import Section2img from "./../../../assets/Landing/Section2.png"
export default function Section2() {
    return (
        <div className="Section2-container">
            
            
            <div className="Section2-left-container">
                <img draggable={false} src={Section2img} />
            </div>


            <div className="Section2-right-container">
                <div className="right-top">
                    <div> Why Splits ? </div>

                </div>
                <div>
                    <ul>
                        <li>Managing expenses</li>
                        <li>Timely reminders</li>
                        <li>Simplifying Debts</li>
                        <li>Simplifying payments</li>
                    </ul>
                </div>


            
            </div>
    
        </div>
    )
}
