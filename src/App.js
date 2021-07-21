import React, { useState, useRef } from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4'

function App() {
  const [tasks, setTasks] = useState([])

  // get access to user input in text field
  const taskNameRef = useRef()

  function handleAddTask(e) {
    // set our tasks to one more task aka take previous tasks and add new task and set tasks to new list
    const name = taskNameRef.current.value
    if (name === '') return
    // setTasks with a function call that will take the previous tasks and allow us to add a new task
    setTasks(prevTasks => {
      return [...prevTasks, { id: uuidv4, name: name, complete: false}]
    })
    // clears input after we clickc add task button
    taskNameRef.current.value = null
  }

  return (
    <>
      <TodoList tasks={tasks} />
      <input ref={taskNameRef} type="text" />
      <button onClick={handleAddTask}>Add task</button>
      <button>Clear list</button>
      <div> 0 left to do</div>
    </>  
  )
}

export default App;
