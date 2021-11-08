import React, { useState } from 'react';
import Button from './Button';

const AddTarefa = () => {
    const [inputData, setInputData] = useState("")
    
    const handleInputChange = (e) => {
        setInputData(e.target.value)
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
                <Button>Adicionar</Button>
            </div>
        </div>
    )
}

export default AddTarefa