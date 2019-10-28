// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import App from "../../App";
import TodoForm from './TodoForm';
import Todo from './Todo'; 

class TodoList extends React.Component{
    constructor(){
        super();
    }

    render(){
        
        return(
            <div>
                <TodoForm addTask={this.props.addTask} filterCompleted={this.props.filterCompleted}/>
                {this.props.tasks.map((item,index)=>(
                    <Todo key={index} obj={item} toggleCompleted={this.props.toggleCompleted}/>
                ))}
                
            </div>
        )
    }

}

export default TodoList;