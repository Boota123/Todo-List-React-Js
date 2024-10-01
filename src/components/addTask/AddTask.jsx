import React, {useState} from 'react'
import "./AddTask.css"


const AddTask = ({taskList, setTaskList}) => {
    const[val, setVal]= useState('')
    const changeHandler=(e)=>{
        setVal(e.target.value)
        // console.log(val)
        
    }

  const addTask=()=>{
    if (!val) {
      console.log("it is called");
      alert("please add the task");
    } else {
      const list = [...taskList, val];
      // console.log(list)
      setTaskList(list);
      // console.log(taskList)
    }
  }

  return (
    <div className='container'>
        <input type='text' className='inputField' placeholder='Enter your task' onChange={changeHandler}>
        </input>
        <button className='btn' onClick={addTask}>ADD</button>
    </div>
  )
}

export default AddTask
