import React,{useState} from 'react'



const EditTodoForm = ({ editTodo, task}) => {
    const [value, setvalue] = useState(task.task);
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setvalue("")
    }


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value={value} className='todo-input' placeholder='Update Task' onChange={(e) => setvalue(e.target.value)} required/>
        <button type="submit" className ="todo-btn">Update Task</button>
    </form>
  )
}
 
export default EditTodoForm