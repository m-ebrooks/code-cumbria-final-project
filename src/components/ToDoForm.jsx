import React, {useState} from 'react'

export const ToDoForm = ({addTodo}) => {

    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
    
        addTodo(value);

        setValue("")
}

  return (
    <div className="container mx-auto flex justify-center bg-blue-300 p-5 gap-3 dark:bg-black dark:text-stone-50">
        <form  onSubmit={handleSubmit}>
            <input type='text' className="border rounded-md mx-20 px-5" value={value} placeholder='What is the task?' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded-full">Add Task</button>
        </form>
    </div>
  )
}
