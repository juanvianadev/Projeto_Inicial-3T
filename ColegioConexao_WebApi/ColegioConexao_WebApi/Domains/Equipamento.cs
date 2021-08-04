using System;
using System.Collections.Generic;

#nullable disable

namespace ColegioConexao_WebApi.Domains
{
    public partial class Equipamento
    {
        public Equipamento()
        {
            Relacaos = new HashSet<Relacao>();
        }

        public int IdEquipamento { get; set; }
        public int? IdSala { get; set; }
        public int NumPatrimonio { get; set; }
        public int NumSerie { get; set; }
        public string Marca { get; set; }
        public string Tipo { get; set; }
        public string Descricao { get; set; }
        public bool? Status { get; set; }

        public virtual Sala IdSalaNavigation { get; set; }
        public virtual ICollection<Relacao> Relacaos { get; set; }
    }
}
