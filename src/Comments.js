import React from 'react'
import Comment from './Comment'

const Comments = ({comentarios}) => {
    const keys = Object.keys(comentarios)
    return (
      <div className="mt-4">
        {/* Comment */}
        {keys.map(key => <Comment key={key} c={comentarios[key]} />)}
      </div>
    )
  }


export default Comments