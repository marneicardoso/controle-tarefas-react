import React, { useState } from 'react';
import AddTarefa from './AddTarefa';
import Tarefas from './Tarefas';

let id = 0

const Home = () => {
    // State: atualiza e renderiza o novo valor na tela
    const [tarefas, setTarefa] = useState([
        { id: 23, titulo: "Aprender React", isCompleta: false },
        { id: 35, titulo: "Primeiro App React", isCompleta: true },
    ])

    const handleTarefaClick = (tarefaID) => {
        const novasTarefas = tarefas.map((tarefa) => {
            if (tarefa.id === tarefaID) {
                return {
                    ... tarefa,
                    isCompleta: !tarefa.isCompleta
                }
            }

            return tarefa
        })

        setTarefa(novasTarefas)
    }

    const handleTarefaAdd = (tituloTarefa) => {
        id++;

        const novasTarefas = [ ... tarefas, {
            titulo: tituloTarefa,
            id: id,
            isCompleta: false,
        }]

        setTarefa(novasTarefas)
    }

    const handleTarefaDelete = (tarefaID) => {
        const novasTarefas = tarefas.filter(tarefa => tarefa.id !== tarefaID)
        setTarefa(novasTarefas)
    }

    const handleTarefaDetalhe = (tarefaID) => {
        const novasTarefas = tarefas.filter(tarefa => tarefa.id !== tarefaID)
        setTarefa(novasTarefas)
    }

    return (
        <React.Fragment>
            <AddTarefa handleTarefaAdd={handleTarefaAdd} />
            <Tarefas
                tarefas={tarefas}
                handleTarefaClick={handleTarefaClick}
                handleTarefaDelete={handleTarefaDelete}
                handleTarefaDetalhe={handleTarefaDetalhe}
            />
        </React.Fragment>
    )
}

export default Home