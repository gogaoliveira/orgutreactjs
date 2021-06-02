import Footer from "components/Footer";
import NavBar from "components/NavBar";
import ComunidadesTotal from "components/comunidadesTotal"

const Comunidades = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="col-lg-12 p-0">
                    <div className=" bg-light rounded p-2 h-auto mt-2 mb-2 mt-xl-2">
                        <div className="conteiner">
                            <h5>Amigos</h5>
                            <div className="row row-cols-1 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-4 ">
                                <ComunidadesTotal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Comunidades;