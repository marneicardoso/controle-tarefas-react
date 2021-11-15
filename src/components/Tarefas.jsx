import React from 'react'
import Tarefa from './Tarefa'

// props == parâmetros/argumentos
const Tarefas = ({ tarefas, handleTarefaClick, handleTarefaDelete, handleTarefaDetalhe }) => {
    return (
        <React.Fragment>
            {tarefas.map((tarefa) => (
                <Tarefa
                    tarefa={tarefa}
                    handleTarefaClick={handleTarefaClick}
                    handleTarefaDelete={handleTarefaDelete}
                    handleTarefaDetalhe={handleTarefaDetalhe}
                />
            ))}
        </React.Fragment>
    )
}

export default Tarefas