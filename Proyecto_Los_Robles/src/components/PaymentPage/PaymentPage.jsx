import './PaymentPage.css';
import useAuthRedirect from '../UserContext/UseAuthRedirect';
import { useContext, } from 'react';
import { UserContext } from '../UserContext/UserContext';
import Nav from '../Nav/Nav';

function PaymentPage() {
    useAuthRedirect();
    const { isAdmin } = useContext(UserContext);

    return (
        <>
            <Nav title={'Administrar pagos'}></Nav>
            <main className="pendingPay container mt-5">
                <div className="row">
                    <div className="col-12"><h2>Pagos pendientes</h2></div>
                </div>
                <div className="row contItemsPay">
                    <div className="col-12 itemPay">
                        <div className="itemPayInfo">
                            <p>Motivo</p>
                            <p>Renta</p>
                        </div>
                        <div className="itemPayInfo">
                            <p>Fecha de emisión</p>
                            <p>07/01/2025</p>
                        </div>
                        <div className="itemPayInfo">
                            <p>Fecha límite de pago</p>
                            <p>07/02/2025</p>
                        </div>
                        <div className="itemPayInfo">
                            <p>Importe</p>
                            <p>$4,000.00 MXN</p>
                        </div>
                        <button>Pagar</button>
                    </div>
                    <div className="col-12 itemPay">
                    <div className="itemPayInfo">
                            <p>Motivo</p>
                            <p>Mantenimiento mensual</p>
                        </div>
                        <div className="itemPayInfo">
                            <p>Fecha de emisión</p>
                            <p>07/01/2025</p>
                        </div>
                        <div className="itemPayInfo">
                            <p>Fecha límite de pago</p>
                            <p>07/02/2025</p>
                        </div>
                        <div className="itemPayInfo">
                            <p>Importe</p>
                            <p>$500.00 MXN</p>
                        </div>
                        <button>Pagar</button>
                    </div>
                    <div className="col-12 itemPay">
                    <div className="itemPayInfo">
                            <p>Motivo</p>
                            <p>Aportación voluntaria Cruz Roja</p>
                        </div>
                        <div className="itemPayInfo">
                            <p>Fecha de emisión</p>
                            <p>07/01/2025</p>
                        </div>
                        <div className="itemPayInfo">
                            <p>Fecha límite de pago</p>
                            <p>07/02/2025</p>
                        </div>
                        <div className="itemPayInfo">
                            <p>Importe</p>
                            <p>$10.00 MXN</p>
                        </div>
                        <button>Pagar</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 paymentMenu">
                        <button>Historial de pagos</button>
                        <button>Pagos vencidos</button>
                    </div>
                </div>
                <div className="row contItemsPayed">
                    <div className="col-12 itemPayed">

                    </div>
                    <div className="col-12 itemPayed">

                    </div>
                    <div className="col-12 itemPayed">

                    </div>
                </div>
            </main>
        </>
    )
}

export default PaymentPage;