using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JohnPJustice.Startup))]
namespace JohnPJustice
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
