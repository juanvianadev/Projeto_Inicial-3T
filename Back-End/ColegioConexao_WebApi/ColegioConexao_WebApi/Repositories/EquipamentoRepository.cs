using ColegioConexao_WebApi.Contexts;
using ColegioConexao_WebApi.Domains;
using ColegioConexao_WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ColegioConexao_WebApi.Repositories
{
    public class EquipamentoRepository : IEquipamentoRepository
    {
        ConexaoContext ctx = new ConexaoContext();
        public void Atualizar(int id, Equipamento equipamentoAtualizado)
        {
            Equipamento equipamentoBuscado = ctx.Equipamentos.Find(id);

            if (equipamentoAtualizado.Marca != null)
            {
                equipamentoBuscado.Marca = equipamentoAtualizado.Marca;
            }

            if(equipamentoBuscado.Tipo != null)
            {
                equipamentoBuscado.Tipo = equipamentoAtualizado.Tipo;
            }

            if (equipamentoBuscado.NumSerie <= 0)
            {
                equipamentoBuscado.NumSerie = equipamentoAtualizado.NumSerie;
            }

            if (equipamentoBuscado.Descricao != null)
            {
                equipamentoBuscado.Descricao = equipamentoAtualizado.Descricao;
            }

            if (equipamentoBuscado.NumPatrimonio <= 0)
            {
                equipamentoBuscado.NumPatrimonio = equipamentoAtualizado.NumPatrimonio;
            }

            if (equipamentoBuscado.Status != null)
            {
                equipamentoBuscado.Status = equipamentoAtualizado.Status;
            }
        }

        public Equipamento BuscarPorId(int idEquipamento)
        {
            return ctx.Equipamentos.Find(idEquipamento);
        }

        public void Cadastrar(Equipamento novoEquipamento)
        {
            ctx.Equipamentos.Add(novoEquipamento);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Equipamentos.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Equipamento> Listar()
        {
            return ctx.Equipamentos.ToList();
        }
    }
}
