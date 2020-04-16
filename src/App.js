import React from "react"
import Todos from "./Todos"
import AddTodo from "./AddTodo"
import { updateObjectInArrayById, formatDate } from "./helpers/utils"
import { useLocalStorage } from "./helpers/UseLocalStorage"

const defaultTodos = [
  { id: 1, content: "morning walk", status: "true" },
  { id: 2, content: "meeting with John", status: "false" },
  { id: 3, content: "Buy pizza from Pizzahut", status: "false" },
]

const App = () => {
  const [todos, setTodos] = useLocalStorage("todos", defaultTodos)

  const addTodo = (todo) => {
    todo.id = Math.random()
    const updatedTodos = [...todos, todo]
    setTodos(updatedTodos)
  }

  const deleteTodo = (todoId) => {
    console.log(todoId)
    const todosWithoutOne = todos.filter((todo) => todo.id !== todoId)
    setTodos(todosWithoutOne)
  }

  const toggleStatus = (id) => {
    const selectedTodo = todos.find((todo) => todo.id === id)
    selectedTodo.status = selectedTodo.status === "true" ? "false" : "true"
    setTodos(updateObjectInArrayById(todos, selectedTodo))
  }

  return (
    <div className="todo-app container">
      <h1 className="center black-text">{formatDate(new Date())}</h1>
      <h2 className="center blue-text">{todos.length} tasks</h2>

      <Todos todos={todos} toggleStatus={toggleStatus} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  )
}

export default App
