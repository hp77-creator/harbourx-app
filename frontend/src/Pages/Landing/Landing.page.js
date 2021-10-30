import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar.component'
import "./landing.scss"
import Section1 from './Section1/Section1.landing.page'
import Section2 from './Section2/Section2.landing.page'
import Section3 from './Section3/Section3.landing.page'
export default function Landing() {
    return (
        <div className="landingpage">
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </div>
    )
}
