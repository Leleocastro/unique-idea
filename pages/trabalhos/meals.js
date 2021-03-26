import Menu from '../../components/Menu.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import img1 from '../../images/Screenshot_20210326-014650.jpg';
import img2 from '../../images/Screenshot_20210326-014700.jpg';

function Meals() {
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
                        <h1 className="display-4 font-italic">Aplicativo de Receitas</h1>
                        <p className="lead my-3">Aplicativo desenvolvido com Flutter, utilizando a linguagem Dart, sem utilização de banco de dados. Somente cache.</p>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-primary">Drawer</strong>
                                <h3 className="mb-0">
                                    <a className="text-dark" href="#">Tela de Menu</a>
                                </h3>
                                <div className="mb-1 text-muted">Utilizando Drawer</div>
                                <p className="card-text mb-auto">Nesta tela é mostrada um menu utilizando drawer.</p>
                            </div>
                            <img className="card-img-right flex-auto d-md-block imagecard" src={img1} alt="img1" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-success">Home</strong>
                                <h3 className="mb-0">
                                    <a className="text-dark" href="#">Tela Principal</a>
                                </h3>
                                <div className="mb-1 text-muted">Dados de Cache</div>
                                <p className="card-text mb-auto">Nesta tela são mostradas as receitas, os dados buscados todos através da própria aplicação e todas as alterações são salvas em cache.</p>
                            </div>
                            <img className="card-img-right flex-auto d-md-block imagecard" src={img2} alt="img2" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Meals