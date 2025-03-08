import "./PaymentPage.css";
import useAuthRedirect from "../UserContext/UseAuthRedirect";
import { useContext, useRef } from "react";
import { UserContext } from "../UserContext/UserContext";
import Nav from "../Nav/Nav";

function PaymentPage() {
  useAuthRedirect();
  const { isAdmin } = useContext(UserContext);

  const modal = useRef();
  const motivo = useRef();
  const importe = useRef();

  function Pay(mot, imp) {
    modal.current.style.display = 'block';
    motivo.current.textContent= mot;
    importe.current.textContent = imp;
  }

  function closeModal(){
    modal.current.style.display = 'none';
    motivo.current.textContent= '';
    importe.current.textContent = '';
  }

  return (
    <>
      <Nav title={"Administrar pagos"}></Nav>
      <div ref={modal} className="modalPay">
        <div className="background"></div>
        <button onClick={closeModal} className="closeModal">
          <i className="fa-solid fa-x"></i>
        </button>
        <div className="modalContent">
            <h2>Módulo de pago</h2>
            <p className="modalText">Motivo</p>
            <p className="modalImp" ref={motivo}></p>
            <p className="modalText">Importe</p>
            <p className="modalImp" ref={importe}></p>
            <p className="modalTotal"></p>
            <button>Pagar en línea</button>
            <button>Generar referencia</button>
            <button className="paypal">Pagar con paypal <img src="/PayPal.png" alt="" /></button>
            <button className="stripe">Pagar con stripe <img src="/stripe.jpeg" alt="" /></button>

        </div>
      </div>
      {!isAdmin ? (
        <>
          <main className="pendingPay container pl-0 mt-5">
            <div className="row my-2">
              <div className="col-12 paymentMenu">
                <button>Historial de pagos</button>
                <button>
                  Pagos vencidos <div className="paymentDues">1</div>{" "}
                </button>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                <h2>Pagos pendientes</h2>
              </div>
            </div>
            <div className="row contItemsPay my-1">
              <div className="col-12 itemPay my-2 text-center">
                <div className="col-3 itemPayInfo">
                  <p>Motivo</p>
                  <h3>Renta</h3>
                </div>
                <div className="col-2 itemPayInfo">
                  <p>Fecha de emisión</p>
                  <h3>01/02/2025</h3>
                </div>
                <div className="col-2 itemPayInfo">
                  <p>Fecha límite de pago</p>
                  <h3>28/02/2025</h3>
                </div>
                <div className="col-3 itemPayInfo">
                  <p>Importe</p>
                  <h3>$4,000.00 MXN</h3>
                </div>
                <div className="col-2 itemPayInfo">
                  <button
                    onClick={() => {
                      Pay("Renta", "$4,000.00 MXN");
                    }}
                    className="itemButton"
                  >
                    Pagar
                  </button>
                </div>
              </div>
              <div className="col-12 itemPay my-2 text-center">
                <div className="col-3 itemPayInfo">
                  <p>Motivo</p>
                  <h3>Mantenimiento mensual</h3>
                </div>
                <div className="col-2 itemPayInfo">
                  <p>Fecha de emisión</p>
                  <h3>01/02/2025</h3>
                </div>
                <div className="col-2 itemPayInfo">
                  <p>Fecha límite de pago</p>
                  <h3>28/02/2025</h3>
                </div>
                <div className="col-3 itemPayInfo">
                  <p>Importe</p>
                  <h3>$500.00 MXN</h3>
                </div>
                <div className="col-2 itemPayInfo">
                  <button
                    onClick={() => {
                      Pay("Mantenimiento mensual", "$500.00 MXN");
                    }}
                    className="itemButton"
                  >
                    Pagar
                  </button>
                </div>
              </div>
              <div className="col-12 itemPay my-2 text-center">
                <div className="col-3 itemPayInfo">
                  <p>Motivo</p>
                  <h3>Cruz Roja</h3>
                </div>
                <div className="col-2 itemPayInfo">
                  <p>Fecha de emisión</p>
                  <h3>01/02/2025</h3>
                </div>
                <div className="col-2 itemPayInfo">
                  <p>Fecha límite de pago</p>
                  <h3>28/02/2025</h3>
                </div>
                <div className="col-3 itemPayInfo">
                  <p>Importe</p>
                  <h3>$10.00 MXN</h3>
                </div>
                <div className="col-2 itemPayInfo">
                  <button
                    onClick={() => {
                      Pay("Cruz Roja", "10.00 MXN");
                    }}
                    className="itemButton"
                  >
                    Pagar
                  </button>
                </div>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-12 payAll">
                <p>Adeudo total: $4,510.00 MXN</p>
                <button className="payAllBtn">Pagar todo</button>
              </div>
            </div>
          </main>
        </>
      ) : (
        <>
          <main className="adminPay container pl-0 mt-5">
            <div className="row my-2">
              <div className="col-12 adminMenu">
                <button>Generar reporte de mes actual (Febrero - 2025)</button>
                <button>Generar reporte de mes anterior (Enero - 2025)</button>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-12 mb-2 adminMenu">
                <button className="viewReports">Historial de reportes</button>
              </div>
              <div className="col-12 adminMenu">
                <button className="viewReports">Ver todos los pagos</button>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                <h2>Administrar residentes</h2>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12 adminFilters">
                <form>
                  <label htmlFor="username">Buscar por nombre</label>
                  <input id="username" type="search" placeholder="Nombre" />
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
            <div className="row contAdminUsers my-1">
              <div className="col-12 adminUser debt my-2 text-center">
                <div className="col-3 userInfo">
                  <p>Nombre</p>
                  <h3>User</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Código de residencia</p>
                  <h3>XXXXXXXXX</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Fecha último pago</p>
                  <h3>07/12/2024</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Estado</p>
                  <h3>Adeuda</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Mes/es adeudado/s</p>
                  <h3>Enero 2025, Febrero 2025</h3>
                </div>
                <div className="col-1 userInfo">
                  <button className="itemButton">Ver</button>
                </div>
              </div>
              <div className="col-12 adminUser my-2 text-center">
                <div className="col-3 userInfo">
                  <p>Nombre</p>
                  <h3>User</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Código de residencia</p>
                  <h3>XXXXXXXXX</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Fecha último pago</p>
                  <h3>07/01/2025</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Estado</p>
                  <h3>Pendiente</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Mes/es adeudado/s</p>
                  <h3>Febrero 2025</h3>
                </div>
                <div className="col-1 userInfo">
                  <button className="itemButton">Ver</button>
                </div>
              </div>
              <div className="col-12 adminUser paid my-2 text-center">
                <div className="col-3 userInfo">
                  <p>Nombre</p>
                  <h3>User</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Código de residencia</p>
                  <h3>XXXXXXXXX</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Fecha último pago</p>
                  <h3>07/02/2024</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Estado</p>
                  <h3>Sin Adeudo</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Mes/es adeudado/s</p>
                  <h3>N/A</h3>
                </div>
                <div className="col-1 userInfo">
                  <button className="itemButton">Ver</button>
                </div>
              </div>
              <div className="col-12 adminUser paid my-2 text-center">
                <div className="col-3 userInfo">
                  <p>Nombre</p>
                  <h3>User</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Código de residencia</p>
                  <h3>XXXXXXXXX</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Fecha último pago</p>
                  <h3>07/02/2024</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Estado</p>
                  <h3>Sin Adeudo</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Mes/es adeudado/s</p>
                  <h3>N/A</h3>
                </div>
                <div className="col-1 userInfo">
                  <button className="itemButton">Ver</button>
                </div>
              </div>
              <div className="col-12 adminUser paid my-2 text-center">
                <div className="col-3 userInfo">
                  <p>Nombre</p>
                  <h3>User</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Código de residencia</p>
                  <h3>XXXXXXXXX</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Fecha último pago</p>
                  <h3>07/02/2024</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Estado</p>
                  <h3>Sin Adeudo</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Mes/es adeudado/s</p>
                  <h3>N/A</h3>
                </div>
                <div className="col-1 userInfo">
                  <button className="itemButton">Ver</button>
                </div>
              </div>
              <div className="col-12 adminUser paid my-2 text-center">
                <div className="col-3 userInfo">
                  <p>Nombre</p>
                  <h3>User</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Código de residencia</p>
                  <h3>XXXXXXXXX</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Fecha último pago</p>
                  <h3>07/02/2024</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Estado</p>
                  <h3>Sin Adeudo</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Mes/es adeudado/s</p>
                  <h3>N/A</h3>
                </div>
                <div className="col-1 userInfo">
                  <button className="itemButton">Ver</button>
                </div>
              </div>
              <div className="col-12 adminUser paid my-2 text-center">
                <div className="col-3 userInfo">
                  <p>Nombre</p>
                  <h3>User</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Código de residencia</p>
                  <h3>XXXXXXXXX</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Fecha último pago</p>
                  <h3>07/02/2024</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Estado</p>
                  <h3>Sin Adeudo</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Mes/es adeudado/s</p>
                  <h3>N/A</h3>
                </div>
                <div className="col-1 userInfo">
                  <button className="itemButton">Ver</button>
                </div>
              </div>
              <div className="col-12 adminUser paid my-2 text-center">
                <div className="col-3 userInfo">
                  <p>Nombre</p>
                  <h3>User</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Código de residencia</p>
                  <h3>XXXXXXXXX</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Fecha último pago</p>
                  <h3>07/02/2024</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Estado</p>
                  <h3>Sin Adeudo</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Mes/es adeudado/s</p>
                  <h3>N/A</h3>
                </div>
                <div className="col-1 userInfo">
                  <button className="itemButton">Ver</button>
                </div>
              </div>
              <div className="col-12 adminUser paid my-2 text-center">
                <div className="col-3 userInfo">
                  <p>Nombre</p>
                  <h3>User</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Código de residencia</p>
                  <h3>XXXXXXXXX</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Fecha último pago</p>
                  <h3>07/02/2024</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Estado</p>
                  <h3>Sin Adeudo</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Mes/es adeudado/s</p>
                  <h3>N/A</h3>
                </div>
                <div className="col-1 userInfo">
                  <button className="itemButton">Ver</button>
                </div>
              </div>
              <div className="col-12 adminUser paid my-2 text-center">
                <div className="col-3 userInfo">
                  <p>Nombre</p>
                  <h3>User</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Código de residencia</p>
                  <h3>XXXXXXXXX</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Fecha último pago</p>
                  <h3>07/02/2024</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Estado</p>
                  <h3>Sin Adeudo</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Mes/es adeudado/s</p>
                  <h3>N/A</h3>
                </div>
                <div className="col-1 userInfo">
                  <button className="itemButton">Ver</button>
                </div>
              </div>
              <div className="col-12 adminUser paid my-2 text-center">
                <div className="col-3 userInfo">
                  <p>Nombre</p>
                  <h3>User</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Código de residencia</p>
                  <h3>XXXXXXXXX</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Fecha último pago</p>
                  <h3>07/02/2024</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Estado</p>
                  <h3>Sin Adeudo</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Mes/es adeudado/s</p>
                  <h3>N/A</h3>
                </div>
                <div className="col-1 userInfo">
                  <button className="itemButton">Ver</button>
                </div>
              </div>
              <div className="col-12 adminUser paid my-2 text-center">
                <div className="col-3 userInfo">
                  <p>Nombre</p>
                  <h3>User</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Código de residencia</p>
                  <h3>XXXXXXXXX</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Fecha último pago</p>
                  <h3>07/02/2024</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Estado</p>
                  <h3>Sin Adeudo</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Mes/es adeudado/s</p>
                  <h3>N/A</h3>
                </div>
                <div className="col-1 userInfo">
                  <button className="itemButton">Ver</button>
                </div>
              </div>
              <div className="col-12 adminUser paid my-2 text-center">
                <div className="col-3 userInfo">
                  <p>Nombre</p>
                  <h3>User</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Código de residencia</p>
                  <h3>XXXXXXXXX</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Fecha último pago</p>
                  <h3>07/02/2024</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Estado</p>
                  <h3>Sin Adeudo</h3>
                </div>
                <div className="col-2 userInfo">
                  <p>Mes/es adeudado/s</p>
                  <h3>N/A</h3>
                </div>
                <div className="col-1 userInfo">
                  <button className="itemButton">Ver</button>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default PaymentPage;
