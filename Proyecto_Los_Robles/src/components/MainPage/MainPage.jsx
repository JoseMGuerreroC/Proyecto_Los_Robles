import './MainPage.css'
import { useContext, useEffect } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { Link, useNavigate } from "react-router";

function MainPage() {
    const { isAdmin, isLogged } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLogged) {
            navigate('/login');
        }
    }, [])

    return (
        <>
            <header className="mainHeader container-fluid">
                <div className="row">
                    <div className="col-4 d-flex align-items-center">
                        <img src="/LosRoblesLogo.png" alt="Logo del residencial con la leyenda 'Los Robles', abajo de un árbol" />
                    </div>
                    <div className="col-4 text-center d-flex justify-content-center align-items-center">
                        <h1>Menú principal{(isAdmin) ? ' - Perfil Administrador' : ''}</h1>
                    </div>
                    <div className="col-4 text-end d-flex justify-content-end align-items-center">
                        <Link to={''}><i class="fa-solid fa-user"></i></Link>
                    </div>
                </div>
            </header>
            <main className="mainMenu container-fluid">
                <div className="row justify-content-center h-100">
                    <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                        <div className="menuOption">
                            <i className="fa-solid fa-file"></i>
                            <p>Administrar pagos</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                        <div className="menuOption">
                            <i className="fa-solid fa-bell"></i>
                            <p>Centro de notificaciones</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                        <div className="menuOption">
                            <i className="fa-solid fa-message"></i>
                            <p>Foro</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="mainFooter">
                <Link to={''}>Descubre más acerca de "Los Robles"</Link>
            </footer>
        </>
    )
}

export default MainPage;