using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactAPI.Models;
using ContactAPI.Services.Implements;
using ContactAPI.Services.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ContactAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowAll")]
    public class ContactsController : ControllerBase
    {
        private readonly IDataService dataService;

        public ContactsController(IDataService dataService)
        {
            this.dataService = dataService;
        }


        // GET: api/Contacts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> GetContacts()
        {
            List<Contact> contacts = await dataService.GetDataFromCSV("SampleData.csv");

            // get 4 fields FirstName, LastName, Email, Phone1
            List<Contact> temp = contacts.Select(c => new Contact() {
                FirstName=c.FirstName,
                LastName=c.LastName,
                Email=c.Email,
                Phone1=c.Phone1
            }).ToList();
            

            return temp;
        }
    }
}