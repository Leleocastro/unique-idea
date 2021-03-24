import Menu from '../components/Menu.js'
import {useState} from 'react'

function Home() {
    return (
        <div>
            <Menu />
            <h4>Página Inicial em construção</h4>
            <h1>Leonardo Castro</h1>
            <Contador />
        </div>
    )
}

function Contador(){
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

export default Home