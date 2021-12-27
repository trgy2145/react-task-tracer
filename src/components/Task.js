import React from 'react'
import { BsFillTrashFill } from "react-icons/bs";

const Task = ({task,deleteTask, toggleDone}) => {
    return (
      <div className={`task ${task.isDone ? "done": ""} `} onDoubleClick={()=> toggleDone(task.id)}>
        <h3>
          {task.text}
          <BsFillTrashFill
            style={{ color: "red", fontSize:30}}
            onClick={() => deleteTask(task.id)}
          />
        </h3>
        <p>{task.day}</p>
      </div>
    );
}

export default Task
