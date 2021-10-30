import React from 'react'
import "./NavbarActions.scss"
export default function NavbarActions() {
    return (
        <div className="navbar-actions-container">
            <div><div className="action-item">Home</div></div>
            <div><div className="action-item">Features</div></div>
            <div><div className="action-item">About</div></div>
            <div>
                <div className="dark-action-item">Login / Sign Up</div>
            </div>
        </div>
    )
}
