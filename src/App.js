
import './App.css';
import { Header } from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer"
import { ToDos } from "./MyComponents/ToDos"
import {AddTodo} from "./MyComponents/AddTodo"

import React, { useState } from 'react';

function App() {
const onDelete = (todo) => {
  setTodos(todos.filter((e) => {return e !== todo} ))
}

  const [todos, setTodos] = useState([]) ;
  const Addtodo = (title,desc)=>{
          console.log("Adding",title,desc);
          let sno;
          if (todos.length == 0){ sno = 0;}
          else {sno = todos[todos.length - 1].sno + 1 ;}
          const mytodo = {
            sno : sno,
            title : title,
            desc : desc
          };
          setTodos([...todos,mytodo]);
  }

  return (  
   <div>
   <Header title="ToDos List" searchBar = {true}/>
   <AddTodo Addtodo = {Addtodo}/>
   <ToDos todos = {todos} onDelete = {onDelete}/>
   <Footer/>
   </div>
  );
}

export default App;
