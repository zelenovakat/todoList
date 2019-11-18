import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

const Todos = ({ todos, toggleStatus }) => {
  const todolist = todos.length ? (
    todos.map(todo => {
      return (
        <div
          className={`collection-item todo-finished-${todo.status}`}
          key={todo.id}
          onClick={() => toggleStatus(todo.id)}
        >
          <Checkbox
            checked={todo.status === "true"}
            value="status"
            color="primary"
            inputProps={{
              "aria-label": "todo status checkbox"
            }}
          />
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo"s left</p>
  );
  return <div className="todos collection">{todolist}</div>;
};

export default Todos;
