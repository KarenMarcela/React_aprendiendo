import {useState} from "react";
import { Link } from "react-router-dom";

function HookUseState(){
    const [count, setcount] = useState(0);

    function aumentar(){
        setcount(count + 1);
    }
    function disminuir(){
        setcount(count - 1);
    }

    return(
        <div className="flex justify-center items-center min-h-screen flex-col gap-4">
            <h1 className="style_text font-bold text-xl">HookUseState</h1>
            <h1 className="style_text font-bold text-xl">Contador = {count}</h1> 
            <div className="flex gap-4">
                <button onClick={aumentar} className="border-2 border-blue-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">AUMENTAR</button>
                <button onClick={disminuir} className="border border-gray-500 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">DISMINUIR</button>
                
                <Link to="/" className="border border-gray-500 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ir a home</Link>
            </div>
            
           
        </div>
    )
}
export default HookUseState;