import React, { useState } from 'react'
import AddTarefa from './AddTarefa'
import Header from './Header';
import Tarefas from './Tarefas'

let id = 0;

const App = () => {
    // State: atualiza e renderiza o novo valor na tela
    const [tarefas, setTarefa] = useState([
        /*{ id: 1, titulo: "Aprender React", isCompleta: false },
        { id: 2, titulo: "Primeiro App React", isCompleta: true },*/
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

    return (
        <React.Fragment>
            <div className="container">
                <Header />
                <AddTarefa handleTarefa={handleTarefaAdd}/>
                <Tarefas
                    tarefas={tarefas}
                    handleTarefaClick={handleTarefaClick}
                    handleTarefaDelete={handleTarefaDelete}
                />
            </div>
        </React.Fragment>
    )
}

export default App