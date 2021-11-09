import React, { useState } from 'react';
import Button from './Button';

const AddTarefa = ({handleTarefa}) => {
    const [inputData, setInputData] = useState("")
    
    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTarefaClick = () => {
        handleTarefa(inputData)
        setInputData("") // Limpa o campo input
    }

    return (
        <div className="add-tarefa-container">
            <input
                onChange={handleInputChange}
                className="add-tarefa-input"
                type="text"
                value={inputData}
            />
            <div className="add-tarefa-btn">
                <Button onClick={handleAddTarefaClick}>Adicionar</Button>
            </div>
        </div>
    )
}

export default AddTarefa