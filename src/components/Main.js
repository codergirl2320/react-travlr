import React from 'react'

import Post from './Post.js'
import Home from './Home.js'


class Main extends React.Component {
  render() {
    return (
      <div>
        {this.props.view.pageName === 'gallery' ? this.props.posts.map((postData) => (
          <Post key={postData.id} postData={postData} handleView={this.props.handleView} handleDelete={this.props.handleDelete}/>
        ))
        :
        <Home/>
        }
      </div>
    )
  }
}

export default Main;
