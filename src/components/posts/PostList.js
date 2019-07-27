import React from 'react'
import axios from 'axios'

import PostHero from './PostHero'
import Spinner from '../commons/Spinner'
import PostItem from './PostItem'

class PostList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            isLoaded: false,
            postLimit:6,
            postLimitLoaded: true,
            filteredPosts: [],
            searchValue: ""
        }
    }

    loadMoreHandle = () => {
        this.setState((prevState) => ({
            postLimitLoaded: false
        }))
        setTimeout(() => {
            this.setState((prevState) => ({
                postLimit: prevState.postLimit + 6,
                postLimitLoaded: true
            }))
        },300)
    }

    handleSearch = (e) => {
        const value = e.target.value
        console.log(value)
        this.setState((prevState) => ({
            searchValue: value,
            filteredPosts: prevState.posts.filter((post) => 
                post.title.toLowerCase().includes(value.toLowerCase())
            )
        }))
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState(()=>({
                posts:response.data,
                isLoaded: true,
                filteredPosts: response.data
            }))
        })
    }

    render(){
        return(
            <React.Fragment>
                <PostHero headerTitle={'Blogs List'} />
                <div className="container mt-4 mb-4">
                <h2>Read Posts</h2>
                <div className="row">
                    <div className="col-md-8">
                    {
                        this.state.isLoaded?(
                        <div>
                            { this.state.filteredPosts.slice(0, this.state.postLimit).map((post,index) => {
                            return <PostItem 
                            key={post.id}
                            title={post.title} 
                            body={post.body} 
                            id={post.userId}
                            img={`http://lorempixel.com/${200+index}/${350+index}/`}
                            />
                        })}
                        {
                             this.state.filteredPosts.length > this.state.postLimit ? (
                                <div>
                            {
                                this.state.postLimitLoaded ? ( 
                                    <button type="button" className="btn btn-dark" onClick={() => this.loadMoreHandle() }>Load More</button>
                                ) : ( <Spinner /> ) 
                            }
                        </div>
                             ):(<div></div>)
                        }
                        </div>
                    ):(
                    <Spinner />
                    )
                    }

                        
                    </div>
                    <div className="col-md-4">
                    <div className="sideSearch">
                        <form>
                            <input type="text" className="form-control" placeholder="Search Blogs" value={this.state.searchValue} onChange={ this.handleSearch } />
                        </form>
                    </div>
                        <h3>Recent Post</h3>
                    { this.state.posts.slice(-3).map((post,index) => {
                            return <PostItem 
                            key={post.id}
                            title={post.title} 
                            body={post.body} 
                            id={post.userId}
                            img={`http://lorempixel.com/${200+index}/${350+index}/`}
                            />
                        })}
                    
                    </div>
                </div>
            </div>
            </React.Fragment>
            
            
            
        )
    }
}

export default PostList