import { useNavigate, Link } from "react-router-dom";

function HookUseNavigate() {
    const navigate = useNavigate();

    return (
        <div className="flex-gap-8">
            {/* <h1>HookUseNavigate</h1>
            <p>Las tres formas de navegar en React Router</p>
            
            <h2>1. useNavigate (Hook)</h2>
            <button onClick={() => navigate('/')}>
                IR A HOME
            </button>
            <button onClick={() => navigate('/saludar')}>
                IR A SALUDAR
            </button>
            <button onClick={() => navigate('/usestate')}>
                IR A USESTATE
            </button>
            <button onClick={() => navigate(-1)}>
                VOLVER ATRÁS
            </button> */}

            <div className="flex flex-col justify-center items-center gap-2 min-h-screen">
                <Link className="style_text font-bold text-xl border-2 border-amber-200 rounded-lg w-40 h-15 flex items-center justify-center bg-amber-200 hover:bg-amber-300" to='/'>
                IR A HOME
                </Link>
                <br />
                <Link className="style_text font-bold text-xl border-2 border-amber-200 rounded-lg w-40 h-15 flex items-center justify-center bg-amber-200 hover:bg-amber-300" to='/saludar'>
                    IR A SALUDAR
                </Link>
                <br />
                <Link className="style_text font-bold text-xl border-2 border-amber-200 rounded-lg w-40 h-15 flex items-center justify-center bg-amber-200 hover:bg-amber-300" to='/usestate'>
                    IR A USESTATE
                </Link>
            </div>
            

            {/* <h2>3. Navegación Nativa (HTML)</h2>
            <a href="/">
                IR A HOME
            </a>
            <a href="/saludar">
                IR A SALUDAR
            </a>
            <a href="/usestate">
                IR A USESTATE
            </a> */}
        </div>
    )
}

export default HookUseNavigate;