import React from 'react'

const Comment = ({ c }) => {
    let comentario = 'vazio'
  if(c && c.texto)
    comentario = c.texto
  return (
    <div>{comentario}</div>
  )
}

export default Comment