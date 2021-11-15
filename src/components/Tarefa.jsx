import React from 'react';
import {CgCloseO} from 'react-icons/cg'
import {CgInfo} from 'react-icons/cg'

const Tarefa = ({ tarefa, handleTarefaClick, handleTarefaDelete, handleTarefaDetalhe }) => {
    const tarefaCompleta = tarefa.isCompleta ?
        { borderLeft: '6px solid #228b22', paddingLeft: '35px' } : {}
    
    return (
        <div className="tarefa" style={tarefaCompleta}>
            <div className="tarefaTitulo" onClick={() => handleTarefaClick(tarefa.id)}>
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
                    onClick={() => handleTarefaDetalhe(tarefa.id)}>
                    <CgInfo />
                </button>
            </div>
        </div>
    )
    
    // <div className="tarefa">{tarefa.titulo}</div>
}

export default Tarefa