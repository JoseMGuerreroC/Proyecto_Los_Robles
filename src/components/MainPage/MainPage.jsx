import './MainPage.css'
import { useContext, } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { Link } from "react-router";
import useAuthRedirect from '../UserContext/UseAuthRedirect';

function MainPage() {
    useAuthRedirect();
    const { isAdmin } = useContext(UserContext);
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
                        <Link to={''}><i className="fa-solid fa-user"></i></Link>
                    </div>
                </div>
            </header>
            <main className="mainMenu container-fluid">
                <div className="row justify-content-center h-100">
                    <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                        <Link to={'/payments'} className="menuOption">
                            {(isAdmin) ?
                                <></>
                                :
                                <><div className="numberOf">3</div></>
                            }
                            <i className="fa-solid fa-file"></i>
                            <p>Administrar pagos</p>
                        </Link>
                    </div>
                    <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                        <Link to={'/notifications'} className="menuOption">
                            {(isAdmin) ?
                                <></>
                                :
                                <><div className="numberOf">1</div></>
                            }
                            <i className="fa-solid fa-bell"></i>
                            <p>{(isAdmin) ? 'Administrar avisos' : 'Centro de notificaciones'}</p>
                        </Link>
                    </div>
                    <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                        <Link to={'/forum'} className="menuOption">
                            <i className="fa-solid fa-message"></i>
                            <p>Foros</p>
                        </Link>
                    </div>
                </div>
            </main>
            {(isAdmin) ?
                <></>
                :
                <footer className="mainFooter">
                    <Link to={'/about-los-robles'}>Más información sobre Los Robles</Link>
                </footer>
            }
        </>
    )
}

export default MainPage;