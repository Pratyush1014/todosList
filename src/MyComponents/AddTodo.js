import React from 'react'

import { useState } from 'react';

export const AddTodo = ({Addtodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const Submit = (e)=>{
        e.preventDefault();
        if (!title || !desc )
        {alert("Title and Description cannot be empty");}
        else{
            Addtodo(title,desc);
        }
    }

  return (
    <form className='container' onSubmit={Submit}>
    <h3>Add Todos</h3>
  <div className="mb-3">
    <label htmlFor="text" className="form-label">Todo Title</label>
    <input type="text" value = {title} onChange={(e)=> setTitle(e.target.value)} className="form-control" id="text" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="text" className="form-label">Todo Description</label>
    <input type="text" value = {desc} onChange={(e)=> setDesc(e.target.value)} className="form-control" id="text"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">AddToDo</button>
</form>
  )
}
