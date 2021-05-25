import Footer from "components/Footer";
import NavBar from "components/NavBar";
import FotoPerfil from '../../assets/img/doug2.jpg'
import Camera from '../../assets/img/camera.svg'
import Filmadora from '../../assets/img/camera-reels.svg'
import Depo from '../../assets/img/depo.svg'
import Star from '../../assets/img/star.svg'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row mt-2 h-100">
                    <div className="col-sm-2 bg-light rounded mr-2 text-center">
                        <div className="column mt-2">
                            <img src={FotoPerfil} alt="fotoPerfil" className="rounded mw-100 mx-auto" />
                            <hr />
                            <p className="font-weight-bold mb-1">Douglas Oliveira</p>
                            <p className="font-weight-light mb-1">Ararangua/sc</p>
                            <p className="font-weight-light mb-1">Casado</p>
                            <hr />
                            <div className="btn-group-vertical w-100">
                                <button className="btn btn-primary btn-sm btn-block "><Link className="nav-link px-2 text-light" to="/Home" >Inicio</Link></button>
                                <button className="btn btn-primary btn-sm btn-block"><Link className="nav-link px-2 text-light" to="/Amigos">Amigos</Link></button>
                                <button className="btn btn-primary btn-sm btn-block"><Link className="nav-link px-2 text-light" to="/Comunidades">Comunidades</Link></button>
                            </div>



                        </div>
                    </div>
                    <div className="col-sm-5 bg-light rounded mr-2 rounded-top">
                        <div className="column p-2">
                            <h3 className="ml-3">Douglas Gomes de Oliveira</h3>
                            <hr />
                            <div className="row d-flex justify-content-around">
                                <div className="colun pr-1 ">
                                    <span className="h6">depoimentos</span>
                                    <div className="row justify-content-center align-items-center ">
                                        <img src={Depo} alt="camera" className="pr-2" />
                                        <span>10</span>
                                    </div>
                                </div>
                                <div className="colun pr-1 ">
                                    <span className="h6">Fotos</span>
                                    <div className="row justify-content-center align-items-center ">
                                        <img src={Camera} alt="camera" className="pr-2" />
                                        <span>10</span>
                                    </div>
                                </div>
                                <div className="colun pr-1 ">
                                    <span className="h6">Videos</span>
                                    <div className="row justify-content-center align-items-center ">
                                        <img src={Filmadora} alt="camera" className="pr-2" />
                                        <span>10</span>
                                    </div>
                                </div>
                                <div className="colun pr-1 ">
                                    <span className="h6">Fãs</span>
                                    <div className="row justify-content-center align-items-center ">
                                        <img src={Star} alt="camera" className="pr-2" />
                                        <span>10</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="column">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#perfil" role="tab" aria-controls="profile" aria-selected="false">Perfil</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contato" role="tab" aria-controls="contact" aria-selected="false">Contato</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Home</div>
                                    <div className="tab-pane fade" id="perfil" role="tabpanel" aria-labelledby="profile-tab">profile</div>
                                    <div className="tab-pane fade" id="contato" role="tabpanel" aria-labelledby="contact-tab">contact</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-4 bg-light rounded "></div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
