import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "morning walk"},
      {id: 2, content: "meeting with John"},
      {id: 3, content: "Buy pizza from Pizzahut"},
    ]
  }
  deleteTodo = (id) => {
    console.log(id);
  }
  
  render () {
    return (
      <div className="App">
       <h1 className="center black-text">Wednesday,22 Nov</h1>
       <h2 className="center blue-text">3 tasks</h2>
      
       <Todos todos={this.state.todos} deleteTodo ={this.deleteTodo} />
      </div>
    );
  }
}
   


export default App;
