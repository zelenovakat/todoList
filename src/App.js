import React from "react"
import Todos from "./Todos"

import { updateObjectInArrayById, formatDate } from "./helpers/utils"
import { useLocalStorage } from "./helpers/UseLocalStorage"
import styled from "styled-components"
// import ProgressMobileStepper from "./helpers/ProgressMobileStepper"
import AddButton from "./helpers/AddButton"

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
    <MaineWrapper>
      <UpperWrapp>
        <h4>My task</h4>
        <FormatDate>{formatDate(new Date())}</FormatDate>

        {/* <ProgressMobileStepper todos={todos} toggleStatus={toggleStatus} /> */}
      </UpperWrapp>
      <MiddleLine></MiddleLine>
      <BottomWrapp>
        <Todos todos={todos} toggleStatus={toggleStatus} deleteTodo={deleteTodo} />
        <AddButton addTodo={addTodo} />
      </BottomWrapp>
    </MaineWrapper>
  )
}

export default App
const UpperWrapp = styled.div`
  margin: 0 15px;
`
const BottomWrapp = styled.div`
  margin: 0 15px;
`
const MiddleLine = styled.div`
  border-bottom: 2px solid #ded9d9;
  margin: 10px 0;
`

const MaineWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const FormatDate = styled.p`
  color: #ded9d9;
`
