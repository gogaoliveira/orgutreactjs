import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Comunidades = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Comunidades</h1>
                    <p className="lead">Comunidades</p>
                    <hr />
                    <p>Comunidades</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Acessar dashboard
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Comunidades;
