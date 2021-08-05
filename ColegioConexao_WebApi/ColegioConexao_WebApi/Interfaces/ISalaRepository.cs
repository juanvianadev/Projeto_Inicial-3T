using ColegioConexao_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace ColegioConexao_WebApi.Interfaces
{
    interface ISalaRepository
    {
        List<Sala> Listar();

        Sala BuscarPorId(int id);

        void Cadastrar(Sala novaSala);

        void Atualizar(int id, Sala salaAtualizada);

        void Deletar(int id);
    }
}
