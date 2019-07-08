import React from 'react'
import {Link} from 'react-router-dom'
const PostItem = (props) => {
    const { id, title, body } = props
    return (
    <div className="card mb-3" style={{maxWidth:'450px'}}>
        <div className="row no-gutters">
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                    <Link to={`posts/${id}`} className="btn btn-secondary"> Read More </Link>                    
                </div>
            </div>
            <div className="col-md-4">
                <img src="http://lorempixel.com/200/350/" className="card-img" alt={title} />
            </div>
            </div>
        </div>
    )
}

export default PostItem