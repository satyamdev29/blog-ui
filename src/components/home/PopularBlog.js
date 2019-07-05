import React from 'react'

const PopularBlog = (props) => {
    return(
        <React.Fragment>
        <h3>Popular on Medium Blog</h3>
        <div className="card" style={{width:'18rem'}}>
        <img src="../img/blog1.jpeg" className="card-img-top" alt="blog image" />
            <div className="card-body">
                <h5 className="card-title">Blog title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Read More..</a>
            </div>
        </div>
        <div className="card mt-4" style={{width:'18rem'}}>
        <img src="../img/1.jpg" className="card-img-top" alt="blog image" />
            <div className="card-body">
                <h5 className="card-title">Blog title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Read More..</a>
            </div>
        </div>
        </React.Fragment> 
    )
}

export default PopularBlog