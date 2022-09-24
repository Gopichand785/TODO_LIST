import React ,{useEffect}from 'react'
import {v4 as uuidv4} from 'uuid'  //unique id for each todo list item in the array fpr that we will use uuid
const Form = ({input,setInuput,todo,setTodo,editTodo,seteditTodo}) => {  // passing as parameters

const updateTodo=(title,id,completed)=>{  //upadting the data edit in map method as ternary condition
    const newTodo=todo.map((todos)=>
       todos.id === id ?{title,id,completed}:todos
    )
    setTodo(newTodo) // calling to the list
    seteditTodo("")
}

useEffect(()=>{
  if(editTodo){
    setInuput(editTodo.title)
  }else{                            // display the ui data
    setInuput("")
  }
},[setInuput,editTodo]);

  const onInputchange=(event)=>{
    setInuput(event.target.value)
  };//this handler is triggaring the data

  const onFormSubmit=(e)=>{
    e.preventDefault()
    if(!editTodo ){     //not equal the list  remove that
    setTodo([...todo,{id:uuidv4(),title:input,completed:false}])
    setInuput("") //edit data storing
    } else 
    updateTodo(input,editTodo.id,editTodo.completed) 
  }
  return (
    <form onSubmit={onFormSubmit}>
        <input type='text' 
        placeholder='Enter a Todo....' 
        className='task-input' 
        value={input} 
        required  //passing as in-biult validations
        onChange={onInputchange}
        />
      <button className='button-add'>
        {editTodo? "OK":"Add"} {/* passing the condition  */}
      </button>

    </form>
  )
}

export default Form