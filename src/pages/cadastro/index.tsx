import Footer from "components/Footer";
import NavBar from "components/NavBar";
import imgCadastro from '../../assets/img/cadastro.png'


const Cadastro = () => {
    return (
        <>
            <NavBar />
            <div className="container contact mb-2">
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-center">
                        <div className="contact-info">
                        <img src={imgCadastro} alt="fotoPerfil" className="rounded w-75" />
                            <h2 className="text-light">Cadastro</h2>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="contact-form">
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="fname">Nome</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname"></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="email">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"></input>
                            </div>
                        </div>
                     
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn bg-primary btn-sm text-light">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cadastro;
