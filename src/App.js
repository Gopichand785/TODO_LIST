import React,{useState,useEffect}from 'react'
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Todolist from './components/Todolist';
 const App=()=> {
  const initialState=JSON.parse(localStorage.getItem("todo")) || []   //now we are going  to the localstorage the data
  const [input,setInuput]=useState(""); //we need inserting the values
  const [todo,setTodo]=useState(initialState)//we need also keep tracking all the todo list but acting the valuse using an array
 const [editTodo,seteditTodo]=useState(null)

  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todo)) // calling the diaplay the local storage
  },[todo])
  return (
    <div className='container'>
       <div className='app-wrapper'>
            <div>
                <Header/>
            </div>
            <div>
            <Form
              input={input}          /* pasing as a data in props as a form.js all usestate values                          */
              setInuput={setInuput}
              todo={todo}
              setTodo={setTodo}
              editTodo={editTodo}
              seteditTodo={seteditTodo}
            />
            </div>
            <div>
              <Todolist todo={todo} setTodo={setTodo} seteditTodo={seteditTodo}/> 
            </div>
       </div>

    </div>
  )
}
export default App
