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

            <Link to='/'>
                IR A HOME
            </Link>
            <br />
            <Link to='/saludar'>
                IR A SALUDAR
            </Link>
            <br />
            <Link to='/usestate'>
                IR A USESTATE
            </Link>
            

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