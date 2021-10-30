import React from 'react'
import  BrandLogo from "./../../assets/Brandlogo.png"
import "./Brand.scss"

export default function Brand(props) {
    return (
        <div className="BrandLogo">
            <img className={"BrandLogoAsset"} src={props.src ? props.src : BrandLogo} draggable={false}  />
        </div>
    )
}
