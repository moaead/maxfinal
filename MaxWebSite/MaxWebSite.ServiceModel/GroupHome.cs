using ServiceStack.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaxWebSite.ServiceModel
{
    public class GroupHome
    {   
        public int Id { get; set; }
        public string GroupName {get; set;}
        [Ignore]
        public List<SubGroupHome> SubGroupHomeList {get; set;}
    }
}
