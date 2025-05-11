import Nav from '../Nav/Nav';
import './Report.css';

function Report() {
    return (
        <>
            <Nav title={"Reporte XXXXXX"}></Nav>
            <main className="adminPay container pl-0 mt-5">
                <div className="row my-2">
                    <div className="col-12 mb-2 adminMenu">
                        <button className="viewReports adminButton">Exportar en Excel</button>
                    </div>
                    <div className="col-12 mb-2 adminMenu">
                        <button className="viewReports adminButton">Exportar como PDF</button>
                    </div>
                    <div className="col-12 mb-2 adminMenu">
                        <button className="viewReports adminButton">Exportar como JSON</button>
                    </div>
                    <div className="col-12 mb-2 adminMenu">
                        <button className="viewReports adminButton">Exportar como CSV</button>
                    </div>
                    <div className="col-12 mb-2 adminMenu">
                        <button className="viewReports adminButton">Exportar como Word</button>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12">
                        <h2>Vista previa</h2>
                    </div>
                </div>
                <div className='previewReport'>
                    <h2>Reporte XXXXXX</h2>
                </div>
            </main>
        </>
    )
}

export default Report;

