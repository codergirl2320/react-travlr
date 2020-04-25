import React from 'react'

import Form from './Form.js'

class Aside extends React.Component {
  render(){
    return(
      <aside className="aside">
        {this.props.view.pageName === 'addPost' || this.props.view.pageName === 'editPost' ?
          <Form handleCreate={this.props.handleCreate} formInputs={this.props.formInputs}   handleUpdate={this.props.handleUpdate} view={this.props.view}/>
        :
          <p className="quote">" The world is a book and those who do not travel read only a page..."</p>
        }
      </aside>
    )
  }
}

export default Aside
