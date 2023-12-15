import React, {useState} from "react";
import { Form } from "react-router-dom";

export const EditToDoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("")
  };

  return (
    <Form
      className="container mx-auto columns-2 flex justify-center bg-blue-300  dark:bg-black dark:text-stone-50 p-5 gap-5"
      onsubmit={handleSubmit}
    >
      <input
        type="text"
        className="border rounded-md mx-20 px-5"
        value={value}
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type='submit'
        className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded-full">Update task </button>
    </Form>
  )
};
