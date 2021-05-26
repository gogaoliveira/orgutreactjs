import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Fotos = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Fotos</h1>
                    <p className="lead">Fotos</p>
                    <hr />
                    <p>Fotos</p>
                    <Link className="btn btn-primary btn-lg" to="/Home">
                        Voltar
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Fotos;
