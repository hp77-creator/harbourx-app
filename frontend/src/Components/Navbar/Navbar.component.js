import React from 'react'
import Brand from '../Brand/Brand.component';
import "./Navbar.scss";
import NavbarActions from './NavbarActions/NavbarActions.component';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <Brand />
            </div>
            <div className="navbar-actions">
                <NavbarActions />
            </div>
        </div>
    )
}
