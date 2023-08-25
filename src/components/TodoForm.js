import React,{useState} from 'react'



const TodoForm = ({ addTodo}) => {
    const [value, setvalue] = useState("");
    const handleSubmit = e => {
      e.preventDefault();
      if (!isNaN(value)){
        alert('its i not number')
      }else { 
        addTodo(value);
        setvalue("")};
   
    }


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value={value} className='todo-input' placeholder='What is the task today?' onChange={(e) => setvalue(e.target.value)} required/>
        <button type="submit" className ="todo-btn">Add Task</button>
    </form>
  )
}

export default TodoForm