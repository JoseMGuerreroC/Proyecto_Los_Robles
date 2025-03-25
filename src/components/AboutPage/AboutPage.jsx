import './AboutPage.css';
import Nav from "../Nav/Nav";
import { useContext, } from 'react';
import { UserContext } from '../UserContext/UserContext';

function AboutPage() {
    const { isLogged } = useContext(UserContext);
    return (
        <>

            {(isLogged) ?
                <Nav title={""}></Nav>
                :
                <>
                </>
            }

            <div className='hero'>
                <img className='heroImg' src="/hero.webp" alt="" />
                <img className='heroIcon' src="/LosRoblesLogo.png" alt="" />
            </div>
            <div className='aboutMenu'>
                <a href="#historia">Historia</a>
                <a href="#mision">Misión y visión</a>
                <a href="#servicios">Servicios y seguridad</a>
                <a href="#galeria">Galería</a>
                <a href="#eventos">Eventos y actividades</a>
                <a href="#contacto">Contacto</a>
            </div>
            <h2 className='aboutNewsTitle'>Noticias y avisos recientes</h2>
            <div className='aboutNews'>
                <div className='newsItem'>
                    <img src="/noticia_1_img.jpg" alt="" />
                    <p>Ejemplo Noticia</p>
                </div>
                <div className='newsItem'>
                    <img src="/noticia_1_img.jpg" alt="" />
                    <p>Ejemplo Noticia</p>
                </div>
                <div className='newsItem'>
                    <img src="/noticia_1_img.jpg" alt="" />
                    <p>Ejemplo Noticia</p>
                </div>
            </div>
            <main className='aboutMain'>
                <div className='aboutInfo'>
                    <div id='historia' className='aboutSection'>
                        <h3>Historia</h3>
                        <img src="/info.jpg" alt="" />
                        <p>El Residencial Los Robles fue fundado en el año 2000 con el objetivo de ofrecer un espacio tranquilo y seguro para las familias. Inspirado en la belleza de la naturaleza, su nombre proviene de los majestuosos robles que rodean la zona. A lo largo de los años, ha crecido hasta convertirse en una comunidad armoniosa, con modernas instalaciones y un fuerte sentido de comunidad entre los residentes.</p>
                    </div>
                    <div id='mision' className='aboutSection'>
                        <h3>Misión y visión</h3>
                        <h4>Misión</h4>
                        <p>"En Residencial Los Robles, nos comprometemos a ofrecer un entorno seguro, armonioso y de alta calidad para nuestros residentes. Promovemos una comunidad sustentable, con espacios verdes, modernas instalaciones y un ambiente de convivencia que mejora la calidad de vida de quienes nos eligen como su hogar."</p>
                        <h4>Visión</h4>
                        <p>"Ser la comunidad residencial de referencia en la región, destacándonos por nuestra seguridad, infraestructura de primer nivel y un estilo de vida basado en la tranquilidad, el bienestar y la conexión con la naturaleza. Buscamos evolucionar constantemente para satisfacer las necesidades de nuestros residentes y mantener un entorno sostenible y amigable."</p>
                    </div>
                    <div id='servicios' className='aboutSection'>
                        <h3>Servicios y seguridad</h3>
                        <h4>Servicios</h4>
                        <ul>
                            <li>🔹<span>Mantenimiento de Áreas Comunes</span> – Limpieza y conservación de jardines, calles, y espacios recreativos.</li>
                            <li>🔹<span>Recolección de Basura y Reciclaje</span>  – Servicio eficiente de gestión de residuos para mantener un entorno limpio y ecológico.</li>
                            <li> <span>Iluminación y Señalización</span>🔹 – Luminarias en calles y áreas comunes para mayor seguridad.
                            </li>
                            <li> <span>Administración y Atención a Residentes</span>🔹 – Oficina de administración para consultas, pagos y soporte a los residentes.</li>
                            <li>🔹 <span>Espacios de Reunión y Eventos</span> – Casa club y áreas sociales disponibles para celebraciones y reuniones privadas.</li>
                            <li>🔹 <span>Internet en Áreas Comunes</span> – Conexión WiFi gratuita en parques y zonas recreativas.</li>
                        </ul>
                        <h4>Seguridad</h4>
                        <ul>
                            <li>🔒 <span>Acceso Controlado</span>  – Entrada restringida con caseta de vigilancia y sistema de registro para visitantes.</li>
                            <li>📹 <span>Circuito Cerrado de Televisión (CCTV)</span>  – Monitoreo 24/7 en puntos estratégicos del residencial.</li>
                            <li>👮 <span>Vigilancia 24/7</span>  – Personal de seguridad patrullando constantemente para garantizar tranquilidad.</li>
                            <li>🚔 <span>Botón de Emergencia</span>  – Comunicación directa con seguridad en caso de incidentes.</li>
                            <li>🚦 <span>Normas de Tránsito Internas</span>  – Límite de velocidad y señalización para una circulación segura dentro del residencial.</li>
                        </ul>
                    </div>
                    <div id='mision' className='aboutSection'>
                        <h3>Galería</h3>
                        <img src="/info.jpg" alt="" />
                    </div>
                    <div id='eventos' className='aboutSection'>
                        <h3>Eventos y actividades</h3>
                        <h4>Eventos anuales</h4>
                        <ul>
                            <li>🎉<span>Fiesta de bienvenida</span> –  Evento especial para recibir a nuevos residentes y fortalecer la comunidad.</li>
                            <li>
                            🎄 <span>Posada navideña</span>  –  Celebración con piñatas, villancicos y convivencia familiar.</li>
                            <li>
                            🥳  <span>Fiesta de año nuevo</span> – Cena y espectáculo de fuegos artificiales para recibir el nuevo año juntos.
                            </li>
                            <li>
                            🌎  <span>Día del medio ambiente</span> – Actividades de reforestación, reciclaje y cuidado ecológico.</li>
                        </ul>
                        <h4>Actividades semanales</h4>
                        <ul>
                            <li>🏋️ <span>Clases de yoga y fitness</span>  – Sesiones matutinas en el parque central.</li>
                            <li>👶 <span>Tardes de juego infantiles</span>  – Espacio de recreación y diversión para los más pequeños.</li>
                            <li>🎬 <span>Cine al aire libre</span>  – Proyección de películas en el parque los viernes por la noche.</li>
                            <li>📚 <span>Club de lecturas</span>  – Reuniones para compartir libros y experiencias.</li>
                        </ul>
                        <h4>Actividades deportivas</h4>
                        <ul>
                            <li>⚽ <span>Torneos de Fútbol y Básquetbol</span>  – Entrada restringida con caseta de vigilancia y sistema de registro para visitantes.</li>
                            <li>
                            🚴  <span>Caminatas y Rodadas</span>  –  Recorridos en bicicleta y caminatas familiares en la ciclovía.</li>
                            <li>
                            🏊  <span>Clases de Natación</span>  – Entrenamiento para niños y adultos en la alberca del residencial.</li>
                        </ul>
                    </div>
                    <div id='contacto' className='aboutSection'>
                        <h3>Contacto y Números de Emergencia</h3>

                        <h4>📞 Administración del Residencial</h4>
                        <ul>
                            <li><span>Oficina Administrativa:</span> Calle Roble #123, Residencial Los Robles</li>
                            <li><span>Horario de Atención:</span> Lunes a Viernes, 9:00 a.m. - 6:00 p.m.</li>
                            <li><span>Teléfono:</span> +123 456 7890</li>
                            <li><span>Correo Electrónico:</span> <a href="mailto:contacto@losrobles.com">contacto@losrobles.com</a></li>
                        </ul>

                        <h4>🚨 Números de Emergencia</h4>
                        <ul>
                            <li><span>Seguridad del Residencial:</span> +123 987 6543 (disponible 24/7)</li>
                            <li><span>Policía Local:</span> 911 o estación más cercana: +123 654 3210</li>
                            <li><span>Emergencias Médicas:</span> 911 o Ambulancia Privada: +123 741 8520</li>
                            <li><span>Bomberos:</span> 911 o estación más cercana: +123 963 2587</li>
                        </ul>

                        <h4>⚡ Atención de Servicios Públicos</h4>
                        <ul>
                            <li><span>CFE (Electricidad):</span> +123 369 1470</li>
                            <li><span>Agua Potable:</span> +123 258 7410</li>
                        </ul>

                    </div>
                </div>
            </main>

        </>
    )
}

export default AboutPage;