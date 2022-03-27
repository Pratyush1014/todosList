import React from 'react'

export const ToDo = (props) => {
  return (
    <div >
      <h4>{props.todo.title}</h4>
      <h5>{props.todo.desc}</h5>
      <button type="button" className="btn btn-danger" onClick={ ()=> {return props.onDelete(props.todo)}} >Delete</button><hr/>
    </div>
  )
}
