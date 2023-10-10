import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {


  const [newTask , setNewTask] = useState('')
  const [newTaskCat, setNewTaskCat] = useState('Code')

  function handleNewTask (event) {
    
    setNewTask(event.target.value)
    
  }

  

  function handleNewCat (event) {
    setNewTaskCat(event.target.value)
  }
  
  const namedCategories = categories.filter((category)=> {
    return category !== 'All'
  })

  return (
    <form className="new-task-form"
          onSubmit={(event)=> onTaskFormSubmit(event, newTask, newTaskCat)}
    >
      <label>
        Details
        <input type="text" name="text"
        value={newTask}
        onChange={handleNewTask}
        />
      </label>
      <label>
        Category
        <select name="category"
        onChange={handleNewCat}
        value={newTaskCat}
        >
        {namedCategories.map(category=>
          <option key={category}>
            {category}
          </option>
          )}
        </select>        
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
