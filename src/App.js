import React from 'react';

import Main from './components/Main.js'
import Header from './components/Header.js'
import Aside from './components/Aside.js'
import Footer from './components/Footer.js'
import Nav from './components/Nav.js'

let defaultURL = '';

if(process.env.NODE_ENV === 'development'){
  defaultURL = 'http://localhost:8888'
} else {
  defaultURL = 'https://cors-anywhere.herokuapp.com/http://travlr-php.herokuapp.com'
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      view: {
        pageName: 'home',
        pageTitle: 'home',
      },
      formInputs: {
        id: null,
        title: null,
        body: null,
        location: null,
        image: null,
        year: null
      }
    }
  }

  handleView = (view, postData) => {
    console.log(view)
    console.log(this.state)
    let pageTitle = ''
    let formInputs = {
      id: null,
      title: '',
      body: '',
      location: '',
      image: '',
      year: ''
    }
    switch (view) {
      case 'gallery':
        pageTitle = 'gallery'
        break
      case 'home':
        pageTitle = 'home'
        break
      case 'quote':
        pageTitle = 'quote'
        break
      case 'addPost':
        pageTitle = 'Add Post'
        break
      case 'editPost':
        pageTitle = 'Edit Post'
        formInputs = {
          id: postData.id,
          title: postData.title,
          body: postData.body,
          location: postData.location,
          image: postData.image,
          year: postData.year
        }
        break
      default:
        break
    }
    this.setState({
      view: {
        pageName: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  }

  handleCreate = (createdData) => {
    fetch(`${defaultURL}/posts`, {
      body: JSON.stringify(createdData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdPost => {
      return createdPost.json()
    }).then(jsonedPost => {
      this.handleView('gallery')
      this.setState(prevState => {
        prevState.posts = jsonedPost
        return {posts: prevState.posts
        }
      })
    }).catch(err=>console.log(err))
  }

  fetchPosts = () => {
    fetch(`${defaultURL}/posts`)
    .then(data => data.json())
    .then(jData => {
      this.setState({posts:jData})
    }).catch(err=>console.log(err))
  }

  componentDidMount(){
    this.fetchPosts()
  }

  handleUpdate = (updatedData) => {
    fetch(`${defaultURL}/posts/${updatedData.id}`, {
      body: JSON.stringify(updatedData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(updatedPost => {
      this.handleView('gallery')
      this.fetchPosts()
    }).catch(err => console.log(err))
  }

  handleDelete = (id) => {
    fetch(`${defaultURL}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(json => {
      this.setState(prevState => {
        const posts = prevState.posts.filter(post => post.id !== id)
        return {posts}
      })
    }).catch(err => console.log(err))
  }

  render() {

    return (
      <div className='full-container'>
        <Header/>
        <Nav handleView={this.handleView}/>
        <Aside view={this.state.view} handleView={this.handleView} formInputs={this.state.formInputs} handleCreate={this.handleCreate} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} posts={this.state.posts}/>
        <Main view={this.state.view} handleView={this.handleView} formInputs={this.state.formInputs} posts={this.state.posts} handleDelete={this.handleDelete}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
