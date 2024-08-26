import { useState , useRef } from "react"

const App = () => {
  const [todo , setTodo] = useState([]);
  const todoVal = useRef()

  const addTodo = (event)=>{
    event.preventDefault();
    todo.push(todoVal.current.value)
    setTodo([...todo]);
    console.log(todo);

    todoVal.current.value = ""
    
  }

  const deleteTodo = (index)=>{
    console.log("todo deleted" , index);
    todo.splice(index , 1);
    setTodo([...todo]);
    
  }
  const editTodo = (index)=>{
    console.log("todo edited" , index);
    const editedVal = prompt("enter value");
    todo.splice(index , 1 , editedVal);
    setTodo([...todo]);
    
  }
  return (
    <>
    <div ><h1 className="fw-bold">Todo-App</h1></div>
    <form onSubmit={addTodo}>
      <input type="text" placeholder="enter todo" ref={todoVal} />
      <button className="btn btn-primary" type="submit">click</button>
    </form>
    <ul>
      {todo.map((item , index)=>{
        return <div key={index}>
          <li >{item}</li>
          <button className="btn btn-danger" onClick={()=> deleteTodo(index)}>delete</button>
          <button className="btn btn-warning" onClick={()=> editTodo(index) }>edit</button>
        </div>
      })}
    </ul>
    
    </>
  )
}

export default App


