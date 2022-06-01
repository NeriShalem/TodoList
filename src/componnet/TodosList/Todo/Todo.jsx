import React from 'react'
import { AiOutlineCloseCircle, AiOutlineEdit } from 'react-icons/ai'
import EditTodo from '../../EditTodo/EditTodo'
import '../Todo/Todo.css'

function Todo(props) {
  const { todo } = props
  const { delTodo, updateTodo, toggleCompleteTodo, toggleEditingTodo } = props

  function handleCheckboxTodoClick() {
    toggleCompleteTodo(todo.id)
  }
  function handleDelTodoClick() {
    delTodo(todo.id)
  }

  function handleEditingTodoClick() {
    toggleEditingTodo(todo.id)
  }

  return (
    <div className="todoDiv">
      {todo.editTodo ? (
        <EditTodo
          todo={todo}
          updateTodo={updateTodo}
          toggleEditingTodo={toggleEditingTodo}
        />
      ) : (
        <>
          <input
            id={'checkbox-' + todo.id}
            key={todo.id}
            type="checkbox"
            checked={todo.complete}
            onChange={handleCheckboxTodoClick}
          />
          <label htmlFor={'checkbox-' + todo.id}>{todo.value}</label>
        </>
      )}
      <AiOutlineEdit
        className="react-icon-edit"
        onClick={handleEditingTodoClick}
      />
      <AiOutlineCloseCircle
        className="react-icon-del"
        onClick={handleDelTodoClick}
      />
    </div>
  )
}

export default Todo
