import React from 'react';
import { CgCloseO } from 'react-icons/cg'
import { CgInfo } from 'react-icons/cg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detalhes from './Detalhes';

const Tarefa = ({ tarefa, handleTarefaClick, handleTarefaDelete }) => {
    // const history = useHistory()

    const handleTarefaDetalheClick = () => {
        // history.push(`/${tarefa.titulo}`)
        <BrowserRouter>
            <Routes>
                <Route path="/Detalhes" element={Detalhes} exact />
            </Routes>
        </BrowserRouter>
    }

    const tarefaCompleta = tarefa.isCompleta ?
        { borderLeft: '6px solid #228b22', paddingLeft: '35px' } : {}
    
    return (
        <div className="tarefa" style={tarefaCompleta}>
            <div className="tarefa-titulo" onClick={() => handleTarefaClick(tarefa.id)}>
                {tarefa.titulo}
            </div>

            <div className="btn-container">
                <button
                    className="btn-delete"
                    title="Excluir a tarefa"
                    onClick={() => handleTarefaDelete(tarefa.id)}>
                    <CgCloseO />
                </button>

                <button
                    className="btn-detalhe"
                    title="Informações"
                    onClick={handleTarefaDetalheClick}>
                    <CgInfo />
                </button>
            </div>
        </div>
    )
    
    // <div className="tarefa">{tarefa.titulo}</div>
}

export default Tarefa