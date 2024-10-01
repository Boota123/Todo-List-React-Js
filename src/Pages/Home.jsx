import React, {useState} from 'react'
import AddTask from '../components/addTask/addTask'
import TaskList from '../components/taskList/TaskList'

const Home = () => {
    const[taskList, setTaskList] = useState([])
    // console.log(taskList)
  return (
    <div>
        <AddTask setTaskList={setTaskList} taskList={taskList}/>
        <TaskList setTaskList={setTaskList} taskList={taskList}/>
    </div>
  )
}

export default Home