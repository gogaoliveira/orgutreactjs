import Footer from "components/Footer";
import NavBar from "components/NavBar";
import AmigosTotal from "components/AmigosTotal";
import { Link } from 'react-router-dom';

const Amigos = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="col-lg-12 p-0">
                    <div className=" bg-light rounded p-2 h-auto mt-2 mb-2 mt-xl-2">
                        <div className="conteiner">
                            <h5>Amigos</h5>
                            <div className="row row-cols-1 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-4 ">
                                <AmigosTotal />
                            </div>
                        </div>
                    </div>
                </div>
                <Link className="nav-link px-2 d-flex  justify-content-end" to="/Cadastro">Ainda não é Meu amigo? CADASTRE-SE</Link>
            </div>
            <Footer />
        </>
    );
}

export default Amigos;
