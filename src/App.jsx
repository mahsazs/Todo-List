import React from 'react'
import { useState } from 'react'

function TodoList () {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    function handleChange(e){
        setInputValue(e.target.value)
    }

    function handleSubmit(){
        setTodos([...todos, inputValue])
        setInputValue('')
    }

    function handleDelete(index){
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    function handleEdit(index) {
        const newTodos = [...todos]
        newTodos.splice(index, 1,prompt("enter new value"))
        setTodos(newTodos)
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h1 className=" bg-slate-700 text-white text-center w-3/4 lg:w-1/4 md:w-2/4 sm:w-3/4 rounded-lg h-7 mb-px">Todo List</h1>
            <div className='w-3/4 lg:w-1/4 md:w-2/4 sm:w-3/4 h-12  bg-slate-500 flex justify-center items-center rounded-xl mb-1'>
            <input className='text-center bg-slate-300  w-4/5 h-11 rounded-xl mx-0.5' type='text' value={inputValue} onChange={handleChange}/>
            <button className='w-1/5 bg-slate-200 rounded-md h-10 mr-0.5 text-[12px]' onClick={handleSubmit}>Add Todo</button>
            </div>
               
            <ul className='w-full flex flex-col justify-center items-center'>
                {todos.map((todo, index) => (
                    <li value={index} className='flex justify-between bg-slate-100 w-3/4 lg:w-1/4 md:w-2/4 sm:w-3/4 rounded-xl my-0.5 '>
                        <div className='p-px m-px sm:px-2 sm:py-2 mx-1 my-1 text-center'>
                            <input type="checkbox" id="" name="" value=""  className='w-4 h-4 mr-1 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                            {todo}
                            </div>
                        <div>
                            <button className='p-px m-px sm:p-2 sm:m-1 bg-slate-200 w-10 sm:w-16 rounded-md' onClick={() =>handleEdit(index)}>Edit</button>
                            <button className='p-px m-px sm:p-2 sm:m-1 bg-slate-200 w-12 sm:w-16 rounded-md' onClick={() =>handleDelete(index)}>Delete</button>
                         </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;