import { useState } from 'react'
import { TodoForm } from '../todoform/TodoForm'
import { TodoItems } from '../todoitems/TodoItems'

import './TodoWrapper.css'

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                task: todo
            }
        ])
        console.log(todos)
    }
    const deleteTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

  return (
    <main className="todoWrapper">
        <section className="todoFrame">
            <h1>ToDo List</h1>
            <TodoForm addTodo={addTodo}/>
            <section className="todoItemsBox">
                {
                    todos.map((todoTask, index) =>(
                        <TodoItems 
                            todoTask={todoTask} 
                            key= {index} 
                            deleteTask={deleteTask}
                        />
                    
                        ))
                }
            </section>
        </section>
    </main>


  )
}
