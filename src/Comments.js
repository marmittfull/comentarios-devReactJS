import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
  render() {
    return (
      <div>
        {/* Comment */}
        {this.props.comentarios.map(c =>  <Comment c={c} />)}
      </div>
    )
  }
}

export default Comments;