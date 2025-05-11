import './RegistrationPage.css';
import { Link } from "react-router";

function RegistrationPage() {
    return (
        <>
            <div className="back">
                <Link to={'/login'}><i className="fa-solid fa-arrow-left"></i>Regresar</Link>
            </div>
            <div className='registerTitle'>
                <img src="/LosRoblesLogo.png" alt="Logo del residencial con la leyenda 'Los Robles', abajo de un árbol" />
                <h1>Registro de residente</h1>
            </div>
            <form className='registerForm container'>
                <div className="row mb-4">
                    <div className="registerName col-12 field">
                        <label htmlFor="name">Nombre</label>
                        <input required id='name' type="text" placeholder='Introduzca su nombre' />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="registerName col-12 field">
                        <label htmlFor="foto">Suba una foto suya en formato PDF o JPG (Máximo 5MB)</label>
                        <input required id='foto' type="file" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-6 col-12 mb-4 registerSurname field">
                        <label htmlFor="patSurname">Apellido Paterno</label>
                        <input required id='patSurname' type="text" placeholder='Introduzca su apellido paterno' />
                    </div>
                    <div className="col-lg-6 col-12 registerSurname field">
                        <label htmlFor="matSurname">Apellido Materno</label>
                        <input required id='matSurname' type="text" placeholder='Introduzca su apellido materno' />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-4 col-12 mb-4 registerInfo field">
                        <label htmlFor="birthdate">Fecha de nacimiento</label>
                        <input required id='birthdate' type="date" />
                    </div>
                    <div className="col-lg-4 col-12 mb-4 registerInfo field">
                        <label htmlFor="curp">CURP</label>
                        <input required id='curp' type="text" placeholder='Introduzca su CURP' />
                    </div>
                    <div className="col-lg-4 col-12 registerInfo field">
                        <label htmlFor="sex">Sexo</label>
                        <select required id="sex">
                            <option value="">Seleccione una opción</option>
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                            <option value="N/A">Deseo no especificar</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="registerName col-12 field">
                        <label htmlFor="nss">NSS</label>
                        <input required id='nss' type="text" placeholder='Introduzca su NSS' />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-6 col-12 mb-4 registerContact field">
                        <label htmlFor="phone">Núm. Celular</label>
                        <input required id='phone' type="tel" placeholder='Introduzca su número' />
                    </div>
                    <div className="col-lg-6 col-12 registerContact field">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input id='pemail' type="email" placeholder='Introduzca su correo' />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12 col-lg-6 registerPassword field">
                        <label htmlFor="password">Cree una contraseña para su cuenta</label>
                        <input required id='password' minLength={15} type="password" pattern="[0-9a-fA-F]{4,8}" autocomplete="new-password" placeholder='Mínimo 10 caracteres' />
                    </div>
                    <div className="col-12 col-lg-6 registerPassword field">
                        <label htmlFor="repeatPassword">Por favor, repita la contraseña</label>
                        <input required id='repeatPassword' type="password" placeholder='Repita la contraseña' />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12 registerCode field">
                        <label htmlFor="code">Coloque el código de residencia proporcionado por la mesa directiva</label>
                        <input required id='code' type="text" placeholder='Código' />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12 registerCheck">
                        <input required id='code' type="checkbox"/>
                        <label htmlFor="code">Acepto el aviso de privacidad del sistema web de "Los Robles"</label>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12 registerCheck">
                        <input id='code' type="checkbox"/>
                        <label htmlFor="code">Deseo recibir notificaciones y/o avisos a mi correo</label>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12 registerSend">
                        <input type="submit" value='Registrarse'/>
                    </div>
                </div>
            </form>


        </>

    )
}

export default RegistrationPage;