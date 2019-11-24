import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'


function updateObjectInArrayById(array, selectedItem) {
  return array.map((item) => {
    if (item.id !== selectedItem.id) {
      // This isn't the item we care about - keep it as-is
      return item
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...selectedItem
    }
  })
}
class App extends Component {
  state = {
    todos: [
      {id: 1, content: "morning walk", status: "true"},
      {id: 2, content: "meeting with John", status: "false"},
      {id: 3, content: "Buy pizza from Pizzahut", status: "false"},
    ]
  }

  addTodo = (todo) => {
   todo.id = Math.random();
   let todos = [...this.state.todos, todo];
   this.setState({
     todos
   })
}

  toggleStatus=(todoId) => {
    const selectedTodo = this.state.todos.find((todo) => todo.id === todoId)

    selectedTodo.status = (selectedTodo.status === "true") ? "false" : "true"
    this.setState((state) => {
      return {todos: updateObjectInArrayById(state.todos, selectedTodo)};
    })
  }
  render () {
    return (
      <div className="todo-app container">

       <h1 className="center black-text">Wednesday,22 Nov</h1>
       <h2 className="center blue-text">3 tasks</h2>

       <Todos todos={this.state.todos} toggleStatus={this.toggleStatus} />
       <AddTodo addTodo={this.addTodo}/>

      </div>
    );
  }
}



export default App;
