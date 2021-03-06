import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Nav from './components/nav/Nav'

import Home from './components/Home'
import About from './components/About'

import Posts from './components/posts/PostList'
import PostShow from './components/posts/PostShow'

import Contact from './components/Contatct'

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid pl-0 pr-0">
        <Nav/>  
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} exact={true}/>
        <Route path='/posts/:id' component={PostShow} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
