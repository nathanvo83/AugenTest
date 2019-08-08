using ContactAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactAPI.Services.Interfaces
{
    public interface IDataService
    {
        Task<List<Contact>> GetDataFromCSV(string fileName);
    }
}
