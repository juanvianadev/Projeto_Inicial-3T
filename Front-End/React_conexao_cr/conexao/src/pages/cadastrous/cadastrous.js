import { React, Component  } from 'react';
import '../../assets/css/cadastro.css'
import axios from 'axios';

//IMAGENS
import logo from '../../assets/img/logolo.png';

class Cadastrous extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaUsuarios:[],
            nome: '',
            email : '',
            senha : ''
        }
      }

      buscarUsuarios(){


        axios('http://localhost:5000/api/usuarios', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(resposta => {
            if (resposta.status === 200) {

                this.setState({ listaUsuarios : resposta.data })
                console.log(this.state.listaEquipamento);
            };
        })

        .catch(erro => console.log(erro));
    }
      
    cadastraUsuario = (event) => {

        event.preventDefault();
        
        this.setState({ erroMensagem : '', isLoading : true });

        let usuario = {
            nome: this.state.nome,
            email : this.state.email,
            senha : this.state.senha
        };
  
        axios.post('http://localhost:5000/api/usuario', usuario, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
  
  
        .then(resposta => {
  
            if (resposta.status === 201) {
  
                console.log('Usuário Cadastrado!');
                this.setState({ isLoading : false });
                return this.props.history.push('/cadastros');
            }
        })
  
        .catch(erro => {
            console.log(erro);
            this.setState({ erroMensagem : 'Essa conta já existe tente outro e-mail.', isLoading : false });
        })
  
    };
  
  

    login = () => {
        this.setState({ isLoading : true });

        this.props.history.push('')
    };

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    };

    render() {
        return (
            <div className="cadastro">
                

                <div className="cadastro-right"> 
                <div className="cadastro-logo">
                    <img className="logo-cadas" src={logo} alt="Logo Colégio Conexão"/>
                    <h1>Cadastro</h1>
                </div>
                        
                <h2>Cadastre-se para <br/> acessar seus controles</h2>
                    <form onSubmit={this.cadastraUsuario}>
                        <div className="cadastro-cadastroInputNome">
                            <input
                                type="name"
                                placeholder="Nome"
                                name="nome"
                                value={this.state.nome}
                                onChange={this.atualizaStateCampo}
                            />
                        </div>
                            
                        <div className="cadastro-linha"></div>
                        <div className="cadastro-cadastroInputEmail">
                            <input
                                type="email"
                                placeholder="E-mail"
                                value={this.state.email}
                                onChange={this.atualizaStateCampo}
                                name="email"
                            />
                        </div>

                        <div className="cadastro-linha"></div>
                        <div className="cadastro-cadastroInputPassword">
                            <input
                                placeholder="Senha"
                                type="password"
                                value={this.state.senha}
                                onChange={this.atualizaStateCampo}
                                name="senha"
                            />
                        </div>
                            
                        <div className="cadastro-linha"></div>

                        <p style={{ color : 'red', textAlign : 'center', fontSize: '0.8rem' }}>{this.state.erroMensagem}</p>

                        <button type="submit">Cadastre-se</button>
                        <h4 className="ou">ou</h4>
                        <button onClick={this.login} type="button">Login</button>
                    </form>

                    </div>
                </div>  
        )
    }
}
export default Cadastrous