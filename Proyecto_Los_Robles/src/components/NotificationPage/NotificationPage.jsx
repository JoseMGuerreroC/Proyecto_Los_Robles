import './NotificationPage.css';
import Nav from '../Nav/Nav';

function NotificationPage () {
    return(
        <>
            <Nav title={"Centro de notificaciones"} ></Nav>
            <main className='notiCont'>
                <div className='notiOptions'>
                    <button className='notiButton select'>Notificaciones nuevas (1)</button>
                    <button className='notiButton'>Notificaciones leídas</button>
                </div>
                <div className='notiItemsCont'>
                    <div className='notiItem'>
                        <div className='notiInfo'> 
                            <p>07/02/2025</p>
                            <h2>Pago realizado</h2>
                            <p>Ha realizado el pago de los siguientes conceptos: "Renta", "Mantenimiento" y "Cruz Roja", pertenecientes al mes de Enero, por un total de $4,510.00MXN y con fecha de 07/1/2025 a las 13:30:17.</p>
                        </div>
                        <button className='notiRead'>Leído <i className="fa-solid fa-check"></i></button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default NotificationPage;