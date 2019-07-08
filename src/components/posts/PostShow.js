import React from 'react'
import PostHero from './PostHero'
import axios from 'axios';

import Spinner from '../commons/Spinner'

class PostShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            post:{},
            isLoaded:false
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            this.setState(()=>({
                post:response.data,
                isLoaded:true
            }))
        })
    }

    render(){
        return(
            <React.Fragment>
            <PostHero headerTitle={'Post Show'}/>
            <div>
            {this.state.isLoaded?(<div>Post Show</div>):(<Spinner/>)}
            </div>
            </React.Fragment>
            
        )
    }
}

export default PostShow