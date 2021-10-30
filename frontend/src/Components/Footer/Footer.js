import React from 'react'
import Brand from '../Brand/Brand.component'
import Brand2Logo from "./../../assets/Brandlogo2.png"
import "./Footer.scss"
export default function Footer() {
    return (
        <div className="footer">
            <Brand src={Brand2Logo} />
            <hr />
            <div className={"madewithlove"}>made with love</div>
        </div>
    )
}
