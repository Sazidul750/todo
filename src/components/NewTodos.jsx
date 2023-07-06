import React, { useState } from 'react'

export default function NewTodos(props) {
    const [todo,setTodo]=useState({title:'',description:''})
    const {title,description}=todo
    const handleSubmit=(e)=>{
        console.log("submited")
        e.preventDefault()
        props.onTodo(todo)
        setTodo({title:'',description:''})
    }
    const handleChange=(e)=>{
        setTodo((oldTodo)=>{
            return{...oldTodo,[e.target.name]:e.target.value}
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="title">Title: </label>
                <input type="text" placeholder='Title' name="title" id="title" required onChange={handleChange} value={title} />
            </div>
            <div>
                <label htmlFor="description">Descriptioin: </label>
                <textarea type="description" placeholder='Description' name="description" id="description" required onChange={handleChange}  value={description} />
            </div>
            <div>
                <button type='submit'>Add Todo</button>
            </div>
        </form>
    </div>
  )
}
