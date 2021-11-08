import React from 'react';

const Tarefa = ({ tarefa }) => {
    return (
        <div className="tarefa">{tarefa.titulo}</div>
    )
}

export default Tarefa