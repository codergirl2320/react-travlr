import React from 'react'

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      id: null,
      title: '',
      body: '',
      location: '',
      image: '',
      year: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.view.pageName === 'addPost') {
      this.props.handleCreate(this.state)
    } else if (this.props.view.pageName === 'editPost') {
      this.props.handleUpdate(this.state)
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.formInputs.id,
      title: this.props.formInputs.title,
      body: this.props.formInputs.body,
      location: this.props.formInputs.location,
      image: this.props.formInputs.image,
      year: this.props.formInputs.year
    })
  }

  render() {
    return(
      <form className="create-form" onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="title" id="title" value={this.state.title} onChange={this.handleChange}/><br/>
        </label>

        <label>
          <textarea placeholder="body" id="body" value={this.state.body} onChange={this.handleChange}></textarea><br/>
        </label>

        <label>
          <input type="text" placeholder="location" id="location" value={this.state.location} onChange={this.handleChange}/><br/>
        </label>

        <label>
          <input type="text" placeholder="image url" id="image" value={this.state.image} onChange={this.handleChange}/><br/>
        </label>

        <label>
          <input type="text" placeholder="year" id="year" value={this.state.year} onChange={this.handleChange}/><br/>
        </label>

        <input type="submit" value="share"/><br/>

      </form>
    )
  }
}


export default Form
