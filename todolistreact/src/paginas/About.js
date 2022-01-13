import {Link} from 'react-router-dom'

function About(){
    return (
        <div className="w-1/2 mx-auto text-center justify-center items-center flex flex-col">
            <h1 className="text-white text-2xl mt-4 ">Página creada por Luis Vidal Rico para la asignatura Aplicaciones Distribuidas en Internet en el curso 2021-2022</h1>
            <Link to="/" className="px-4 py-2 bg-teal-700 rounded-full text-white text-md mt-4 w-1/6 ">ToDos</Link>

            
        </div>
    )
}
export default About;