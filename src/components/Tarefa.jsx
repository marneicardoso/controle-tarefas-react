import React from 'react';
import {FaTrashAlt} from 'react-icons/fa'

const Tarefa = ({ tarefa, handleTarefaClick, handleTarefaDelete }) => {
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
                    onClick={() => handleTarefaDelete(tarefa.id)}>
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    )
    
    // <div className="tarefa">{tarefa.titulo}</div>
}

export default Tarefa