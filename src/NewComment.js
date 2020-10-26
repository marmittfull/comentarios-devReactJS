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
      <div className="mt-3">
        <div>
        <textarea cols="50" rows="4"  value={this.state.novoComentario} onChange={this.handleChange} />
        </div>
        <div>
        <button className="btn btn-primary" onClick={this.adicionarComentario}>
          Click aqui
        </button>
        </div>
      </div>
    )
  }
}
export default NewComment;