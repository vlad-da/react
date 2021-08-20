import React from 'react'
import './ToDoItem.css'
const ToDoItem = props => {
    const resolvedClass = {
        textDecoration : 'line-through'
    }
    return (
        <div className="todo-item">
            <div className="description-wrapper">
                <p style={props.completed == true ? resolvedClass : {}}>
                {props.description}
                </p>
            </div>
            <div className="description-wrapper">
                <input 
                type="checkbox"  
                defaultChecked={props.completed}
                onChange={props.handleChnge}
                
                />
            </div>
        </div>
    )
}


export default ToDoItem;