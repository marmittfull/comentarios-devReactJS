import React from 'react'

const User = (props) => {
  return(
    <div>
      <h5>Logado como: {props.email}</h5>
      <button className="btn btn-outline-danger" onClick={props.logout}>Sair</button>
    </div>
  )
}
export default User