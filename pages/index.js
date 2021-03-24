import {useState} from 'react'

function Home() {
    return (
        <div>
            <h4>Home</h4>
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