import './ForumPage.css';
import Nav from '../Nav/Nav';
import useAuthRedirect from '../UserContext/UseAuthRedirect';
import { useContext, } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { Link } from 'react-router-dom';

function ForumPage() {
    useAuthRedirect();
    const { isAdmin } = useContext(UserContext);
    return (
        <>
            <Nav title={'Foros'}></Nav>
            <main className='forumCont'>
                {(isAdmin) ?
                    <>
                        <div className="createForum">
                            <button>Nuevo Foro +</button>
                        </div>
                    </>
                    :
                    <></>
                }
                <div className="forumHistorial">
                    <div className="forumItem">
                        <Link to={'#'} style={(isAdmin) ? { width: '90%' } : { width: '100%' }} className="forumItemInfo">
                            <h2>Avisos importantes <span>12</span></h2>
                            <p className='desc'>Foro para comentar acerca de avisos importantes </p>
                            <p className='lastmsg'>Roberto: Perfecto, muchas gracias por avisar antes del apagón que tomará lugar el día 10, buen día 👍 </p>
                        </Link>
                        {(isAdmin) ?
                            <>
                                <div className="forumItemEdit">
                                    <button>Editar <i className="fa-solid fa-pen-to-square"></i></button>
                                </div>
                            </>
                            :
                            <>

                            </>
                        }
                    </div>
                    <div className="forumItem">
                        <Link to={'#'} style={(isAdmin) ? { width: '90%' } : { width: '100%' }} className="forumItemInfo">
                            <h2>Dudas y preguntas<span>4</span></h2>
                            <p className='desc'>Foro para preguntar y responder dudas relativas a la residencia "Los Robles"</p>
                            <p className='lastmsg'>Amira: ¿Dónde se encuentra el parque? </p>
                        </Link>
                        {(isAdmin) ?
                            <>
                                <div className="forumItemEdit">
                                    <button>Editar <i className="fa-solid fa-pen-to-square"></i></button>
                                </div>
                            </>
                            :
                            <>

                            </>
                        }
                    </div>
                    <div className="forumItem">
                        <Link to={'#'} style={(isAdmin) ? { width: '90%' } : { width: '100%' }} className="forumItemInfo">
                            <h2>Quejas y sugerencias<span>6</span></h2>
                            <p className='desc'>Foro para presentar quejas y/o sugerencias sobre algún tema relacionado de la residencia de "Los Robles"</p>
                            <p className='lastmsg'>Román: Deberían de colocar más botes de basura en el parque, sólamente cuento 3</p>
                        </Link>
                        {(isAdmin) ?
                            <>
                                <div className="forumItemEdit">
                                    <button>Editar <i className="fa-solid fa-pen-to-square"></i></button>
                                </div>
                            </>
                            :
                            <>

                            </>
                        }
                    </div>
                    <div className="forumItem">
                        <Link to={'#'} style={(isAdmin) ? { width: '90%' } : { width: '100%' }} className="forumItemInfo">
                            <h2>Temas abiertos<span>40</span></h2>
                            <p className='desc'>Foro para platicar sobre cualquier tema</p>
                            <p className='lastmsg'>José: ¿Alguno ya vió la nueva película del cine?</p>
                        </Link>
                        {(isAdmin) ?
                            <>
                                <div className="forumItemEdit">
                                    <button>Editar <i className="fa-solid fa-pen-to-square"></i></button>
                                </div>
                            </>
                            :
                            <>

                            </>
                        }
                    </div>
                    <div className="forumItem">
                        {(true) ?
                            <>
                                <div style={(isAdmin) ? { width: '90%' } : { width: '100%' }} className="forumItemInfo closed">
                                    <h2>Votaciones<span><i className="fa-solid fa-xmark"></i></span></h2>
                                    <p className='desc'>Foro cerrado. Se abre únicamente cuando la mesa directiva genere una votación</p>
                                </div>
                            </>
                            :
                            <>
                                <Link to={'#'} style={(isAdmin) ? { width: '90%' } : { width: '100%' }} className="forumItemInfo">
                                    <h2>Votaciones</h2>
                                    <p className='desc'>Foro cerrado. Se abre únicamente cuando la mesa directiva genere una votación</p>
                                </Link>
                            </>
                        }
                        {(isAdmin) ?
                            <>
                                <div className="forumItemEdit">
                                    <button>Editar <i className="fa-solid fa-pen-to-square"></i></button>
                                </div>
                            </>
                            :
                            <>

                            </>
                        }

                    </div>
                </div>
            </main>
        </>
    );
}

export default ForumPage;