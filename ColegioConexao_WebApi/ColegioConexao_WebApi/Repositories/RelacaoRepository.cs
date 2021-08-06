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

        public void Atualizar(int id, Relacao relacaoAtualizada)
        {
            Relacao relacaoBuscada = ctx.Relacaos.Find(id);

            //if (relacaoAtualizada.Entrada != DateTime.Now)
            //{
            //    relacaoBuscada.Entrada = relacaoAtualizada.Entrada;
            //}

            //if (relacaoAtualizada.Saida != DateTime.Now)
            //{
            //    relacaoBuscada.Saida = relacaoAtualizada.Saida;
            //}

            ctx.SaveChanges();
        }

        //public Relacao BuscarPorId(int id)
        //{
        //    return ctx.Relacaos.Find(idRelacao);
        //}

        public void Cadastrar(Relacao novaRelacao)
        {
            ctx.Relacaos.Add(novaRelacao);

            ctx.SaveChanges();
        }

        //public void Deletar(int id)
        //{
        //    ctx.Relacaos.Remove(BuscarPorId(id));

        //    ctx.SaveChanges();
        //}

        public List<Relacao> Listar()
        {
            return ctx.Relacaos.ToList();
        }

    }
}
