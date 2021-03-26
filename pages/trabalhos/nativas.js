import Menu from '../../components/Menu.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import img1 from '../../images/Screenshot_20210326-014728.jpg';
import img2 from '../../images/Screenshot_20210326-014844.jpg';

function Nativas() {
    return (
        <div>
            <style>
                {`
                    .imagecard{
                        width: 150px;
                        height: 300px;
                    }
                    .overflow-hidden { overflow: hidden; }
                `}
            </style>
            <Menu />
            <Container>
                <div className="jumbotron p-3 p-md-5 text-black rounded bg-light pt-3">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">Aplicativo de Locais</h1>
                        <p className="lead my-3">Aplicativo desenvolvido com Flutter, utilizando a linguagem Dart, utilizando as funcionalidades nativas do aparelho.</p>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-primary">Home</strong>
                                <h3 className="mb-0">
                                    <a className="text-dark" href="#">Tela Principal</a>
                                </h3>
                                <div className="mb-1 text-muted">Locais Salvos</div>
                                <p className="card-text mb-auto">Nesta tela é verificado os locais salvos, com os dados todos salvos no próprio aparelho, através de SQLite.</p>
                            </div>
                            <img className="card-img-right flex-auto d-md-block imagecard" src={img1} alt="img1" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-success">Formulário</strong>
                                <h3 className="mb-0">
                                    <a className="text-dark" href="#">Tela de Preenchimento</a>
                                </h3>
                                <div className="mb-1 text-muted">Funções Nativas</div>
                                <p className="card-text mb-auto">Nesta tela é inserido o nome do local, realizada a captura de imagem com o dispositivo e selecionado o local, ou atual, ou selecionado no mapa.</p>
                            </div>
                            <img className="card-img-right flex-auto d-md-block imagecard" src={img2} alt="img2" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Nativas