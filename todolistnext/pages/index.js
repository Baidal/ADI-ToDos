import axios from "axios";
import { useEffect, useState } from "react";
import ToDoCard from "../components/ToDoCard";
import Link from 'next/link'

function Home() {
  const [todos, setTodos] = useState([])
  const [newToDoText, setNewToDoText] = useState("")

  useEffect(async () => {
    const todos = await axios.get("http://localhost:3000/api/todos")
    setTodos(todos.data)
  }, [])
  
  async function añadirToDo(){
    if(newToDoText === "")
      return

    const newTodo = await axios.post("http://localhost:3000/api/todos", {
      text: newToDoText
    })

    setTodos((current) => current.concat(newTodo.data))

    setNewToDoText("")
  }

  async function deleteChild(id){
    await axios.delete("http://localhost:3000/api/todos/" + id)
    
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
          <ToDoCard text={todo.text} key={todo.id} onClick={deleteChild} id={todo.id} showDltButton={true}/>
        ))}
      </div>
    </div>
  );
}

export default Home;
