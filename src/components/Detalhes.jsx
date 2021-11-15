import React from 'react';
import { useParams } from 'react-router-dom';

const Detalhes = () => {
    const params = useParams()
    console.log(params)

    return (
        <React.Fragment>
            <div className="btn-voltar">
                <button>voltar</button>
            </div>
            <div className="tarefa-detalhe">
                <p>TITULO</p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam suscipit fugiat temporibus delectus reiciendis consequatur!
                </p>
            </div>
        </React.Fragment>
    )
}

export default Detalhes