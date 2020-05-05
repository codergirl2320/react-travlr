import React from 'react'

import Post from './Post.js'
import Home from './Home.js'


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }
  render() {
    let filteredPosts = this.props.posts.filter(
      (post) => {
        return post.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <main>
        <div className="main-container">
          {this.props.view.pageName === 'gallery' ? <input className="search-input" type="text" placeholder="search location" value={this.state.search} onChange={this.updateSearch.bind(this)}/> : <span></span>}

          {this.props.view.pageName === 'gallery' ? filteredPosts.map((postData) => (
            <Post key={postData.id} postData={postData} handleView={this.props.handleView} handleDelete={this.props.handleDelete} view={this.props.view} posts={this.props.posts}/>))
          : <Home/> }
        </div>
      </main>
    )
  }
}

export default Main;
