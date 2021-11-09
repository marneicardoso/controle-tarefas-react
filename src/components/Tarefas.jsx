import React from 'react'
import Tarefa from './Tarefa'

// props == parâmetros/argumentos
const Tarefas = ({ tarefas, handleTarefaClick, handleTarefaDelete }) => {
    return (
        <React.Fragment>
            {tarefas.map((tarefa) => (
                <Tarefa
                    tarefa={tarefa}
                    handleTarefaClick={handleTarefaClick}
                    handleTarefaDelete={handleTarefaDelete}
                />
            ))}
        </React.Fragment>
    )
}

export default Tarefas