using ColegioConexao_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ColegioConexao_WebApi.Interfaces
{
    interface IRelacaoRepository
    {
        //Relacao BuscarPorId(int id);

        List<Relacao> Listar();

        void Cadastrar(Relacao novaRelacao);

        void Atualizar(int id, Relacao relacaoAtualizada);

        //void Deletar(int id);
    }
}
