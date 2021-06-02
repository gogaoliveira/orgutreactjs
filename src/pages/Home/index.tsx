import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Amigos from "components/Amigos";
import Comunidades from "components/comunidades"
import FotoPerfil from '../../assets/img/doug2.jpg';
import Camera from '../../assets/img/camera.svg';
import Filmadora from '../../assets/img/camera-reels.svg';
import Depo from '../../assets/img/depo.svg';
import Star from '../../assets/img/star.svg';
import { Link } from 'react-router-dom';




const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container mb-3">
                <div className="row mt-2 h-100">
                    <div className="col-lg-2 bg-light rounded mr-2 text-center">
                        <div className="column mt-2">
                            <img src={FotoPerfil} alt="fotoPerfil" className="rounded mw-100 mx-auto" />
                            <hr />
                            <p className="font-weight-bold mb-1">Douglas Oliveira</p>
                            <p className="font-weight-light mb-1">Ararangua/sc</p>
                            <p className="font-weight-light mb-1">Casado</p>
                            <hr />
                            <div className="btn-group-vertical w-100">
                                <button className="btn btn-primary btn-sm btn-block "><Link className="nav-link px-2 text-dark" to="/Home" >Inicio</Link></button>
                                <button className="btn btn-primary btn-sm btn-block"><Link className="nav-link px-2 text-dark" to="/Fotos">Fotos</Link></button>
                                <button className="btn btn-primary btn-sm btn-block"><Link className="nav-link px-2 text-dark" to="/Videos">Videos</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 bg-light rounded mr-2 rounded-top">
                        <div className="column p-2">
                            <h3 className="ml-3">Douglas Oliveira</h3>
                            <hr />
                            <div className="row d-flex justify-content-around">
                                <div className="colun pr-1 ">
                                    <Link className="nav-link p-0 text-dark" to="/Home">
                                        <span className="h6">depoimentos</span>
                                        <div className="row justify-content-center align-items-center ">
                                            <img src={Depo} alt="camera" className="pr-2" />
                                            <span>10</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="colun pr-1 ">
                                    <Link className="nav-link p-0 text-dark" to="/Fotos">
                                        <span className="h6">Fotos</span>
                                        <div className="row justify-content-center align-items-center ">
                                            <img src={Camera} alt="camera" className="pr-2" />
                                            <span>10</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="colun pr-1 ">
                                    <Link className="nav-link p-0 text-dark" to="/Videos">
                                        <span className="h6">Videos</span>
                                        <div className="row justify-content-center align-items-center ">
                                            <img src={Filmadora} alt="camera" className="pr-2" />
                                            <span>10</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="colun pr-1 ">
                                    <Link className="nav-link p-0 text-dark" to="/Home">
                                        <span className="h6">Fãs</span>
                                        <div className="row justify-content-center align-items-center ">
                                            <img src={Star} alt="camera" className="pr-2" />
                                            <span>10</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <hr />
                            <div className="column">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Social</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#perfil" role="tab" aria-controls="profile" aria-selected="false">Profissional</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contato" role="tab" aria-controls="contact" aria-selected="false">Contato</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <table className="table table-striped table-primary ">
                                            <tbody>
                                                <tr className="">
                                                    <th>Relacionamento</th>
                                                    <td>Casado(a)</td>
                                                </tr>
                                                <tr>
                                                    <th>Aniversário</th>
                                                    <td>23 Setembro</td>
                                                </tr>
                                                <tr>
                                                    <th>Filhos</th>
                                                    <td>Sim</td>
                                                </tr>
                                                <tr>
                                                    <th>Cidade Natal</th>
                                                    <td>Araranguá</td>
                                                </tr>
                                                <tr>
                                                    <th>Atividades</th>
                                                    <td>Series e Games</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="perfil" role="tabpanel" aria-labelledby="profile-tab">
                                        <table className="table table-striped table-primary ">
                                            <tbody>
                                                <tr className="">
                                                    <th>Área de Atuação</th>
                                                    <td>Desenvolvimento </td>
                                                </tr>
                                                <tr>
                                                    <th>Interesses</th>
                                                    <td>Java, Spring boot, rest API... </td>
                                                </tr>
                                                <tr>
                                                    <th>Github</th>
                                                    <td><a href="https://github.com/gogaoliveira/" target="_blanc">github.com/gogaoliveira</a></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="contato" role="tabpanel" aria-labelledby="contact-tab">
                                        <table className="table table-striped table-primary ">
                                            <tbody>
                                                <tr className="">
                                                    <th>Linkedin</th>
                                                    <td><a href="https://www.linkedin.com/in/douglas-gomes-de-oliveira-aa562615b/" target="_blanc">linkedin.com/in/douglas-gomes-de-oliveira-aa562615b</a></td>
                                                </tr>
                                                <tr>
                                                    <th>Whatsapp</th>
                                                    <td><a href="https://api.whatsapp.com/send?phone=5548999287404&text=Ol%C3%A1%2C%20encontrei%20seu%20contato%20em%20seu%20site" target="_blanc">Enviar Whats</a></td>
                                                </tr>
                                                <tr>
                                                    <th>Email</th>
                                                    <td>2doug077@gmail.com</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 p-0 ">
                        <div className=" bg-light rounded p-2 h-auto mt-2 mt-xl-0">
                            <div className="conteiner">
                                <h5>Amigos(10)</h5>
                                <div className="row row-cols-1 row-cols-3 g-4 ">
                                    <Amigos />
                                </div>
                                <Link className="nav-link px-2 altera-fontes d-flex justify-content-end" to="/Amigos">ver todos amigos</Link>
                            </div>
                        </div>
                        <div className=" bg-light rounded p-2 h-auto mt-2">
                            <div className="conteiner">
                                <h5>Comunidades()</h5>
                                <div className="row row-cols-1 row-cols-3 g-4 ">
                                    <Comunidades />
                                </div>
                                <Link className="nav-link px-2 altera-fontes d-flex justify-content-end" to="/Comunidades">ver todas comunidades</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
