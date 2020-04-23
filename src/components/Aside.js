import React from 'react'

import Form from './Form.js'

class Aside extends React.Component {
  render(){
    return(
      <aside className="aside">

        {this.props.view.pageName === 'addPost' ?
          <Form handleCreate={this.props.handleCreate} formInputs={this.props.formInputs}   handleUpdate={this.props.handleUpdate} view={this.props.view}/>
        :
          <p className="quote">"Not all who wander are lost..."</p>
        }
      </aside>
    )
  }
}

export default Aside
