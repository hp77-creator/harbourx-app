import React from 'react'
import { Link } from 'react-router-dom'
import  BrandLogo from "./../../assets/Brandlogo.png"
import "./Brand.scss"

export default function Brand(props) {
    return (
        <Link to="/"><div className="BrandLogo">
        <img className={"BrandLogoAsset"} src={props.src ? props.src : BrandLogo} draggable={false}  />
    </div></Link>
    )
}
