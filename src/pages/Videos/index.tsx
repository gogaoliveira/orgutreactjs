import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Videos = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Videos</h1>
                    <p className="lead">Videos</p>
                    <hr />
                    <p>Videos</p>
                    <Link className="btn btn-primary btn-lg" to="/Home">
                        Voltar
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Videos;
