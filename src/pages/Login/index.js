import React, { useState } from 'react'
import './login.css'
import logo1 from '../../assets/img/logo1.png';


function Login() {
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [show] = useState (false)
    return (
        <div className="login">
            

            <div className="login-right">
                <div className="logotitulo">
                <img className="logo1" src={logo1} alt="Logo Colégio Conexão"/>            
                <h1>Login</h1>
                </div>
                <h2>Faça login para acessar os seus controles</h2>
                
                <div className="login-loginInputEmail">
                    
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="login-loginInputPassword">

                    <input
                        placeholder="Senha"
                        type={show ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}

                    />
                    
                </div>

                <button type="submit">
                    Login
                </button>
                <h4>Ou</h4>

                <button type="submit">
                    Cadastre-se
                </button>
            </div>
        </div>
    )
}

export default Login