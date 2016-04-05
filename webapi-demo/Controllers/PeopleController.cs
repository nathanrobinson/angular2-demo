using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Cors;
using webapi_demo.Models;

namespace webapi_demo.Controllers
{
    [EnableCors("AllowLocalhost")]
    [Route("api/[controller]")]
    public class PeopleController : Controller
    {
        private static readonly List<Person> _people = new List<Person> {
            new Person { Id = 1, Name = "William B. Pordobell" },
            new Person { Id = 2, Name = "John Matuszak" },
            new Person { Id = 3, Name = "Tooz" },
            new Person { Id = 4, Name = "Errol Flynn" },
            new Person { Id = 5, Name = "Joe Pantoliano" },
            new Person { Id = 6, Name = "Richard Donner" },
            new Person { Id = 7, Name = "Robert Davi" },
            new Person { Id = 8, Name = "Jeff Cohen" },
            new Person { Id = 9, Name = "Kerri Green" },
        };
        // GET: api/people
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return _people.OrderBy(x => x.Id);
        }

        // GET api/people/5
        [HttpGet("{id}")]
        public Person Get(int id)
        {
            return _people.FirstOrDefault(x => x.Id == id);
        }

        // POST api/people
        [HttpPost]
        public Person Post([FromBody]Person value)
        {
            var newId = _people.Max(x => x.Id) + 1;
            value.Id = newId;
            _people.Add(value);
            return value;
        }

        // PUT api/people/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Person value)
        {
            var match = _people.FirstOrDefault(x => x.Id == id);
            if(match != null)
            {
                match.Name = value.Name;
            }            
        }

        // DELETE api/people/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _people.RemoveAll(x => x.Id == id);
        }
    }
}
