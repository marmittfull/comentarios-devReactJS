import React, { Component } from 'react';

class NewComment extends Component {
  state = {
    novoComentario: ''
  }
  handleChange = (event) => {
    this.setState({
      novoComentario: event.target.value
    })
  }
  adicionarComentario = ()=> {
    this.props.adicionarComentario(this.state.novoComentario);
    this.setState({
      novoComentario:''
    })
  }
  render() {
    return (
      <div>
        <textarea value={this.state.novoComentario} onChange={this.handleChange} >

        </textarea>
        <button onClick={this.adicionarComentario}>
          Click aqui
        </button>
      </div>
    )
  }
}
export default NewComment;