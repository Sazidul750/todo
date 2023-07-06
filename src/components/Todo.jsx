import React from 'react'

import { FaBitbucket } from "react-icons/fa";

export default function Todo(props) {
    const {title,description}=props.todo
    const {id}=props
    const handleClick=(id)=>{
      props.onRemove(id)
      console.log("click")
    }
    
   
  return (
    <div>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <button onClick={()=>handleClick(id)} ><FaBitbucket /></button>
    </div>
  )
}
