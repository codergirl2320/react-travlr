import React from 'react'

class Post extends React.Component {
  constructor(){
    super()
    this.state = {
      likes: 0
    }
    this.likedPost = this.likedPost.bind(this);
  }
  likedPost = (event) => {
    this.setState({likes: this.state.likes + 1})
  }

  render(){
    return (
      <article>
        <div>
          {this.props.postData.title}
        </div>
        <div className="post-box">
          <div>
            <img src={this.props.postData.image} alt=""/><br/>
            <h1>{this.props.postData.location}</h1>
          </div><br/>
          <div>
            {this.props.postData.body}
          </div>
        </div>
        <div>
          <ul>
            <li onClick={() => {this.props.handleView('editPost', this.props.postData)}}>Edit Entry</li>
            <li onClick={() => {this.props.handleDelete(this.props.postData.id)}}>Delete Entry</li>
          </ul>
        <div>
          <button onClick={this.likedPost}>&hearts;</button>
          <p>{this.state.likes}</p>
        </div>
        </div>
      </article>
    )
  }
}

export default Post
