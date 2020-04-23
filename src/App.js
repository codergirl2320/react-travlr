import React from 'react';

import Main from './components/Main.js'
import Header from './components/Header.js'
import Aside from './components/Aside.js'
import Footer from './components/Footer.js'
import Nav from './components/Nav.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      view: {
        pageName: 'home',
        pageTitle: 'Oh, the places I have been...',
      },
      formInputs: {
        id: null,
        title: null,
        body: null,
        location: null,
        image: null,
        year: null
      }
    }
  }

  handleView = (view, postData) => {
    let pageTitle = ''
    let formInputs = {
      id: null,
      title: '',
      body: '',
      location: '',
      image: '',
      year: ''
    }
    switch (view) {
      case 'home':
        pageTitle = 'Oh, the places I have been...'
        break
      case 'addPost':
        pageTitle = 'Where did you go this time?'
        break
      case 'editPost':
        pageTitle = 'Where did you really go?'
        formInputs = {
          id: postData.id,
          title: postData.title,
          body: postData.body,
          location: postData.location,
          image: postData.image,
          year: postData.year
        }
        break
      default:
        break
    }
    this.setState({
      view: {
        pageName: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  }
  render() {
    return (
      <div className='full-container'>
        <Header/>
        <Nav handleView={this.handleView}/>
        <Aside handleView={this.handleView}/>
        <Main view={this.state.view} handleView={this.handleView} formInputs={this.state.formInputs}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
