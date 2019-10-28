import React from "react";
import TodoList from "./TodoList";


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newItem: ''
          };
    }
    handleChanges = e =>{
        this.setState({newTask: e.target.value});
    }
    handleSubmit = e =>{
        e.preventDefault();
        this.props.addTask(this.state.newTask);
        this.setState({newTask:''});
    }
    render(){
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="task" 
                    id="task" 
                    value ={this.state.newTask} 
                    onChange={this.handleChanges}
                    />
                    <button>Add Task</button>
                </form>
                <button onClick={this.props.filterCompleted}>Clear Completed Tasks</button>
            </div>

        )
    }
}

export default TodoForm;