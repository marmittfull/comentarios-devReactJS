import React from 'react'

const Comment = ({ c }) => {
  let comentario = 'Gostei'
  let email = 'anônimo'
  if (c) {
    if (c.texto)
      comentario = c.texto
    if (c.email)
      email = c.email
  }
  return (
    <div>
      <h4>Comentário: {comentario}</h4>
      <h5>Escrito por: {email}</h5>
      <hr/>
    </div>
  )
}

export default Comment