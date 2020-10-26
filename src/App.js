import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment';
import Login from './Login';
import User from './User';
import CriarConta from './CriarConta'

class App extends Component {

  state = {
    comentarios: {},
    isLoading: false,
    isLogado: false,
    erroLogin: '',
    erroCadastro: '',
    user: '',
    telaAtual: 'login'
  }

  adicionarComentario = (texto) => {
    const { database } = this.props
    const id = database.ref().child('comentarios').push().key;
    const comentario = {}
    comentario['comentarios/' + id] = { texto, email: this.state.user.email, id: this.state.user.uid }
    database.ref().update(comentario)
    // this.setState({comentarios:[...this.state.comentarios, texto+' '+id]})
  }

  login = async (email, senha) => {
    const { auth } = this.props
    this.setState({
      erroLogin: ''
    })
    try {
      await auth.signInWithEmailAndPassword(email, senha)
    } catch (err) {
      this.setState({
        erroLogin: err.code
      })
    }
  }
  
  logout = () => {
    const { auth } = this.props
    auth.signOut()
  }

  criarConta = async(email, senha) => {
    const { auth } = this.props
    this.setState({
      erroCadastro: ''
    })
    try {
      await auth.createUserWithEmailAndPassword(email, senha)
    } catch (err) {
      this.setState({
        erroCadastro: err.code
      })
    }
  }

  alternarTela = (tela) => {
    this.setState({
      telaAtual: tela
    })
  }
  componentDidMount = () => {
    const { database, auth } = this.props
    this.setState({ isLoading: true });
    this.comentarios = database.ref('comentarios');
    this.comentarios.on('value', snapshot => {
      this.setState({
        comentarios: snapshot.val(),
        isLoading: false
      })
    })

    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({
          isLogado: true,
          user
        })
      }
      else {
        this.setState({
          isLogado: false,
          user: ''
        })
      }
    })
  }
  render() {
    return (
      <div>
        {this.state.isLogado && <User email={this.state.user.email} logout={this.logout} />}
        {/* New Comments */}
        {this.state.isLogado && <NewComment adicionarComentario={this.adicionarComentario} />}
        {!this.state.isLogado && this.state.telaAtual === 'login' && <Login login={this.login} erro={this.state.erroLogin} alternarTela={this.alternarTela} />}
        {!this.state.isLogado && this.state.telaAtual === 'cadastro' && <CriarConta criarConta={this.criarConta} erro={this.state.erroCadastro} alternarTela={this.alternarTela} />}

        {/* Comments */}
        <Comments comentarios={this.state.comentarios} />
        {this.state.isLoading && <p>Carregando...</p>}
      </div>
    );
  }
}

export default App;
