import React from 'react'

const PostItem = (props) => {
    return (
    <div className="card mb-3" style={{maxWidth:'450px'}}>
        <div className="row no-gutters">
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.body}</p>
                    <button type="button" class="btn btn-secondary">Read More</button>
                </div>
            </div>
            <div className="col-md-4">
                <img src="http://lorempixel.com/200/350/" className="card-img" alt={props.title} />
            </div>
            </div>
        </div>
    )
}

export default PostItem