import React from "react";
import UseAnimations from 'react-useanimations';
import OnClick from './OnClick'


const Todos = ({todos, toogleStatus, status}) => {
    const todolist = todos.length ? (
          todos.map(todo => {
              const todoClass = (todo.status === "true") ? "collection-item item-true" : "collection-item"
             return (
                  <div onClick={() => toogleStatus(todo.id)} className={todoClass} key={todo.id}>
                     <OnClick />
                      {todo.content}
                  </div>
              )
          })
    ) : 
    (<p className="center">You have no todo"s left</p>)

    return (
        <div className="todos collection">
          {todolist}
        </div>    
    )
}

export default Todos