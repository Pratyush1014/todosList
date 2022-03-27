import React from 'react'
import {ToDo} from './ToDo'
export const ToDos = ({todos, onDelete}) => {
  return (
    <div className='container'>
        <h3>ToDos List </h3>
        {todos.length === 0 ? <p>No todos to display</p> : todos.map((todos)=>{
          return (
            <ToDo todo = {todos} key = {todos.sno} onDelete = {onDelete}/>
          )
        })}
        
        
    </div>
  )
}
