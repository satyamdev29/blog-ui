import React from 'react'
import ContactHero from './contact/ContactHero'
import ContactUs from './contact/ContactUs'
const Contact = (props) =>{
    return(
        <div className="container-fluid pl-0 pr-0">
            <ContactHero />
            <ContactUs />
        </div>
    )
}

export default Contact