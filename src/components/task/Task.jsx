import React,{useState} from "react";
import "./Task.css";

const Task = ({ taskList, item, delTask }) => {
  const[val, setVal]= useState(false)
  const togle=()=>{
    setVal(!val)
  }
  return (
    <div className="main">
      <div className="taskContainer">
        <div className="textArea">{taskList}</div>
      </div>
      <button className={`${val==true? "active": " "} btnDone btn`} onClick={togle}>Done</button>
      <button className="btn btnDel" onClick={() => {
          return setVal(false), delTask(item);
        }}>Delete</button>
    </div>
  );
};

export default Task;
