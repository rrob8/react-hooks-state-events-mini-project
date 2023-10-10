import React from "react";
import Task from "./Task"



function TaskList({tasks, categories, onDeleteTask}) {
  return (
    <div className="tasks">
    {tasks.map((task)=> (
      <Task key={task.text} task={task.text} category={task.category} onDeleteTask={onDeleteTask} />
))}
    </div>
  );
}

export default TaskList;
