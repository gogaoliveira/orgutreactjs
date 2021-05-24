import Footer from "components/Footer";
import NavBar from "components/NavBar";
import FotoPerfil from '../../assets/img/doug2.jpg'
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
                    <div className="col-sm-5 bg-light rounded mr-2"></div>
                    <div className="col-sm-4 bg-light rounded "></div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
