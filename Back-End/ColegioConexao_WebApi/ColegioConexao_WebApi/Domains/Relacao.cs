using System;
using System.Collections.Generic;

#nullable disable

namespace ColegioConexao_WebApi.Domains
{
    public partial class Relacao
    {
        public int IdRelacao { get; set; }
        public int? IdSala { get; set; }
        public int? IdUsuario { get; set; }
        public int? IdEquipamento { get; set; }
        public DateTime Entrada { get; set; }
        public DateTime Saida { get; set; }

        public virtual Equipamento IdEquipamentoNavigation { get; set; }
        public virtual Sala IdSalaNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
