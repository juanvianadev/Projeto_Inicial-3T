using System;
using System.Collections.Generic;

#nullable disable

namespace ColegioConexao_WebApi.Domains
{
    public partial class Sala
    {
        public Sala()
        {
            Equipamentos = new HashSet<Equipamento>();
            Relacaos = new HashSet<Relacao>();
        }

        public int IdSala { get; set; }
        public string Nome { get; set; }
        public string Andar { get; set; }
        public string Metragem { get; set; }

        public virtual ICollection<Equipamento> Equipamentos { get; set; }
        public virtual ICollection<Relacao> Relacaos { get; set; }
    }
}
