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
        <form className="form-inline">
        <input className="form-control" value={this.state.email} onChange={this.handleChange('email')} placeholder="Email" />
        <input className="form-control ml-2" value={this.state.senha} type="password" onChange={this.handleChange('senha')} placeholder="Senha" />
        <button className="btn btn-primary ml-3" type="button" onClick={this.login}>Entrar</button>
        <button className="btn btn-outline-primary ml-2" onClick={() => this.props.alternarTela('cadastro')}>Não possuo uma conta!</button>
        </form>
        {this.props.erro &&
          <div className="col-4 m-0 p-0">
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
export default Login