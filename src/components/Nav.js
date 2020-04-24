import React from 'react'

class Nav extends React.Component {
  render() {
    return(
      <div className="nav-bar">
        <h4 onClick={() => {this.props.handleView('home')}}>home</h4>
        <h4 onClick={() => {this.props.handleView('gallery')}}>gallery</h4>
        <h4 onClick={() => {this.props.handleView('addPost')}}>post</h4>
      </div>
    )
  }
}



export default Nav
