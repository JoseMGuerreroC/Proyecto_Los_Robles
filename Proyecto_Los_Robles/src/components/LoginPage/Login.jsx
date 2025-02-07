import { useRef, useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { Link, useNavigate } from "react-router";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Login.css';
gsap.registerPlugin(useGSAP)

function Login() {
    const navigate = useNavigate();
    const { setLoggedTrue, setAdminTrue } = useContext(UserContext);
    const loginCont = useRef();
    const { contextSafe } = useGSAP({ scope: loginCont });
    const changeForm = contextSafe(() => {
        gsap.timeline()
            .to('.login', {
                opacity: 0,
                y: '-10%',
                duration: .25,
                zIndex: -1,
            })
            .to('.forgotPassword', {
                opacity: 1,
                y: '0%',
                duration: .25,
                delay: .2,
                zIndex: 1
            })
    });

    const unchangeForm = contextSafe(() => {
        gsap.timeline()
            .to('.forgotPassword', {
                opacity: 0,
                y: '10%',
                duration: .25,
                zIndex: -1,
            })
            .to('.login', {
                opacity: 1,
                y: '0%',
                duration: .25,
                delay: .2,
                zIndex: 1,
            })
    });

    const log = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        if (email == 'user@user.com' && password == 'user'){   
            setAdminTrue(false);
            setLoggedTrue(); 
            navigate("/main");
        }else if (email == 'admin@admin.com' && password == 'admin'){
            setAdminTrue(true);
            setLoggedTrue();
            navigate("/main");
        }else{
            console.log('no entras')
        }
    }

    return (
        <>
            <div ref={loginCont} className="loginCont">
                <div className="login">
                    <div className="loginTitle">
                        <img src="/LosRoblesLogo.png" alt="Logo del residencial con la leyenda 'Los Robles', abajo de un árbol" />
                        <h1>Inicio de sesión</h1>
                    </div>
                    <form onSubmit={log} className='loginForm'>
                        <label htmlFor="email">Correo</label>
                        <input id='email' name='email' required type="email" placeholder='Introduce tu correo' />
                        <label htmlFor="password">Contraseña</label>
                        <input id='password' name='password' required type="password" placeholder='Introduce tu contraseña' />
                        <input type="submit" placeholder='Enviar' />
                    </form>
                    <button onClick={changeForm} className='loginForgotPass'>¿Olvidaste tu contraseña?</button>
                    <Link to={'/register'} className='loginNewAccount'>¿Nuevo residente?, Regístrate</Link>
                </div>
                <div className='forgotPassword'>
                    <button onClick={unchangeForm} className='returnLoginForm'><i className="fa-solid fa-arrow-left"></i>Regresar</button>
                    <form className='forgotPasswordForm'>
                        <label htmlFor="recoverPassword">Introduce el correo asociado a tu cuenta para recuperar tu contraseña</label>
                        <input required className='forgotInput' type="email" placeholder='Introduce tu correo' />
                        <input className='forgotPasswordFormSend' type="submit" placeholder='Enviar' />
                    </form>
                </div>
                <div className="newAccount">

                </div>
            </div>
        </>
    )
}

export default Login;