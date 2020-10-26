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
        <input value={this.state.email} onChange={this.handleChange('email')} placeholder="Email" />
        <input value={this.state.senha} onChange={this.handleChange('senha')} placeholder="Senha" />
        <button onClick={this.criarConta}>Cadastrar</button>
        <button onClick={() => this.props.alternarTela('login')}>Já possuo uma conta!</button>
        {this.props.erro && <p>{erros[this.props.erro]}</p>}
      </div>
    )
  }
}
export default CriarConta