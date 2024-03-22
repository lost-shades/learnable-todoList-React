import React, { useState } from 'react';
import './TodoItems.css'

export const TodoItems = ({todoTask, deleteTask}) => {
  // const [editing, setEditing] = useState(todoTask)

  return (
    <section className='task'>
        <p>{todoTask.task}</p>
        {/* {!editing && <p>{todoTask.task}</p>}
        {editing && <input type="text" value={todoTask.task}/>} */}
        <section>
            <span>✏️</span>
            <span onClick={() =>deleteTask(todoTask.id)}>🚮</span>
        </section>

    </section>
  )
}
