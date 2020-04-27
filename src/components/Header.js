import React from 'react'

class Header extends React.Component {
  render(){
    return(
      <header className="header-container">
        <img className="header-image" src="./images/header_image_opacity.jpg" alt=""/>
        <h1 className="header-title">Travlr</h1>
      </header>
    )
  }
}

export default Header
