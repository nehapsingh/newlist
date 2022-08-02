import React from "react";

const ToDolist = (props) => {



return(
    <>
   <div className="todo-style">
   <button className="btn-style" 
   onClick={() => {
    props.onSelect(props.id);
    }}>X</button>
    <li>{props.text}</li>
      </div>
      </>
)
}

export default ToDolist;