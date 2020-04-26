import React from 'react'

class Post extends React.Component {

  render(){
    return (
          <div className="gallery-post">
            <div className="gallery-image">
              <img src={this.props.postData.image} alt=""/><br/>
            </div>
            <div className="gallery-info">
              <h1>{this.props.postData.title}</h1>
              <p>{this.props.postData.body}</p>
              <h2>{this.props.postData.location} - {this.props.postData.year}</h2>
              <div className="gallery-actions">
                <h4 onClick={() => {this.props.handleView('editPost', this.props.postData)}}>edit</h4>
                <h4 onClick={() => {this.props.handleDelete(this.props.postData.id)}}>delete</h4>
              </div>
            </div>
          </div>
    )
  }
}

export default Post
