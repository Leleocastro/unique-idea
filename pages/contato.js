import Menu from '../components/Menu.js';
import Head from 'next/head'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Jumbotron, Container } from 'reactstrap';
import img1 from '../images/pp.jpg';
// import { Spinner } from 'reactstrap';
library.add(fas);

function Contato() {
    return (
        <div>
            <Head>
                <title>Contato - L.Tag Developing</title>
                <meta name='description' content='Contato par Desenvolvimento de Sites e Aplicativos' />
                <meta name='author' content='L.Tag - Leonardo Castro' />
            </Head>
            <Menu />
            <style>
                {`
                .cover {
                    padding: 0 1.5rem;
                }
                .cover .btn-lg {
                    padding: .75rem 1.25rem;
                    font-weight: 700;
                }
                .centralizar{
                    margin: 0 auto !important;
                    float: none !important;
                `}
            </style>
            <body class="text-center">
                <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <main role="main" class="inner cover">

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
                    font-size: 52px;
                    padding-top: 24px;
                }.circulo2{
                    width: 100%;
                    height: 100%;
                }
                .centralizar{
                    margin: 0 auto !important;
                    float: none !important;
                }`}</style>
                            <Container className="text-center">
                                <div className="text-center">
                                    <div className="circulo centralizar rounded-circle">
                                        <img src={img1} alt='img1' id='img1' className="circulo2 centralizar rounded-circle" />
                                    </div>
                                    <h2 className="mt-4 mb-4">Leonardo Castro</h2>
                                    <p>Empenhado em construir novas soluções.</p>
                                </div>
                                <div>
                                    <h1 className="display-4">Entre em contato</h1>

                                    <p class="lead"><FontAwesomeIcon icon="phone-square" />    (61)9 8503-8552</p>
                                    <a href="tel:+5561985038552" class="btn btn-secondary">Telefone</a>
                                    <p class="lead"><FontAwesomeIcon icon="envelope-open-text" />    leonardo.castro@ltag.com.br</p>
                                    <a href="mailto:leonardo.castro@ltag.com.br" class="btn btn-secondary">E-mail</a>
                                </div>
                            </Container>
                        </Jumbotron>
                    </main>
                </div>
            </body>
        </div>
    )
}

export default Contato