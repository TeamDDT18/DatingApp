using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }
        //GET /api/users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {   
            var users = await _context.Users.ToListAsync();
            return users;
        }
        //GET /api/users
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {   
            var find = await _context.Users.FindAsync(id);
            if(find is null)
            {
                return NotFound();
            }
            return find;
        }





    }
}