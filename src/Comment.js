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
    <div className="card mb-3">
      <div className="card-body">
      <h5>{comentario}</h5>
      </div>
      <div className="card-footer">
      <span className="text-muted">{email}</span>
      </div>
    </div>
  )
}

export default Comment