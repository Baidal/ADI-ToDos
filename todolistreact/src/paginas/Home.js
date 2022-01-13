import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

import ToDoCard from "../componentes/ToDoCard";
function Home() {
  const [nextId, setNextId] = useState(1)
  const [todos, setTodos] = useState([])
  const [newToDoText, setNewToDoText] = useState("")

  useEffect(() => {
    setTodos([{text: "Mi primer ToDo!", id: 0}])
  }, [])
  
  function añadirToDo(){
    if(newToDoText === "")
      return

    setTodos((current) => current.concat({text: newToDoText, id: nextId}))
    setNextId(nextId + 1)

    setNewToDoText("")
  }

  function deleteChild(id){
    setTodos(current => current = current.filter(child => child.id !== id))
  }

  return (
    <div className="flex flex-col w-full items-center justify-center mt-8 space-y-2">
      <h1 className="text-white text-4xl">Listado de ToDos</h1>
      <div className="flex space-x-3 justify-center">
        <input type="text" value={newToDoText} onChange={(e) => {setNewToDoText(e.target.value)}} className="bg-gray-600 border border-emerald-600 rounded-md text-emerald-400 text-center"/>
        <button className="px-2 py-1 bg-emerald-600 rounded-full text-white text-sm" onClick={añadirToDo}>Añadir</button>
      </div>
      <div className="flex flex-col space-y-2 w-1/2 border border-emerald-600 p-4 rounded-md">
        {todos.map((todo) => (
          <ToDoCard text={todo.text} key={todo.id} onClick={deleteChild} id={todo.id}/>
        ))}
      </div>
      <Link to="/about" className="px-4 py-2 bg-teal-700 rounded-full text-white text-md">About</Link>
    </div>
  );
}

export default Home;
