import './TodoItems.css'

export const TodoItems = ({taskList, deleteTask}) => {
  return (
    <section className="task">
        <p>{taskList.task}</p>
        <section>
            <span>✏️</span>
            <span onClick={() =>deleteTask(taskList.id)}>🚮</span>

        </section>
    </section>
  )
}
