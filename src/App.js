import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4';

const LOCAL_STORAGE_KEY = 'taskApp.tasks'

function App() {
  const [tasks, setTasks] = useState([]);

  // get access to user input in text field
  const taskNameRef = useRef();

  // load tasks in local storage to they persist on page reload
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if there are tasks in storedTasks then load tasks with setTasks
    if (storedTasks) setTasks(storedTasks)
  }, []);

  // save tasks to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks]);


  // toggle check box so that it will toggle the checkbox from incomplete to complete and visa versa
  function toggleCheckBox(id) {
    // get new list of tasks and equal it to a copy of our current task list, so we don't change our current task list
    // in React, we never want to directly modify a state variable, isntead, we want to create a copy and use that copy to create a new state
    const newTasks = [...tasks];
    const task = newTasks.find(task => task.id === id);
    task.complete = !task.complete;
    setTasks(newTasks);
  };

  function handleAddTask(e) {
    // set our tasks to one more task aka take previous tasks and add new task and set tasks to new list
    const name = taskNameRef.current.value;
    if (name === '') return
    // setTasks with a function call that will take the previous tasks and allow us to add a new task
    setTasks(prevTasks => {
      return [...prevTasks, { id: uuidv4(), name: name, complete: false}]
    });
    // clears input after we clickc add task button
    taskNameRef.current.value = null;
  };

  // clear task list
  function handleClearTasks() {
    // newTasks is the current task list but filtered for non-completed tasks
    const newTasks = tasks.filter(task => !task.complete);
    // set state to newTasks
    setTasks(newTasks);
  };

  return (
    <>
      <TodoList tasks={tasks} toggleCheckBox={toggleCheckBox} />
      <input ref={taskNameRef} type="text" />
      <button onClick={handleAddTask}>Add task</button>
      <button onClilck={handleClearTasks}>Clear list</button>
      <div>{tasks.filter(task => !task.complete).length} left to do</div>
    </>  
  );
};

export default App;
