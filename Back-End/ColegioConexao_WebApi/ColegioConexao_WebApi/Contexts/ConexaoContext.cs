using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using ColegioConexao_WebApi.Domains;

#nullable disable

namespace ColegioConexao_WebApi.Contexts
{
    public partial class ConexaoContext : DbContext
    {
        public ConexaoContext()
        {
        }

        public ConexaoContext(DbContextOptions<ConexaoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Equipamento> Equipamentos { get; set; }
        public virtual DbSet<Relacao> Relacaos { get; set; }
        public virtual DbSet<Sala> Salas { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-NF3KFQK\\SQLEXPRESS; initial catalog=Conexao; user Id=sa; pwd=Senai@132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Equipamento>(entity =>
            {
                entity.HasKey(e => e.IdEquipamento)
                    .HasName("PK__Equipame__75940D34DDD43C15");

                entity.HasIndex(e => e.NumPatrimonio, "UQ__Equipame__3A20CB6932308564")
                    .IsUnique();

                entity.HasIndex(e => e.NumSerie, "UQ__Equipame__A4FA1531FB7A51BC")
                    .IsUnique();

                entity.Property(e => e.IdEquipamento).HasColumnName("idEquipamento");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("descricao");

                entity.Property(e => e.IdSala).HasColumnName("idSala");

                entity.Property(e => e.Marca)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("marca");

                entity.Property(e => e.NumPatrimonio).HasColumnName("numPatrimonio");

                entity.Property(e => e.NumSerie).HasColumnName("numSerie");

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Tipo)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("tipo");

                entity.HasOne(d => d.IdSalaNavigation)
                    .WithMany(p => p.Equipamentos)
                    .HasForeignKey(d => d.IdSala)
                    .HasConstraintName("FK__Equipamen__idSal__3A81B327");
            });

            modelBuilder.Entity<Relacao>(entity =>
            {
                entity.HasKey(e => e.IdRelacao)
                    .HasName("PK__Relacao__63637860A11FD10D");

                entity.ToTable("Relacao");

                entity.Property(e => e.IdRelacao).HasColumnName("idRelacao");

                entity.Property(e => e.Entrada)
                    .HasColumnType("datetime")
                    .HasColumnName("entrada");

                entity.Property(e => e.IdEquipamento).HasColumnName("idEquipamento");

                entity.Property(e => e.IdSala).HasColumnName("idSala");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Saida)
                    .HasColumnType("datetime")
                    .HasColumnName("saida");

                entity.HasOne(d => d.IdEquipamentoNavigation)
                    .WithMany(p => p.Relacaos)
                    .HasForeignKey(d => d.IdEquipamento)
                    .HasConstraintName("FK__Relacao__idEquip__4316F928");

                entity.HasOne(d => d.IdSalaNavigation)
                    .WithMany(p => p.Relacaos)
                    .HasForeignKey(d => d.IdSala)
                    .HasConstraintName("FK__Relacao__idSala__412EB0B6");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Relacaos)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Relacao__idUsuar__4222D4EF");
            });

            modelBuilder.Entity<Sala>(entity =>
            {
                entity.HasKey(e => e.IdSala)
                    .HasName("PK__Salas__C4AEB19C7AF52049");

                entity.Property(e => e.IdSala).HasColumnName("idSala");

                entity.Property(e => e.Andar)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("andar");

                entity.Property(e => e.Metragem)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("metragem");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("nome");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuarios__645723A610211569");

                entity.HasIndex(e => e.Email, "UQ__Usuarios__AB6E61646FE7C43B")
                    .IsUnique();

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("senha");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
