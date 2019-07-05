import React from 'react'

import HeroBanner from './home/HeroBanner'
import AboutBlog from './home/AboutBlog'
import PopularBlog from './home/PopularBlog'


const Home = (props) =>{
    return(
        <div className="container-fluid pl-0 pr-0">  
            <HeroBanner/>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-8">
                    <AboutBlog/>  
                    </div>
                    <div className="col-md-4">
                    <PopularBlog/>
                    </div>
                </div>
            </div>
</div>
        
    )
    
}

export default Home
