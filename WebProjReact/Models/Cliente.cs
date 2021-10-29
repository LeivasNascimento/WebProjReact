using System.ComponentModel.DataAnnotations.Schema;

namespace WebProjReact.Models
{
    [Table("Cliente")]
    public class Cliente
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("nome")]
        public string Nome { get; set; }
        [Column("telefone")]
        public string Telefone { get; set; }
        [Column("endereco")]
        public string Endereco { get; set; }
    }
}
