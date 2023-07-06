import React, { useState } from 'react'
import Todos from './Todos'
import NewTodos from './NewTodos'
import {v4 as uuidv4} from 'uuid'

export default function Home() {
    const [todos,setTodos]=useState([])

    const handleTodo=(todo)=>{
     setTodos((prevTodo)=>{
      return[...prevTodo,{id:uuidv4(),todo}]
     })
    }

    const handleRemove=(id)=>{
     const filter=todos.filter((todo)=>todo.id!==id)
      setTodos(filter)
    }

   
  return (
    <div>
        <NewTodos onTodo={handleTodo} />
        <Todos todos={todos} onRemove={handleRemove} />

    </div>
  )
}
