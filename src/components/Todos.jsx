import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
  return (
    <div>
        {props.todos.map((todo,index)=>(
            <Todo key={index}  todo={todo.todo}  id={todo.id} onRemove={props.onRemove} />
        ))}
    </div>
  )
}
