import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid' // uuid creates a random ID
import '../AddTodo/AddTodo.css'

function AddTodo({ todos, setTodos }) {
  const todoNameRef = useRef()

  function handleAddTodoOnEnter(e) {
    if (e.code === 'Enter') {
      const value = todoNameRef.current.value
      if (value === '') return
      setTodos([
        ...todos,
        { id: uuidv4(), editTodo: false, complete: false, value: value },
      ])
      todoNameRef.current.value = null
    }
  }

  return (
    <div className="divAddTodo">
      <input
        id={'idDivAddTodo'}
        type="text"
        className="inputAddTodo"
        ref={todoNameRef}
        placeholder="Enter any Todo..."
        onKeyUp={handleAddTodoOnEnter}
      ></input>
    </div>
  )
}

export default AddTodo
