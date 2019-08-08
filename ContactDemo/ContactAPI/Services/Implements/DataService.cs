using ContactAPI.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

using ContactAPI.Models;
using ContactAPI.Services.Interfaces;
using CsvHelper;

namespace ContactAPI.Services.Implements
{
    public class DataService : IDataService
    {
        public DataService()
        {
        }

        public async Task<List<Contact>> GetDataFromCSV(string fileName)
        {
            List<Contact> result;
            using (TextReader fileReader = File.OpenText(fileName))
            {
                var csv = new CsvReader(fileReader);
                csv.Configuration.HasHeaderRecord = false;
                csv.Read();
                result = csv.GetRecords<Contact>().ToList();
            }

            return result;
        }
    }
}
