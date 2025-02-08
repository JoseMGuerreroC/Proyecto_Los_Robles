import './Nav.css';
import { Link } from "react-router";

function Nav({ title }) {
    return (
        <>
            <header className="navMenu container-fluid">
                <div className="row">
                    <div className="navMenuBack col-4 d-flex align-items-end">
                        <Link className='linkBack' to={'/main'}><i class="fa-solid fa-arrow-left"></i> Regresar</Link>
                        <img src="/LosRoblesLogo.png" alt="Logo del residencial con la leyenda 'Los Robles', abajo de un árbol" />
                    </div>
                    <div className="col-4 text-center d-flex justify-content-center align-items-center">
                        <h1>{title}</h1>
                    </div>
                    <div className="col-4 text-end d-flex justify-content-end align-items-center">
                        <Link to={''}><i className="fa-solid fa-user"></i></Link>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Nav;