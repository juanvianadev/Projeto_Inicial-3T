using ColegioConexao_WebApi.Contexts;
using ColegioConexao_WebApi.Domains;
using ColegioConexao_WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ColegioConexao_WebApi.Repositories
{
    public class RelacaoRepository : IRelacaoRepository
    {

        ConexaoContext ctx = new ConexaoContext();

        public Relacao BuscarPorId(int id)
        {
            //return ctx.Relacaos.Find(idRelacao);
        }
    }
}
