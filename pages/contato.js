import Menu from '../components/Menu.js';
import React from 'react';
import { Spinner } from 'reactstrap';

function Contato(){
    return (
        <div>
            <Menu/>
            Contato: (61)9 8503-8552
            <Spinner color="dark" />
        </div>
    )
}

export default Contato