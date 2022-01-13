import { useState } from "react";

function ToDoCard(props){
    const [tachado, setTachado] = useState(false)
    
    function toggleTachado(){
        setTachado(!tachado)
    }

    return (
        <div className="flex flex-col justify-center items-center p-2 border border-gray-500 rounded-md space-y-2 shadow-xl">
            <p className={`text-white cursor-pointer ${tachado ? "line-through" : ""}`} onClick={toggleTachado}>{props.text}</p>
            <button className="px-2 py-1 bg-red-800 rounded-full text-white text-xs" onClick={props.onClick.bind(null, props.id)}>Eliminar</button>
        </div>
    );
}

export default ToDoCard;
