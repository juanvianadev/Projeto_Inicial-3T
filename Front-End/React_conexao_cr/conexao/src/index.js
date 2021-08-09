import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './services/auth';

import './index.css';
import Cadastro from './pages/cadastro/cadastro';
import Registro from './pages/registros/registros';
import NotFound from './pages/notfound/notfound';
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Cadastro} /> {/* Home */}
        <Route exact path="/Registros" component={Registro} /> {/* Registros */}
        <Route exact path="/notfound" component={NotFound} /> {/* Not Found */}
        <Redirect to = "/notfound"/> {/* Redireciona para NotFound caso não encontre nenhuma rota */}
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();