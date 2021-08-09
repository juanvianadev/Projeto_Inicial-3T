using ColegioConexao_WebApi.Domains;
using ColegioConexao_WebApi.Interfaces;
using ColegioConexao_WebApi.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai_ColegioConexao_WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ColegioConexao_WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalaController : ControllerBase
    {
        private ISalaRepository _salaRepository { get; set; }

        public SalaController()
        {
            _salaRepository = new SalaRepository();
        }

        //[Authorize(Roles = "")]
        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_salaRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //[Authorize(Roles = "")]
        [HttpGet("{idSala}")]
        public IActionResult BuscarPorId(int idSala)
        {
            try
            {
                return Ok(_salaRepository.BuscarPorId(idSala));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //[Authorize(Roles = "")]
        [HttpPost]
        public IActionResult Cadastrar(Sala novaSala)
        {
            try
            {
                _salaRepository.Cadastrar(novaSala);

                return StatusCode(201);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //[Authorize(Roles = "")]
        [HttpPut("{idSala}")]
        public IActionResult Atualizar(int idSala, Sala salaAtualizada)
        {
            try
            {
                _salaRepository.Atualizar(idSala, salaAtualizada);

                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //[Authorize(Roles = "")]
        [HttpDelete("{idSala}")]
        public IActionResult Deletar(int idSala)
        {
            try
            {
                _salaRepository.Deletar(idSala);

                return StatusCode(204);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }
    }
}
