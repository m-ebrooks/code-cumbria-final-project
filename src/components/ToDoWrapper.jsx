import React, {useState} from 'react'
import { ToDoForm } from './ToDoForm'
import {v4 as uuidv4 } from 'uuid';
import { ToDo } from './ToDo';
import { EditToDoForm } from './EditToDoForm';
uuidv4();

export const ToDoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        // spread operator, makes copy
        setTodos([...todos, {id: uuidv4(), task: todo, complete: false, isEditing: false}])
    }


      const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ... todo, completed: !todo.completed} : todo))
      }

      const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
      }

      const editTodo = id => {
        setTodos(todos.map(todo => todo.id ===  id ? {... todo, isEditing: !todo.isEditing} : todo))
      }

      const editTask = (task, id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
      }


  return (
    <div className="flex flex-col justify-center bg-blue-300  dark:bg-black dark:text-stone-50 p-5 gap-4">
        <h1 className='flex justify-center text-xl font-bold underline underline-offset-2 '>To do list</h1>
        <ToDoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
          todo.isEditing ? (
            <EditToDoForm  editTodo={editTask} task={todo}/>
          ) : (<ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo = {deleteTodo} editTodo={editTodo}/>)
            
        ))}
        

    </div>
  )
}
