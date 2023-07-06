import React, { useState } from 'react'
import Todos from './Todos'
import NewTodos from './NewTodos'

export default function Home() {
    const [todos,setTodos]=useState([])
   
  return (
    <div>
        <NewTodos />
        <Todos todos={todos} />

    </div>
  )
}
