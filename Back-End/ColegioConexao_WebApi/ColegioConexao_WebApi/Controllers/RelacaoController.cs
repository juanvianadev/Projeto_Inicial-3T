using ColegioConexao_WebApi.Domains;
using ColegioConexao_WebApi.Interfaces;
using ColegioConexao_WebApi.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai_ColegioConexao_WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace ColegioConexao_WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RelacaoController : ControllerBase
    {
         private IRelacaoRepository _relacaoRepository { get; set; }

        public RelacaoController()
        {
            _relacaoRepository = new RelacaoRepository();
        }


        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(u => u.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(_relacaoRepository.Listar(idUsuario));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }


    }
}
