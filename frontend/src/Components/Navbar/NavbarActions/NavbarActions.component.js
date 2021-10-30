import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarActions.scss"
export default function NavbarActions() {
    return (
        <div className="navbar-actions-container">
            <div><div className="action-item">Home</div></div>
            <div><div className="action-item">Features</div></div>
            <div><div className="action-item">About</div></div>
            <div>
                <Link to="/login"><div className="dark-action-item">Login / Sign Up</div></Link>
            </div>
        </div>
    )
}
