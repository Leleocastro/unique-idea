import Menu from '../components/Menu.js';
import Head from 'next/head'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
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
                        <h1 class="cover-heading">Entre em contato.</h1>
                            
                        <p class="lead"><FontAwesomeIcon icon="phone-square" />  (61)9 8503-8552</p>
                        <a href="tel:+5561985038552" class="btn btn-lg btn-secondary">Telefone</a>
                        <p class="lead"><FontAwesomeIcon icon="envelope-open-text" />  leonardo.castro@ltag.com.br</p>
                            <a href="mailto:leonardo.castro@ltag.com.br" class="btn btn-lg btn-secondary">E-mail</a>
                    </main>
                </div>
            </body>
        </div>
    )
}

export default Contato