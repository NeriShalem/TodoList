import React from 'react'
import Todo from './Todo/Todo'
import "../TodosList/TodoList.css"

function TodosList(props) {
  const { todos, ShownFilter } = props
  const { delTodo, updateTodo, toggleCompleteTodo, toggleEditingTodo } = props

  if (ShownFilter === 'All') {
    return (
      <>
        <lable className="headerFilterTodo">Filter by All</lable>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              delTodo={delTodo}
              updateTodo={updateTodo}
              toggleCompleteTodo={toggleCompleteTodo}
              toggleEditingTodo={toggleEditingTodo}
            />
          )
        })}
      </>
    )
  } else if (ShownFilter === 'Complete') {
    return (
      <>
        <lable className="headerFilterTodo">Filter by Complete</lable>
        {todos.map((todo) => {
          if (todo.complete === true) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                delTodo={delTodo}
                updateTodo={updateTodo}
                toggleCompleteTodo={toggleCompleteTodo}
                toggleEditingTodo={toggleEditingTodo}
              />
            )
          }
        })}
      </>
    )
  } else if (ShownFilter === 'Not complete') {
    return (
      <>
        <lable className="headerFilterTodo">Filter by Not complete</lable>
        {todos.map((todo) => {
          if (todo.complete === false) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                delTodo={delTodo}
                updateTodo={updateTodo}
                toggleCompleteTodo={toggleCompleteTodo}
                toggleEditingTodo={toggleEditingTodo}
              />
            )
          }
        })}
      </>
    )
  }
}
export default TodosList
