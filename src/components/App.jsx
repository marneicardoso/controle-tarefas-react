import React, { useState } from 'react'
import AddTarefa from './AddTarefa'
import Tarefas from './Tarefas'

const App = () => {
    // State: atualiza e renderiza o novo valor na tela
    const [tarefa, setTarefa] = useState([
        { id: 1, titulo: "Aprender React", isCompleta: false },
        { id: 2, titulo: "Primeiro App React", isCompleta: true },
        { id: 3, titulo: "Teste", isCompleta: true },
    ])

    return (
        <React.Fragment>
            <div className="container">
                <AddTarefa />
                <Tarefas tarefas={tarefa}/>
            </div>
        </React.Fragment>
    )
}

export default App