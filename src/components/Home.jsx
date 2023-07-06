import React from 'react'
import Todos from './Todos'
import NewTodos from './NewTodos'

export default function Home() {
    const dummytodos=[
        {
            id:"1",
            title:"this frist title ",
            description:"this is description"
        },
        {
            id:"1",
            title:"this frist title ",
            description:"this is description"
        }
    ]
  return (
    <div>
        <NewTodos />
        <Todos todos={dummytodos} />

    </div>
  )
}
