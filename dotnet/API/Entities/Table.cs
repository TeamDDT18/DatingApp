using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Table
    {
        public int Id { get; set; }
        public string Date { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public double OrderTotal { get; set; }
        public string PaymentMode { get; set; }
        
    }
}