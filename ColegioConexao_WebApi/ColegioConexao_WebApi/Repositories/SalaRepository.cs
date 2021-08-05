using ColegioConexao_WebApi.Contexts;
using ColegioConexao_WebApi.Domains;
using ColegioConexao_WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ColegioConexao_WebApi.Repositories
{
    public class SalaRepository :ISalaRepository
    {
        ConexaoContext ctx = new ConexaoContext();

        public void Atualizar(int id, Sala salaAtualizada)
        {
            throw new NotImplementedException();
        }

        public Sala BuscarPorId(int idSala)
        {
            return ctx.Salas.Find(idSala);
        }

        public void Cadastrar(Sala novaSala)
        {
            ctx.Salas.Add(novaSala);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Salas.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Sala> Listar()
        {
            return ctx.Salas.ToList();
        }

    }
}
