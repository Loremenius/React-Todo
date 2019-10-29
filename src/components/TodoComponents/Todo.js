import React from "react";
import TodoList from "./TodoList";

class Todo extends React.Component{
    constructor(){
        super();
    }
    addComplete = ()=>{
        if(this.props.obj.completed){
            return(<p>completed</p>)
        }else{
            return(<p>Not Completed</p>)
        }
    }
    render(){
        
        return(
            <div onClick={() => this.props.toggleCompleted(this.props.obj.id)}>
                <h1>{this.props.obj.name}</h1>
                {this.addComplete()}
            </div>
        )
    }

}

export default Todo;