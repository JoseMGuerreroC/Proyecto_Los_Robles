import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './UserPayments.css';

function UserPayments() {
    return (
        <>
            <Nav title={"Administrar pagos usuario XXXXXX"}></Nav>
            <main className="adminPay container pl-0 mt-5">
                <div className="row my-2">
                    <div className="col-12 mb-2 adminMenu">
                        <Link to={'/report'} className="viewReports adminButton">Generar reporte general</Link>
                    </div>
                    <div className="col-12 adminMenu">
                        <Link to={'/report'} className="viewReports adminButton">Generar reporte mensual</Link>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12">
                        <h2>Historial de pagos</h2>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12 adminFilters">
                        <form>
                            <label htmlFor="username">Buscar por id</label>
                            <input id="username" type="search" placeholder="Id" />
                            <button type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                        <form>
                            <label htmlFor="date">Buscar por última fecha</label>
                            <input type="date" />
                            <button type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>

                        <select name="order" id="order">
                            <option value="">Ordenar por</option>
                            <option value="Nombre A-Z">Nombre A-Z</option>
                            <option value="Nombre Z-A">Nombre Z-A</option>
                            <option value="fechaAs">Fecha ascendente</option>
                            <option value="fechaDes">Fecha descendiente</option>
                        </select>
                        <select name="order" id="order">
                            <option value="">Filtrar por</option>
                            <option value="debt">Adeuda</option>
                            <option value="n/a">Pendiente</option>
                            <option value="paid">Sin adeudo</option>
                        </select>
                    </div>
                </div>
            </main>
        </>
    )
}

export default UserPayments;