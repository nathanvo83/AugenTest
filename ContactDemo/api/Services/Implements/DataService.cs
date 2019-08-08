using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

using ContactAPI.Models;
using CsvHelper;
using ContactAPI.Services.Interfaces;

namespace ContactAPI.Services.Implements
{
    public class DataService : IDataService
    {
        public DataService()
        {
        }


        public Task<List<Contact>> GetDataFromCSV(string fileName)
        {
            // create Task
            Task<List<Contact>> task = new Task<List<Contact>>(() =>
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
            });

            // start Task
            task.Start();

            return task;
        }
    }
}
