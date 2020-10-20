import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment';
import { database } from './Firebase'; 

 class App extends Component {
  
    state = {
      comentarios:{},
      isLoading: false
    }

    adicionarComentario = (texto) => {
      const id = database.ref().child('comentarios').push().key;
      const comentario = {}
      comentario['comentarios/'+id] = {texto}
      database.ref().update(comentario)
      // this.setState({comentarios:[...this.state.comentarios, texto+' '+id]})
    }

    componentDidMount = () => {
      this.setState({isLoading: true});
      this.comentarios = database.ref('comentarios');
      this.comentarios.on('value', snapshot=>{
        this.setState({comentarios: snapshot.val(), 
        isLoading:false})
      })
    }

  render(){
    return (
      <div>
        {/* New Comments */}
        <NewComment adicionarComentario={this.adicionarComentario} />
        {/* Comments */}
        <Comments comentarios={this.state.comentarios} />
        {this.state.isLoading && <p>Carregando...</p>}
      </div>
    );
  }
}

export default App;
