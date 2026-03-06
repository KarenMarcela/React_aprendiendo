import {useState} from "react";

function HookUseState(){
    const [count, setcount] = useState(0);

    function aumentar(){
        setcount(count + 1);
    }
    function disminuir(){
        setcount(count - 1);
    }

    return(
        <div>
            <h1>HookUseState</h1>
            <h1>Contador = {count}</h1> 
            <button onClick={aumentar}>AUMENTAR</button>
            <button onClick={disminuir}>DISMINUIR</button>
            
           
           
        </div>
    )
}
export default HookUseState;