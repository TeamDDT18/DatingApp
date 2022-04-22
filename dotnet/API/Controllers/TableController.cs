using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;


namespace API.Controllers
{
    public class TableController : BaseApiController
    {
        private readonly DataContext _context;
        public TableController(DataContext context)
        {
            _context = context;
        }
        [HttpGet("orders")]
        public async Task <ActionResult<IEnumerable<Table>>> GetTable()
        {
            return await _context.Tables.ToListAsync();
        }

        [HttpGet("lengths")]
        public async Task <int> GetTableLengths()
        {
            return await _context.Tables.CountAsync();
        }
    }
}