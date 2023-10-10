import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {

const [tasks, updateTasks] = useState(TASKS)
const [selectedCategory, updateCategory] = useState('All')
console.log(selectedCategory)

function onTaskFormSubmit (event, addedTask, newTaskCat) {
  event.preventDefault()
  const newTask = {
    text: addedTask,
    category: newTaskCat
  }
  updateTasks([...tasks, newTask])
}

const newTasks = tasks.filter(task=> {
  if (selectedCategory === 'All') {
    return task
  }
  else {
  return task.category === selectedCategory
  } 
})


  
function onDeleteTask (taskToRemove) {
  console.log(taskToRemove)
  updateTasks(
    tasks.filter(task=> task.text !== taskToRemove) 
  )
}

 return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} updateCategory={updateCategory} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList categories={CATEGORIES} tasks={newTasks} onDeleteTask={onDeleteTask}  />
    </div>
  );
}

export default App;
