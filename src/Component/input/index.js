import React from "react";
import './index.css'


const Input = (props) => {
    const {todoInput,changeText,addTaskHandler} = props;
    
    const enterTodoButton=({keyCode})=>{
        if(keyCode===13){
            addTaskHandler();
        }
    }
    
    return(
        <div className="text">
            <input className="inputBox" placeholder="Enter your task" value={todoInput} onChange={changeText} onKeyDown={enterTodoButton}></input>
            <button className="btn" onClick={addTaskHandler}>Add</button>
        </div>
    )
}

export default Input;