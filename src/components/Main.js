import React from 'react'

import Post from './Post.js'
import Form from './Form.js'

let defaultURL = '';

if(process.env.NODE_ENV === 'development'){
  defaultURL = 'http://localhost:8888'
} else {
  defaultURL = 'https://cors-anywhere.herokuapp.com/http://travlr-php.herokuapp.com'
}

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  fetchPosts = () => {
    fetch(`${defaultURL}/posts`)
    .then(data => data.json())
    .then(jData => {
      this.setState({posts:jData})
    }).catch(err=>console.log(err))
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
      this.props.handleView('home')
      this.setState(prevState => {
        prevState.posts = jsonedPost
        return {posts: prevState.posts
        }
      })
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
      this.props.handleView('home')
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
      <div>
        <h1>{this.props.view.pageTitle}</h1>
        {this.props.view.pageName === 'home' ? this.state.posts.map((postData) => (
          <Post key={postData.id} postData={postData} handleView={this.props.handleView} handleDelete={this.handleDelete}/>
        ))
        : <Form handleCreate={this.handleCreate} formInputs={this.props.formInputs}   handleUpdate={this.handleUpdate} view={this.props.view}/>
        }
      </div>
    )
  }
}

export default Main;
