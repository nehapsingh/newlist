
import React, { useState } from "react";
import ToDolist from "./ToDolist";

const App = () => {

const[inputList, setInputList] = useState("");
const[items, setItems] = useState([]);

const itemEvent = (event) => {
  setInputList(event.target.value);
} ;

const listOfItems = () => {
setItems ((oldItem) => {
return [...oldItem, inputList];
})
setInputList('');
};

const deleteItem = (id) => {
  setItems((oldItem)=> {
    return oldItem.filter((arrEle, index)=>{
      return index !== id;
    })
  })

}

  return(
  <>
     <div className="main-div">
            <div className="center-div">
<br/>
<h1> ToDolist </h1>
<br/>
<input type="text" placeholder="add items" 
value={inputList}
onChange={itemEvent}/>
<button className="btn" onClick={listOfItems}> Add </button>
<ol>
 { items.map( (itemValue, index) => {
    return <ToDolist 
    key={index} 
    id={index} 
    text={itemValue}
    onSelect={deleteItem}
    />;
  })}

</ol>
            </div>
        </div>
    </>
 
  )
}

export default App;
