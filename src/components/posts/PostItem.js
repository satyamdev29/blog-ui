import React from 'react'
import {Link} from 'react-router-dom'
const PostItem = (props) => {
    const { id, title, body, img } = props
    return (
    <div className="card mb-3" style={{maxWidth:'450px'}} key={id}>
        <div className="row no-gutters">
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title"><Link to={`/posts/${id}`}>{title}</Link></h5>
                    <p className="card-text">{body}</p>
                    <Link to={`/posts/${id}`}><span className="btn btn-secondary">Read More</span> </Link>                    
                </div>
            </div>
            <div className="col-md-4">
                <img src={img} className="card-img" alt={title} />
            </div>
            </div>
        </div>
    )
}

export default PostItem