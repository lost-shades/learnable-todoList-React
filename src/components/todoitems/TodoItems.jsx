import { useState } from 'react'
import './TodoItems.css'

const [editing, setEditing] = useState(taskList)

export const TodoItems = ({taskList, deleteTask}) => {

  return (
    <section className="task">
        {!editing && <p>{taskList.task}</p>}
        {editing && <input type="text" value={taskList.task}/>}
        <section>
            <span onClick={() => setEditing(prevVal => !prevVal)}>✏️</span>
            <span onClick={() =>deleteTask(taskList.id)}>🚮</span>

        </section>
    </section>
  )
}
