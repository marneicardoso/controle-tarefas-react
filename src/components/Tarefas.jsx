import React from 'react'
import Tarefa from './Tarefa'

// props == parâmetros/argumentos
const Tarefas = ({ tarefas }) => {
    return (
        <React.Fragment>
            {tarefas.map(tarefa => <Tarefa tarefa={tarefa} />)}
        </React.Fragment>
    )
}

export default Tarefas