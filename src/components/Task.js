import React from "react";

function Task({task, category, onDeleteTask}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete"
      onClick={()=>onDeleteTask(task)}
      >X</button>
    </div>
  );
}

export default Task;
