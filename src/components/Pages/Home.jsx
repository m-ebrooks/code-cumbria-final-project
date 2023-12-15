import React from 'react'

export default function Home() {
  return (
    <div className='w-screen h-screen flex items-center flex-col  bg-blue-300  dark:bg-black dark:text-stone-50 p-5 gap-5'>
      <h1 className='text-xl font-bold underline underline-offset-2'> Code Cumbria Final Project</h1>
      <p className='text-center flex justify-center'> This is my final project for Code Cumbria which involved a 12 week intensive bootcamp where we learned the following technical skills</p>
      <ul className='list-disc'>
        <li> HTML 
        <li> CSS  </li>
        <li> Javascript  </li>
        <li> React </li>
        <li> blah blah blah  </li>
        </li>
      </ul>
    </div>
  )
}
// 
//className='grid justify-items-left p-10