import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

import ToDoCard from "../../components/ToDoCard";

export default function FirstPost() {
    const router = useRouter()
    const {id} = router.query
    
    const [todo, setTodo] = useState({})
    const [error, setError] = useState(false)

    useEffect(() => {
        if(id){
            axios.get(`http://localhost:3000/api/todos/${id}`).then(res => {
                setError(false)
                setTodo(res.data)
            }).catch(_ => {
                setError(true)
            })
        }
        
    }, [id])
    
    return (
        <>
            {
                error ? 
                    (   <div className="text-center text-white text-3xl">
                            <h1>No existe el todo con id {id}</h1>
                        </div>
                    ) 
                    : 
                    (
                        <div className="w-1/2 mx-auto mt-4">
                            <ToDoCard text={todo.text} onClick={_ => 3 == 3} showDltButton={false}></ToDoCard>
                        </div>
                    )
            }
        </>
    )
}