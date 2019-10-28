import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
        tasks:[]
    }
}
addTask = (name) =>{
  const newTask = {
    name: name,
    id: Date.now(),
    completed: false
  };
  this.setState({
    tasks: [...this.state.tasks, newTask]
  });
}

filterCompleted = () => {
  const array = this.state.tasks.filter((item)=>{
      if (!item.completed){
        return true;
      }
    })
  this.setState({
    tasks: array
  });

}

toggleCompleted = id => {
  this.setState({
    tasks: this.state.tasks.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    })
  });
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        filterCompleted={this.filterCompleted}
        addTask = {this.addTask}
        tasks = {this.state.tasks}
        toggleCompleted = {this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
