import React from 'react'
import '../EditTodo/EditTodo.css'

function EditTodo({ todo, updateTodo, toggleEditingTodo }) {
  function handelEditingTodoOnEnter(e) {
    if (e.code === 'Enter') {
      updateTodo(todo.id, e.target.value)
      toggleEditingTodo(todo.id)
    }
  }
  return (
    <div>
      <input
        type="text"
        className="inputEditTodo"
        placeholder={todo.value}
        onKeyUp={handelEditingTodoOnEnter}
      ></input>
    </div>
  )
}

export default EditTodo
