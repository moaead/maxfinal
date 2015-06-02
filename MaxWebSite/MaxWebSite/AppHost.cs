using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using Funq;
using ServiceStack.Razor;
using ServiceStack;
using ServiceStack.Data;
using ServiceStack.OrmLite;
using ServiceStack.Configuration;
using ServiceStack.OrmLite.SqlServer;
using MaxWebSite.ServiceInterface;

namespace MaxWebSite
{
    public class AppHost : AppHostBase
    {
        /// <summary>
        /// Default constructor.
        /// Base constructor requires a name and assembly to locate web service classes. 
        /// </summary>
        public AppHost()
            : base("MaxWebSite", typeof(MyServices).Assembly)
        {

        }

        /// <summary>
        /// Application specific configuration
        /// This method should initialize any IoC resources utilized by your web service classes.
        /// </summary>
        /// <param name="container"></param>
        public override void Configure(Container container)
        {
            //Config examples
            //this.Plugins.Add(new PostmanFeature());
            //this.Plugins.Add(new CorsFeature());

            this.Plugins.Add(new RazorFormat());

        
            var conFactory = new OrmLiteConnectionFactory(@"Server=MOAEAD\SQLEXPRESS;Database=MaxDb;Trusted_Connection=true;Integrated Security=SSPI", SqlServerOrmLiteDialectProvider.Instance, true);
                conFactory.RegisterConnection(
                    "LiveFeed",
                    "Server=.;Database=LiveFeed;Trusted_Connection=true;Integrated Security=SSPI",
                    SqlServerOrmLiteDialectProvider.Instance);
                container.Register<IDbConnectionFactory>(c => conFactory);
        }
    }
}