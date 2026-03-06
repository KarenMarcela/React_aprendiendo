import {Link} from "react-router-dom"

function Saludar(){
    return(
        <div className="flex justify-center items-center min-h-screen flex-col gap-4">
            <h2 className="style_text font-bold text-xl flex items-center justify-center">Bienvenido a la app</h2>
            
                <Link to="/" className="border border-gray-500 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ir a home</Link>
        </div>
    )
}
 export default Saludar