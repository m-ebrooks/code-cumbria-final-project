import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='container mx-auto columns-2 flex justify-center bg-blue-300  dark:bg-black dark:text-stone-50 p-5 gap-5'>
         <p onClick={() => toggleComplete(task.id)}
          className="border rounded-md mx-10 px-10 text-lg bg-blue-200" >{task.task}</p> 
        <div> 
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon  icon={faTrash} onClick={() =>{deleteTodo(task.id)}}/>

        </div>
    </div>
  )
}


