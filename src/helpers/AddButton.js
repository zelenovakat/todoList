import React, { useState } from "react"
import AddTodo from "../AddTodo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const AddButton = ({ addTodo }) => {
  // const [inputVisible, isInputVisible] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const onClick = () => setShowInput(true)

  // const inputStateHandler = () => {
  //   isInputVisible(true)
  // }
  return (
    <div>
      <Button onClick={onClick}>
        <FontAwesomeIcon icon={faPlusCircle} />
        {showInput ? <AddTodo /> : null}
      </Button>
    </div>
  )
}

export default AddButton

const Button = styled.button`
  border: none;
  background: transparent;
  svg {
    font-size: 50px;
    color: #4355a9;
  }
  :focus {
    background-color: transparent;
  }
`
