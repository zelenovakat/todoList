const TodoItem = props => {
    return (
      <div class="item">
        <div class="ui checkbox">
          <input type="checkbox" />
          <label>{props.children}</label>
        </div>
      </div>
    );
  };
  
  const TodoItems = props => {
    return (
      <div class="ui segment row">
        <div id="pending" class="ui left aligned column">
          <div id="todoitems" class="ui vertical fluid menu">
            {props.items.map(item => (
              <TodoItem>{item}</TodoItem>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  const Container = props => {
    return (
      <div class="ui segment">
        <h1>{props.title}</h1>
        {props.children}
      </div>
    );
  };
  
  const Button = props => {
    return (
      <button
          id="addTodo"
          class="ui primary button"
          onClick={props.onClick}
        >
          Add To Do Item
        </button>
    );
  }
  
  class Input extends React.Component {
    constructor(){
      super();
      this.setState({currentTodo: ""})
    }
  onChange = (e) => {
    let stateValue = "EMPTY"
    try{
      stateValue = this.state.currentTodo;
    }
    catch(e){}
    console.log(stateValue + e.target.value);
  }
  render() {
      return (
        <div class="ui input">
          <input
              onChange={this.onChange}
              id="todoText"
              type="text"
              placeholder="Your Todo Item"
              value={this.props.currentTodo}
            />
        </div>
      );  
  }
  }
  const AddTodo = props => {
    return (
      <Container title=''>
        
          <Input
            value={props.currentTodo}
            onChange={props.handleChange}
          />
  
        <Button onClick={props.todoClickHandler} />
       
      </Container>
    );
  };
  
  class Application extends React.Component {
    state = {
      currentTodo: "",
      todos: []
    };
  
    todoClickHandler = () => {
      this.setState({
        todos: [...this.state.todos, this.state.currentTodo],
        currentTodo: ""
      });
    };
  
    handleChange = e => {
      this.setState({
        currentTodo: `${e.target.value}`
      });
    };
  
    render() {
      return (
        <div class="ui four column centered grid">
          <AddTodo
            handleChange={this.handleChange}
            currentTodo={this.state.currentTodo}
            todoClickHandler={this.todoClickHandler}
          />
          <TodoItems items={this.state.todos} />
        </div>
      );
    }
  }
  
export default AddTodo