import { Link } from "react-router-dom";

function HomeHooks() {
    return (
        <div className="flex justify-center items-center min-h-screen flex-col gap-10">
            <h1 className="style_text font-bold text-xl flex items-center justify-center">HOMEHOOKS</h1>
            <Link className="border border-gray-500 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" to='/usenavigate'>
                Ir a UseNavigate
            </Link>
        </div>
    )
}
export default HomeHooks;