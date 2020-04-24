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
      <div className="gallery-container">
        <div className="gallery-post">
          <div className="gallery-image">
            <img src={this.props.postData.image} alt=""/><br/>
          </div>
          <div className="gallery-info">
            <h1>{this.props.postData.title}</h1>
            <h1>{this.props.postData.location}-{this.props.postData.year}</h1>
            <p>{this.props.postData.body}</p>
            <div className="gallery-actions">
              <h4 onClick={() => {this.props.handleView('editPost', this.props.postData)}}>Edit Entry</h4>
              <h4 onClick={() => {this.props.handleDelete(this.props.postData.id)}}>Delete Entry</h4>
              <button onClick={this.likedPost}>&hearts;</button>
              <p>{this.state.likes}</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Post
