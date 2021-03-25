import Menu from '../components/Menu.js';
import Head from 'next/head'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'reactstrap';

function Contato(){
    return (
        <div>
            <Head>
                <title>Contato - L.Tag Developing</title>
                <meta name='description' content='Contato par Desenvolvimento de Sites e Aplicativos'/>
                <meta name='author' content='L.Tag - Leonardo Castro'/>
            </Head>
            <Menu/>
            Contato: (61)9 8503-8552
            <div className="d-flex justify-content-center">
                <Spinner color="dark" />
            </div>
        </div>
    )
}

export default Contato