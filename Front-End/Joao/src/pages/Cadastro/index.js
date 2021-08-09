import React from 'react'
import './cadastro.css'

function Cadastro() {

    return (
        <div className="cadastro">
            <div className="cadastro-logo">
                
            </div>

            <div className="cadastro-right">
                <h1>Cadastro</h1>
                <h2>Cadastre-se para acessar seus controles</h2>

                <div className="cadastro-cadastroInputNome">
                    <input
                            type="name"
                            placeholder="Nome"
                    />
                </div>

                <div className="cadastro-cadastroInputEmail">
                    <input
                            type="email"
                            placeholder="E-mail"
                            
                    />
                </div>

                <div className="cadastro-cadastroInputPassword">
                    <input
                            placeholder="Senha"
                            type="password"
                            
                        />
                </div>

                <button type="submit">
                    Cadastre-se
                </button>
                <h4>Ou</h4>

                <button type="submit">
                    Login
                </button>

            </div>
        </div>
        
    )
}

export default Cadastro