import React, { useState } from 'react'

function Todolist() {
    const [texts, setTexts] = useState("")
    const [todos, setTodos] = useState([])
    const [isChecked, setIsChecked] = useState(false)

    const addTask = () => {
        setTodos([...todos, texts])
        setTexts('')
      }

    const deleteTask = (index) => {
      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos);
    }

  return (
    <div>
      <div className='body'>
      <h2 className='todo'>My React Todo List</h2>
      <div className='todo-body'>
        <div className='time'>
      <h3 className='date'>Friday, 16th</h3>
      <h5 className='month'>February</h5>
      <form onSubmit={(e) => e.preventDefault()}>
      <input type='text' value={texts} onChange={(e) => setTexts(e.target.value)}/>
      <button className='add-button' onClick={addTask}>Add Task</button>
      </form>
      </div>
      <ul style={{listStyle:"none"}}>
        {todos.map((todo, index) => (
            <li key={index} className='list-item'>
              <div 
              style={{display: 'flex', alignItems:'center', justifyContent:"space-between"}}>
              <input type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)}
              style={{marginRight: "-150px",}} />
              <span style={{textDecoration: isChecked ? "line-through" : "none"}}>{todo}</span>
              <h6>11:02am</h6>
              <button 
              style={{}} 
              onClick={deleteTask}>delete</button>
              </div>
            </li>
        ))}
      </ul>
      </div>
    </div>
    </div>
  )
}

export default Todolist
