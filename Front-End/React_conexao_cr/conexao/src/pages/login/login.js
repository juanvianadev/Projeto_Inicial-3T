import '../../assets/css/login.css'
import { React, Component, useState  } from 'react';
import axios from 'axios';
import { parseJwt} from '../../services/auth';

//IMAGENS
// import logo from '../../assets/img/logolo';

class Login extends Component{
  constructor(props){
      super(props);
      this.state = {
          listaConsultas : [],
          nome:'',
          email : '',
          senha : ''
      }
    }

    efetuaLogin = (event) =>{

      event.preventDefault();

      this.setState({ erroMensagem : '', isLoading : true });

      axios.post('http://localhost:5000/api/Login', {

      nomeUsuario: this.state.senha,
      email: this.state.email,
      senha: this.state.senha
      
    })

    .then(resposta => {
      
      if (resposta.status === 200) {
          
          localStorage.setItem('usuario-login', resposta.data.token);
         
          console.log('Meu token é: ' + resposta.data.token);
         
          this.setState({ isLoading : false })

          let base64 = localStorage.getItem('usuario-login').split('.')[1];

          console.log(base64);
          console.log(window.atob(base64));
          console.log(JSON.parse(window.atob(base64)));
          console.log(parseJwt().role);
            
          return this.props.history.push('/cadastros');
      
      }
  })


  .catch(() => {
      this.setState({ erroMensagem : 'E-mail ou senha inválidos! Tente novamente.', isLoading : false });
  })
}

atualizaStateCampo = (campo) => {
  this.setState({ [campo.target.name] : campo.target.value })
};

render(){
    return (
        <div className="login">
            <div className="login-logo">
                
            </div>

            <div className="login-right">
                <h1>Login</h1>
                <h2>Faça login para acessar <br/> os seus controles</h2>
                <form onSubmit={this.efetuaLogin}>
                    <div className="login-loginInputEmail">
                        
                        <input
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            value={this.state.email}
                            onChange={this.atualizaStateCampo}
                        />
                        
                    </div>
                    <div className="login-linha"></div>
                    <div className="login-loginInputPassword">
                        <input 
                            name="senha"
                            placeholder="Senha"
                            type="password"
                            value={this.state.senha}
                            onChange={this.atualizaStateCampo}

                        />
                    </div>
                    <div className="login-linha"></div>
                <button type="submit">
                    Login
                </button>
                <div className="ou"><h4>ou</h4></div>
                </form>

                <button type="button">
                    Cadastre-se
                </button>
            </div>
        </div>
        )
    }
}

export default Login