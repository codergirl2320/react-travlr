import React from 'react'

import Post from './Post.js'
import Home from './Home.js'


class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="main-container">
          {this.props.view.pageName === 'gallery' ? this.props.posts.map((postData) => (
            <Post key={postData.id} postData={postData} handleView={this.props.handleView} handleDelete={this.props.handleDelete} view={this.props.view} posts={this.props.posts}/>))
          : <Home/> }
        </div>
      </main>
    )
  }
}

export default Main;
