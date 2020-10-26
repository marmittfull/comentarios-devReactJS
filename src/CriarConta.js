import React, { Component } from 'react'

class CriarConta extends Component {
  state = {
    email: '',
    senha: ''
  }
  handleChange = campo => event => {
    this.setState({
      [campo]: event.target.value
    })
  }
  criarConta = () => {
    this.props.criarConta(this.state.email, this.state.senha)
  }

  render() {
    const erros = {
      'auth/invalid-email': 'Email inválido!',
      'auth/weak-password': 'Senha muito fraca!',
      'auth/email-already-in-use': 'Email já cadastrado!'
    }
    return (
      <div>
        <h4>Criar conta</h4>
        <form className="form-inline">
          <input className="form-control" value={this.state.email} onChange={this.handleChange('email')} placeholder="Email" />
          <input className="form-control ml-2" value={this.state.senha} type="password" onChange={this.handleChange('senha')} placeholder="Senha" />
          <button className="btn btn-primary ml-3 mr-2" type="button" onClick={this.criarConta}>Cadastrar</button>
          <button className="btn btn-outline-primary" onClick={() => this.props.alternarTela('login')}>Já possuo uma conta!</button>
        </form>
          {this.props.erro &&
          <div className="col-4 m-0 p-0 ">
            <div className="card mt-2 bg-warning">
              <div className="card-header">Ocorreu um erro</div>
              <div className="card-body">
                <p>{erros[this.props.erro]}</p>
              </div>
            </div>
          </div>
          }
      </div>
    )
  }
}
export default CriarConta