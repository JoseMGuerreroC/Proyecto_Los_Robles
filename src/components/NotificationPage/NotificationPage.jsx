import './NotificationPage.css';
import Nav from '../Nav/Nav';
import useAuthRedirect from '../UserContext/UseAuthRedirect';
import { useContext, } from 'react';
import { UserContext } from '../UserContext/UserContext';

function NotificationPage() {
    useAuthRedirect();
    const { isAdmin } = useContext(UserContext);
    return (
        <>
            {(isAdmin) ?
                <>
                    <Nav title={"Administrar avisos"} ></Nav>
                    <main className='adviceCont'>
                        <div className="adviceButtons">
                            <button>Crear notificación</button>
                            <button>Crear noticia/aviso (Página Informativa)</button>
                        </div>
                        <div className="adviceOptions">
                            <button className='adviceButton select'>Historial de notificaciones</button>
                            <button className='adviceButton'>Historial de noticias/avisos</button>
                        </div>
                        <div className='adviceHistorial'>
                            <div className='notiItem'>
                                <div className='notiInfo'>
                                    <p>07/02/2025</p>
                                    <h2>Mantenimiento eléctrico</h2>
                                    <p>Aviso: El día 10 de julio, a partir de las 12:00pm hasta las 4:00pm, se estarán realizando labores de mantenimiento a las instalaciones eléctricas del bloque B, por lo que el bloque no contará con luz en ese periodo de tiempo. Pedimos disculpas por los inconvenientes generados.</p>
                                </div>
                                <button className='notiRead'>Editar <i className="fa-solid fa-pen-to-square"></i></button>
                            </div>
                            <div className='notiItem'>
                                <img src="/noticia_1_img.jpg" alt="Postes de luz led en el suelo iluminando un camino de piedras" />
                                <div className='notiInfo'>
                                    <p>02/02/2025 (Ejemplo noticia)</p>
                                    <h2>Nuevos postes led en el parque de "Los "Robles"</h2>
                                    <p>El día 2 de Febrero del presente año, se han instalado nuevos postes led automáticos en el parque de la residencia "Los Robles", mejorando en gran medida la iluminación de la zona, proporcionando seguridad, confianza y comodidad a las numerosas familias que visitan estas instalaciones.</p>
                                </div>
                                <button className='notiRead'>Editar <i className="fa-solid fa-pen-to-square"></i></button>
                            </div>
                        </div>
                    </main>
                </>
                :
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
            }
        </>
    )
}

export default NotificationPage;