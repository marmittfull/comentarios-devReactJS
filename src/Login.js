import React, { Component } from 'react'

class Login extends Component {
  state = {
    email: '',
    senha: ''
  }
  handleChange = campo => event => {
    this.setState({
      [campo]: event.target.value
    })
  }
  login = () => {
    this.props.login(this.state.email, this.state.senha)
  }

  render() {
    const erros = {
      'auth/invalid-email': 'Email inválido!',
      'auth/wrong-password': 'Senha inválida!',
      'auth/user-not-found': 'Usuário inexistente!'
    }
    return (
      <div>
        <h4>Login</h4>
        <input value={this.state.email} onChange={this.handleChange('email')} placeholder="Email" />
        <input value={this.state.senha} onChange={this.handleChange('senha')} placeholder="Senha" />
        <button onClick={this.login}>Entrar</button>
        {this.props.erro && <p>{erros[this.props.erro]}</p>}
      </div>
    )
  }
}
export default Login