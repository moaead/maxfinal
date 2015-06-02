using ServiceStack.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaxWebSite.ServiceModel
{
    public class SubGroupHome
    {
        public int id { get; set; }
        public string SubGroupName {get; set;}
        [Reference]
        public int GroupHomeId { get; set; }
    }
}
