import React from 'react'

class Nav extends React.Component {
  render() {
    return(
      <div className="nav-bar">
        <ul>
          <li onClick={() => {this.props.handleView('home')}}>home</li>
          <li onClick={() => {this.props.handleView('gallery')}}>gallery</li>
          <li onClick={() => {this.props.handleView('addPost')}}>post new images</li>
        </ul>
      </div>
    )
  }
}



export default Nav
