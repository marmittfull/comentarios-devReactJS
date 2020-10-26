import React from 'react'

const User = (props) => {
  return(
    <div>
      <h5>Logado como: {props.email}</h5>
      <button onClick={props.logout}>Sair</button>
    </div>
  )
}
export default User