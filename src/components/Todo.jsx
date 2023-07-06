import React from 'react'

import { FaBitbucket } from "react-icons/fa";

export default function Todo(props) {
    const {title,description}=props.todo
  return (
    <div>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <button><FaBitbucket /></button>
    </div>
  )
}
