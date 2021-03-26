import Menu from '../components/Menu.js';
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Jumbotron, Container } from 'reactstrap';
import { useState } from 'react';
import Image from 'next/image';
// import App from '../pages/_app'
library.add(fas);

function Home() {
    return (
        <div>
            <Head>
                <title>Início - L.Tag Developing</title>
                <meta name='description' content='Portfólio de Desenvolvimento' />
                <meta name='author' content='L.Tag - Leonardo Castro' />
            </Head>
            <Menu />
            {/* <Jumbotron fluid className="servicos">
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
            </Jumbotron> */}
            <style>
                {`.padrao{
                    width: 80%;
                    height: 300px;
                    border-radius: 21px 21px 0 0;
                }.product-device {
                    position: absolute;
                    right: 10%;
                    bottom: -30%;
                    width: 300px;
                    height: 540px;
                    background-color: #333;
                    border-radius: 21px;
                    -webkit-transform: rotate(30deg);
                    transform: rotate(30deg);
                  }.product-device::before {
                    position: absolute;
                    top: 10%;
                    right: 10px;
                    bottom: 10%;
                    left: 10px;
                    content: "";
                    background-color: rgba(255, 255, 255, .1);
                    border-radius: 5px;
                  }
                  
                  .product-device-2 {
                    top: -25%;
                    right: auto;
                    bottom: 0;
                    left: 5%;
                    background-color: #e5e5e5;
                  }.border-top { border-top: 1px solid #e5e5e5; }
                  .border-bottom { border-bottom: 1px solid #e5e5e5; }
                  
                  .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }
                  
                  .flex-equal > * {
                    -ms-flex: 1;
                    -webkit-box-flex: 1;
                    flex: 1;
                  }
                  @media (min-width: 768px) {
                    .flex-md-equal > * {
                      -ms-flex: 1;
                      -webkit-box-flex: 1;
                      flex: 1;
                    }
                  }
                  
                  .overflow-hidden { overflow: hidden; }`}
            </style>

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h2 className="display-8 font-weight-normal">Portfólio</h2>
                    <h1 className="display-4 font-weight-normal">Leonardo Castro</h1>
                    <p className="lead font-weight-normal">Soluções simples em várias linguagens, todo meu aprendizado e trabalhos.</p>
                    <a className="btn btn-outline-secondary" href="#">Veja mais</a>
                </div>
                <div className="product-device box-shadow d-none d-md-block"></div>
                <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">App Loja Virtual</h2>
                        <p className="lead">Flutter  -  Dart</p>
                    </div>
                    <div className="bg-light box-shadow mx-auto padrao"></div>
                </div>
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-white box-shadow mx-auto padrao"></div>
                </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-light box-shadow mx-auto padrao"></div>
                </div>
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-white box-shadow mx-auto padrao"></div>
                </div>
            </div>
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