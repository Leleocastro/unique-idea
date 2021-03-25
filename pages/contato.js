import Menu from '../components/Menu.js';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'reactstrap';

function Contato(){
    return (
        <div>
            <Menu/>
            Contato: (61)9 8503-8552
            <div className="d-flex justify-content-center">
                <Spinner color="dark" />
            </div>
        </div>
    )
}

export default Contato