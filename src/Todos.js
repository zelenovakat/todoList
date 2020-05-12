import React from "react"
import Checkbox from "@material-ui/core/Checkbox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Todos = ({ todos, toggleStatus, deleteTodo }) => {
  const todolist = todos.length ? (
    todos.map((todo) => {
      return (
        <MainDiv>
          <div
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
          </div>
          <DeleteButton onClick={() => deleteTodo(todo.id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </DeleteButton>
        </MainDiv>
      )
    })
  ) : (
    <p>You have no todos </p>
  )
  return <div className="todos collection">{todolist}</div>
}

export default Todos

const DeleteButton = styled.button`
  background: transparent;
  border: 0;
`
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 200px;
  min-height: 50px;
  align-items: center;
  div {
    font-size: 20px;
  }
`
