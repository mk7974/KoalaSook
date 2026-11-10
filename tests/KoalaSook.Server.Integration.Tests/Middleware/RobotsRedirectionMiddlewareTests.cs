using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;

namespace KoalaSook.Server.Integration.Tests.Middleware
{
    public sealed class RobotsRedirectionMiddlewareTests : IClassFixture<KoalaSookApplicationFactory>
    {
        private readonly KoalaSookApplicationFactory _factory;

        public RobotsRedirectionMiddlewareTests(KoalaSookApplicationFactory factory)
        {
            _factory = factory;
        }

        [Fact]
        public async Task RobotsDotTxtRedirects()
        {
            var client = _factory.CreateClient(
                new WebApplicationFactoryClientOptions()
                {
                    AllowAutoRedirect = false
                });

            var response = await client.GetAsync("robots.txt", TestContext.Current.CancellationToken);

            Assert.Equal(HttpStatusCode.Redirect, response.StatusCode);
            Assert.Equal("web/robots.txt", response.Headers.Location?.ToString());
        }
    }
}
