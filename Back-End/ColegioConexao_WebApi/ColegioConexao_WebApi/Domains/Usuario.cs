using System;
using System.Collections.Generic;

#nullable disable

namespace ColegioConexao_WebApi.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Relacaos = new HashSet<Relacao>();
        }

        public int IdUsuario { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        public virtual ICollection<Relacao> Relacaos { get; set; }
    }
}
