using ColegioConexao_WebApi.Domains;
using ColegioConexao_WebApi.Interfaces;
using ColegioConexao_WebApi.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai_lovePets_webApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ColegioConexao_WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipamentoController : ControllerBase
    {
        private IEquipamentoRepository _equipamentoRepository { get; set; }

        public EquipamentoController()
        {
            _equipamentoRepository = new EquipamentoRepository();
        }

        //[Authorize(Roles = "")]
        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_equipamentoRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //[Authorize(Roles = "")]
        [HttpGet("{idEquipamento}")]
        public IActionResult BuscarPorId(int idEquipamento)
        {
            try
            {
                return Ok(_equipamentoRepository.BuscarPorId(idEquipamento));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //[Authorize(Roles = "")]
        [HttpPost]
        public IActionResult Cadastrar(Equipamento novoEquipamento)
        {
            try
            {
                _equipamentoRepository.Cadastrar(novoEquipamento);

                return StatusCode(201);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //[Authorize(Roles = "")]
        [HttpPut("{idEquipamento}")]
        public IActionResult Atualizar(int idEquipamento, Equipamento equipamentoAtualizado)
        {
            try
            {
                _equipamentoRepository.Atualizar(idEquipamento, equipamentoAtualizado);

                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //[Authorize(Roles = "")]
        [HttpDelete("{idEquipamento}")]
        public IActionResult Deletar(int idEquipamento)
        {
            try
            {
                _equipamentoRepository.Deletar(idEquipamento);

                return StatusCode(204);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

    }
}
