import React from "react"
import Checkbox from "@material-ui/core/Checkbox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Todos = ({ todos, toggleStatus, deleteTodo }) => {
  const todolist = todos.length ? (
    todos.map((todo, i) => {
      console.log(todo)
      return (
        <MainDiv key={i}>
          <OneTodo
            className={`todo-finished-${todo.status}`}
            key={todo.id}
            onClick={() => toggleStatus(todo.id)}>
            <Checkbox
              checked={todo.status === "true"}
              value="status"
              color="primary"
              inputProps={{
                "aria-label": "todo status checkbox",
              }}
            />
            <span>{todo.content}</span>
          </OneTodo>
          <DeleteButton onClick={() => deleteTodo(todo.id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </DeleteButton>
        </MainDiv>
      )
    })
  ) : (
    <InputMessage>You have no todos </InputMessage>
  )
  return <TodosWrapper className="todos collection">{todolist}</TodosWrapper>
}

export default Todos

const DeleteButton = styled.button`
  background: transparent;
  border: 0;
`
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #818cc3;
  border-radius: 10px;
  outline: none;
  margin: 10px 0;
  div {
    font-size: 20px;
  }
`
const InputMessage = styled.p`
  color: #000000;
`
const TodosWrapper = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
`
const OneTodo = styled.div`
  svg {
    color: #4355a9;
  }
`
