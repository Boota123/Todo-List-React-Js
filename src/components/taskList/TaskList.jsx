import React from 'react'
import Task from '../task/Task'

const TaskList = ({taskList, setTaskList}) => {

  const delTask=(item)=>{
    // console.log("function is called")
    const arr=[...taskList]
    arr.splice(item, 1)
    setTaskList(arr)
  }

  return (

    <>
      {taskList.map((element, index)=>(
       
        <Task taskList={element} item={index} delTask={(item)=>delTask(item)} />
      )
        
      )}
      
    </>
  )
}

export default TaskList