
import { React, Component } from 'react';
import axios from 'axios';
import logo1 from '../../assets/img/logo1.png';
import logo2 from '../../assets/img/logo2.png';
import sair from '../../assets/img/sair.png';
import '../../assets/css/style.css';
import '../cadastro/cadastro';

class Registros extends Component{
  constructor(props){
      super(props);
      this.state = {
          value:'show',
          listaSala: [],
          listaEquipamento: [],
          idSala:0,
          idEquipamento:0,
          numPatrimonio:'',
          numSerie : '',
          nome : '',
          andar : '',
          marca : '',
          tipo : '',
          metragem : '',
          descricao : '',
          status: 0,
      }
    }

    
    buscarSala = () => {
      console.log('buscando salas')
      axios('http://localhost:5000/api/sala', {
          headers : {
              'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
          }
      })
      .then(resposta => {

          if (resposta.status === 200) {

              this.setState({ listaSala : resposta.data })

              console.log(this.state.listaSala);
          }
      })

      .catch(erro => console.log(erro))
  }

    buscarEquipamento = () => {
      console.log('buscando equipamentos')
      axios('http://localhost:5000/api/equipamento', {
          headers : {
              'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
          }
      })
      .then(resposta => {

          if (resposta.status === 200) {

              this.setState({ listaEquipamento : resposta.data })

              console.log(this.state.listaEquipamento);
          }
      })

      .catch(erro => console.log(erro))
  }


  realizarLogout = () => {

    this.setState({ isLoading : true });

    this.props.history.push('/Login')


  };

  
  registros = () => {

    this.setState({ isLoading : true });

    this.props.history.push('/registros')


  };
  
  cadastro = () => {

    this.setState({ isLoading : true });

    this.props.history.push('')


  };

  atualizaStateCampo = (campo) => {
    this.setState({ [campo.target.name] : campo.target.value })

  };

    divstatus = (e) =>{
      this.setState({value: e.target.value});
   }



   componentDidMount() {
    this.buscarSala();
    this.buscarEquipamento();
};

    
  render(){


    return(    
<div>

  <header>
    <div className="menu">
      
      <img className="logo1" src={logo1} alt="Logo Colégio Conexão"/>
       
        <div id="r">
          <button onClick={this.cadastro} type="button"> Cadastrar </button>
        </div>

        <div id="s">
          <button onClick={this.realizarLogout} type="button">Sair</button>
          <img className="sair" src={sair} alt="ícone sair"/>
        </div>

    </div>
  </header>

  <body>
      <div className="body">
          <div className="block">
              <div className="top" >
                <div>
                <img className="logo2" src={logo2} alt="Logo Colégio Conexão"/>
                </div>
                
                <h2 id="h2" >Registros</h2>
              </div>
              
              <h3 id="h3" >Salas ou equipamentos?</h3>
            <div className="sele">
            <select onChange={this.divstatus}  className="select">
              <option value="show">Equipamentos</option>
              <option value="hide">Salas</option>
              
            </select>           
        </div>
    <div>
 
        {/* { this.state.listaEquipamento.map((consulta)=> {
        return(    )
            })
        }       
        */}
                                    
                    
            <div className={this.state.value} id="equir" >
                < div>
                     { this.state.listaEquipamento.map((equi)=> {
                        return(  
                        <div className="colsr">
                            <div className="col1r"> 
                                <p className="iner"> Nome: {equi.descricao}</p>
                                <div className="linhar"/>
                                <p className="iner"> N° Série: {equi.numSerie}</p>
                                <div className="linhar"/>
                                <p className="iner"> N° Patrimônio: {equi.numPatrimonio}</p>
                                <div className="linhar"/>
                                <p className="iner"> Marca: {equi.marca}</p>
                                <div className="linhar"/>
                                <p className="iner"> N° Sala: {equi.idSala}</p>
                                <div className="linhar"/>
                                <p className="iner"> Tipo: {equi.tipo}</p>
                                <div className="linhar"/>
                                <p className="iner"> Status: {equi.status  ? 'Ativo' : 'Inativo'}</p>
                            </div> 
                         
                        </div>  )
                        })
                    }       
                </div>
            </div>   
                
    </div>  

  {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
              
          <div>   
                  <div id="salar" >
                  < div>
                     { this.state.listaSala.map((sala)=> {
                        return(  
                        <div className="colsr">
                            <div className="col1r"> 
                                <p className="iner"> N° Sala: {sala.idSala}</p>
                                <div className="linhar"/>
                                <p className="iner">Nome: {sala.nome}</p>
                                <div className="linhar"/>  
                                 
                                <p className="iner">Andar: {sala.andar}</p>
                                <div className="linhar"/>  
                                <p className="iner"> Metragem: {sala.metragem}</p>
                            </div> 
                         
                        </div>  )
                        })
                    }       
       
                  
                  </div>
              </div>


       </div>     

      </div>  
    </div>       
  </body>
</div>
  )};
}

export default Registros;
