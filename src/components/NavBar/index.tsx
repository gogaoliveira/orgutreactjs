import ImgLogo from 'assets/img/orkut.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="bg-primary p-2">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <img src={ImgLogo} alt="DevSuperior" width="80" className="mr-5" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end mr-5" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <li> <Link className="nav-link px-2 text-primary" to="/Home" >Inicio</Link></li>
                            <li> <Link className="nav-link px-2 text-primary" to="/Amigos">Amigos</Link></li>
                            <li> <Link className="nav-link px-2 text-primary" to="/Comunidades">Comunidades</Link></li>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
