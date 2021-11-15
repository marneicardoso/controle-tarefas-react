import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Header'
import Detalhes from './Detalhes'
import Home from './home'

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Detalhes"  element={Detalhes} exact />
                    {/* <Route path="/:tituloTarefa" element={<Detalhes />} /> */}
                </Routes>
            </div>
        </BrowserRouter>
    )

    /*return (
        <BrowserRouter>
            <div className="container">
                <Header />

                <Routes>
                    <Route
                        path="/"
                        exact
                        element={() => (
                            <React.Fragment>
                                <AddTarefa handleTarefaAdd={handleTarefaAdd}/>
                                <Tarefas
                                    tarefas={tarefas}
                                    handleTarefaClick={handleTarefaClick}
                                    handleTarefaDelete={handleTarefaDelete}
                                    handleTarefaDetalhe={handleTarefaDetalhe}
                                />
                            </React.Fragment>
                        )}
                    />
                    {/* <Route
                        path="/:tituloTarefa"
                        exact
                        element={Detalhes}    
                    /> *}
                </Routes>
            </div>
        </BrowserRouter>
    )*/

    /*return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <AddTarefa handleTarefa={handleTarefaAdd}/>
                <Tarefas
                    tarefas={tarefas}
                    handleTarefaClick={handleTarefaClick}
                    handleTarefaDelete={handleTarefaDelete}
                    handleTarefaDetalhe={handleTarefaDetalhe}
                />
            </div>
        </BrowserRouter>
    )*/
}

export default App