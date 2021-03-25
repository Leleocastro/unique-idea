import Menu from '../components/Menu.js';
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Jumbotron, Container } from 'reactstrap';
import { useState } from 'react';
library.add(fas);

function Home() {
    return (
        <div>
            <Head>
                <title>Início - L.Tag Developing</title>
                <meta name='description' content='Site de Desenvolvimento sobre Programação' />
                <meta name='author' content='L.Tag - Leonardo Castro' />
            </Head>
            <Menu />
            <Jumbotron fluid className="servicos">
                <style>{`.servicos{
                    padding-top: 80px;
                    padding-bottom: 80px;
                    background-color: #000;
                    color: #fff;
                    margin-bottom: 0rem !important;
                }
                .circulo{
                    width: 140px;
                    height: 140px;
                    background-color: #fed136;
                    font-size: 52px;
                    padding-top: 24px;
                }
                .centralizar{
                    margin: 0 auto !important;
                    float: none !important;
                }`}</style>
                <Container className="text-center">
                    <div>
                        <h1 className="display-4">Página em Construção...</h1>
                        <p className="lead pb-4">Temos a solução que a sua empresa precisa!</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="circulo centralizar rounded-circle">
                                <FontAwesomeIcon icon="archive" />
                            </div>
                            <h2 className="mt-4 mb-4">Arquivamento</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">Saiba mais &raquo;</a></p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);
    function adicionarContador() {
        setContador(contador * 2);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home;