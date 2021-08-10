import '../../assets/css/login.css'
import { React, Component } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado} from '../../services/auth';

//IMAGENS
import logo from '../../assets/img/logolo.png';

class Login extends Component{
  constructor(props){
      super(props);
      this.state = {
          listaUsuarios:[],
          nome:'',
          email : '',
          senha : ''
      }
    }

    efetuaLogin = (event) =>{

      event.preventDefault();

      this.setState({ erroMensagem : '', isLoading : true });

      axios.post('http://localhost:5000/api/Login', {

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

            console.log(this.props);
  
            if (parseJwt()) {
                console.log(parseJwt())
                console.log(this.props);
  
                return this.props.history.push('/cadastros');
                console.log('estou logado: ' + usuarioAutenticado());
            }
  
            
        }
            // Se não for, redireciona para a página home
        else {
            this.props.history.push('/')
        }
        
    })
  
    // Caso haja um erro,
    .catch(() => {
        
        // define o state erroMensagem com uma mensagem personalizada e que a requisição terminou
      this.setState({ erroMensagem : 'E-mail ou senha inválidos! Tente novamente.', isLoading : false });
    })
  }

cadastrar = () => {
    this.setState({ isLoading : true });

    this.props.history.push('/cadastro')
  };

atualizaStateCampo = (campo) => {
  this.setState({ [campo.target.name] : campo.target.value })
};

render(){
    return (
        <div className="login">
            

            <div className="login-right">
                <div className="login-logo">
                <img className="logo-login" src={logo} alt="Logo Colégio Conexão"/>
                <h1>Login</h1>
            </div>
                
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
                    <p style={{ color : 'red', textAlign : 'center', fontSize: '0.8rem' }}>{this.state.erroMensagem}</p>
                <button type="submit">
                    Login
                </button>
                <div className="ou"><h4>ou</h4></div>
                
                <button onClick={this.cadastrar} 
                className="btn-login" type="button">
                    Cadastre-se
                </button>
                </form>

                
            </div>
        </div>
        )
    }
}

export default Login