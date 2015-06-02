using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack;
using MaxWebSite.ServiceModel;
using ServiceStack.Data;
using ServiceStack.OrmLite;

namespace MaxWebSite.ServiceInterface
{
    public class MyServices : Service
    {
        public IDbConnectionFactory DbConnectionFactory { get; set; }
        public object Any(GetGroupHome request)
        {
            var groupHome = Db.Select<GroupHome>();
            foreach(var oneGroup in groupHome){
                oneGroup.SubGroupHomeList = Db.Select<SubGroupHome>().Where(t => t.GroupHomeId == oneGroup.Id).ToList();
            }
            return groupHome;
        }
    }
}