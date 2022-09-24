//it is responsive to the todolist 
import React from 'react'

const Todolist = ({todo,setTodo,seteditTodo}) => {

    const handlecomplete=(todo)=>{
            setTodo(                        
                    todo.map((item)=>{
                    if(item.id === todo.id){         /* iam using this handler is fuction strictly checking the item passing the completed */
                        return{...item, completed:!item.completed}  
                    }
                    return item
                })
            )
    }

    const handleEdit=({id})=>{    // passing id object checking the data and editing the data App(components)
       const findTodo=todo.find((todo)=>todo.id === id)
       seteditTodo(findTodo)
    }

    const deletehandler=({id})=>{
        setTodo(todo.filter((todo)=> todo.id !==id)) /* function incase id!==id  delete the value */
    }
  return (
    <div>
    {todo.map((todo)=>(      //now will map thorw each list item                        
    <li className='list-item' //and will diplay each item
        key={todo.id}>
        <input type='text' 
        value={todo.title} 
        className={`list ${todo.completed ? "complete" : ""}`}   // complete button condition
        onChange={(event)=>event.preventDefault()}/>            
      <div>
        {/* iam taking the three buttons  */}
      <button className='button-complete task-button' onClick={()=>handlecomplete(todo)}> 
            <i className='fa fa-check-circle'></i>
        </button>
        <button className='button-edit task-button' onClick={()=>handleEdit(todo)}>
            {/* <i className='fa fa-edit'></i> */}
        </button>
        <button className='button-delete task-button' onClick={()=>deletehandler(todo)}>
            <i className='fa fa-trash'></i>
        </button>
      </div>
    </li>
    )
    )}
    </div>
  )
}

export default Todolist