import React from 'react'
import AboutHero from './about/AboutHero'
import AboutUs from './about/AboutUs'
const About = (props) =>{
    return(
        <div className="container-fluid pl-0 pr-0">
            <AboutHero/>
            <AboutUs/>
        </div>
    )
}

export default About