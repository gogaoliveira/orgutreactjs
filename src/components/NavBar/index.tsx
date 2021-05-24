import ImgLogo from 'assets/img/orkut.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="bg-primary p-2">
            <div className="container">
                <nav className="d-flex flex-wrap justify-content-between">
                    <img src={ImgLogo} alt="DevSuperior" width="80" className="mr-5" />
                    <ul className="nav col-lg-auto">
                        <li> <Link className="nav-link px-2 text-primary" to="/Home" >Inicio</Link></li>
                        <li> <Link className="nav-link px-2 text-primary" to="/Amigos">Amigos</Link></li>
                        <li> <Link className="nav-link px-2 text-primary" to="/Comunidades">Comunidades</Link></li>
                    </ul>
                    
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
