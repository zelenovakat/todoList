import React from "react";



const Todos = ({todos, deleteTodo, status}) => {
    const todolist = todos.length ? (
          todos.map(todo => {
              return (
                  <div className="collection-item" key={todo.id}>
                      <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                  </div>
              )
          })
    ) : (
        <p className="center">You have no todo"s left</p>
    )
    return (
        <div className="todos collection">
          {todolist}
        </div>    
    )
}

export default Todos