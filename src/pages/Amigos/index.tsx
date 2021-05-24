import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Amigos = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">AMIGOS</h1>
                    <p className="lead">AMIGOS</p>
                    <hr />
                    <p>AMIGOS</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Acessar dashboard
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Amigos;
