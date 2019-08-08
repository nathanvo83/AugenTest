using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactAPI.Models;
using ContactAPI.Services.Implements;
using ContactAPI.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ContactAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly IDataService dataService;

        public ContactsController()
        {
            dataService = new DataService();
        }


        // GET: api/Contacts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> GetContacts()
        {
            List<Contact> contacts = await dataService.GetDataFromCSV("SampleData.csv");
            return contacts;
        }
    }
}