
import { React, Component } from 'react';
import axios from 'axios';
import logo1 from '../../assets/img/logo1.png';
import logo2 from '../../assets/img/logo2.png';
import sair from '../../assets/img/sair.png';
import '../../assets/css/style.css';
import '../cadastro/cadastro';

class cadastro extends Component{
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
      console.log('buscando sala do equipamneto')
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
      console.log('buscando sala do equipamneto')
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



    cadastrarSala = () => {

      this.setState({ isLoading : true });

      let sala = {
          idSala : this.state.idsala,
          nome: this.state.nome,
          andar : this.state.andar,
          metragem : this.state.metragem,
          marca : this.state.marca,
      };


      axios.post('http://localhost:5000/api/sala', sala, {
          headers : {
              'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
          }
      })


      .then(resposta => {

          if (resposta.status === 201) {

              console.log('Sala Cadastrada!');

              this.setState({ isLoading : false });
          }
      })

      .catch(erro => {
          console.log(erro);

          this.setState({ isLoading : false });
      })

  };


    cadastrarEquipamento = () => {

      this.setState({ isLoading : true });

      let equipamento = {  
          idSala : this.state.idsala,
          idEquipamento : this.state.idEquipamento,
          numPatrimonio: this.state.numPatrimonio,
          numSerie : this.state.numSerie,
          descricao : this.state.descricao,
          marca : this.state.marca,
          tipo : this.state.tipo,       
          status : parseInt(this.state.status)
      };

      axios.post('http://localhost:5000/api/equipamento', equipamento, {
          headers : {
              'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
          }
      })


      .then(resposta => {

          if (resposta.status === 201) {


              this.setState({ isLoading : false });
          }
      })


      .catch(erro => {
          console.log(erro);

          this.setState({ isLoading : false });
      })

  };

  
  realizarLogout = () => {

    this.setState({ isLoading : true });

    this.props.history.push('/Login')


  };

  

  atualizaStateCampo = (campo) => {
    this.setState({ [campo.target.name] : campo.target.value })

  };

  searchTerm = (event) => {
    
    this.setState({ setSearchTerm : event.target.value})

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
          <button onClick={this.registros} type="button"> Registros </button>
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
                
                <h2 id="h2" >Cadastro</h2>
              </div>
              
              <h3 id="h3" >Cadastro de salas ou equipamentos?</h3>
            <div className="sele">
            <select onChange={this.divstatus}  className="select">
              <option value="show">Equipamento</option>
              <option value="hide">Sala</option>
              
            </select>
            
            </div>
            
          
    <div>

  
                 
          <div className={this.state.value} id="equi" >
            < div>
                <form onSubmit={this.cadastrarEquipamento}>
                  <div className="cols">
                    <div className="col1">
                      <input  className="ine" value={this.state.descricao} 
                      type="text" name="descricao" placeholder="Nome"
                       onChange={this.atualizaStateCampo}/>
                    <div className="linha"/>
                    
                    <input  className="ine"  value={this.state.marca}
                      type="text" name="marca" placeholder="Marca"
                       onChange={this.atualizaStateCampo}/>
                      <div className="linha"/>
                      
                      <input  className="ine"  value={this.state.tipo}
                      type="text" name="tipo" placeholder="Tipo"
                       onChange={this.atualizaStateCampo}/>
                      <div className="linha"/>

                      <h4 id="h4" >Status</h4>

                      <select className="seleti2"  name="status" 
                        onChange={this.atualizaStateCampo}
                        value={this.state.status}>
                        <option value="0" >Inativo</option>
                        <option value="1">Ativo</option>
                      </select>

                    </div>

                    <div className="col2">

                    <input  className="ine"  value={this.state.numSerie} 
                      type="text" name="numSerie" placeholder="N° Série" 
                      onChange={this.atualizaStateCampo}/>
                    <div className="linha"/>

                      <input  className="ine"  value={this.state.numPatrimonio}
                      type="text" name="numPatrimonio" placeholder="N° Patrimônio"
                       onChange={this.atualizaStateCampo}/>
                    <div className="linha"/>

                      {/* <input  className="ine"  value={this.state.idSala}
                      type="text" name="idSala" placeholder="idSala"
                       onChange={this.atualizaStateCampo}/>
                    <div className="linha"/> */}
                    
                    <select className="seleti"  name="idSala" 
                      onChange={this.atualizaStateCampo}
                      value={this.state.idSala}>
                        <option value="0" disabled selected>Sala</option>
                      {this.state.listaEquipamento.map((equi) => {
                          return (
                            
                            <option key={equi.idSalaNavigation}>{equi.idSalaNavigation.nome}</option>
                          )
                        })
                      }  

                    </select> 
                      <div className="btn" >
                        <input className="butn2" type="submit" value="Cadastrar"></input>
                      </div>  
                      
                    </div>

                  </div>
                  
                  
                </form> 
            </div>
        </div>
   
          
     
    </div>  

  {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
              
          <div>   
                  <div id="sala" >
                  < div>
                      <form onSubmit={this.cadastrarSala}>
                        <input  className="ins" onChange={this.atualizaStateCampo}
                         value={this.state.nome} type="text" name="nome" placeholder="Nome"/>
                        <div className="linha"/>
  
                        <input  className="ins" onChange={this.atualizaStateCampo}
                        type="text" name="andar"  value={this.state.andar} placeholder="Andar"/>
                        <div className="linha"/>
                        
                        <input  className="ins" onChange={this.atualizaStateCampo}
                        type="text" name="metragem" value={this.state.metragem} placeholder="Metragem"/>
                        <div className="linha"/>
  
                        <div className="btn" >
                          <input className="butn" type="submit" value="Cadastrar"></input>
                        </div>   
  
                      </form> 
                  </div>
              </div>


       </div>     

      </div>  
    </div>       
  </body>
</div>
  )};
}

export default cadastro;
