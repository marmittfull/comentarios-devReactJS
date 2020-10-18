import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment';

 class App extends Component {
  
    state = {
      comentarios:[
        'comentario1',
        'comentario2',
        'comentario3',
        'comentario4',
      ]
    }

    adicionarComentario = (comentario) => {
      this.setState({comentarios:[...this.state.comentarios, comentario]})
    }

  render(){
    return (
      <div>
        {/* New Comments */}
        <NewComment adicionarComentario={this.adicionarComentario} />
        {/* Comments */}
        <Comments comentarios={this.state.comentarios} />
      </div>
    );
  }
}

export default App;
