import Link from "next/link";
import { useState } from "react";

function ToDoCard(props){
    const [tachado, setTachado] = useState(false)
    
    function toggleTachado(){
        setTachado(!tachado)
    }

    return (
        <div className="flex flex-col justify-center items-center p-2 border border-gray-500 rounded-md space-y-2 shadow-xl">
            <p className={`text-white cursor-pointer z-10 w-full text-center ${tachado ? "line-through" : ""}`} onClick={toggleTachado}>{props.text}</p>
            { props.showDltButton ? 
                (<>
                    <button className="px-2 py-1 bg-red-800 rounded-full text-white text-xs z-10" onClick={props.onClick.bind(null, props.id)}>Eliminar</button>
                    <Link href={`/todo/${props.id}`}> 
                        <button className="px-2 py-1 bg-emerald-700 rounded-full text-white text-xs z-10">Ver en detalle</button>
                    </Link>
                    </>
                )
                
                :
                ""
            
            }
            
        </div>
    );
}

export default ToDoCard;
