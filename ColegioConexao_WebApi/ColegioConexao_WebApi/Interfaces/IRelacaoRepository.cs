using ColegioConexao_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ColegioConexao_WebApi.Interfaces
{
    interface IRelacaoRepository
    {
        Relacao BuscarPorId(int id);
    }
}
