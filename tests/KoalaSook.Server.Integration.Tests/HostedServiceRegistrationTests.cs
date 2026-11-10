using KoalaSook.Server.Implementations.Users;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Xunit;

namespace KoalaSook.Server.Integration.Tests;

public sealed class HostedServiceRegistrationTests : IClassFixture<KoalaSookApplicationFactory>
{
    private readonly KoalaSookApplicationFactory _factory;

    public HostedServiceRegistrationTests(KoalaSookApplicationFactory factory)
    {
        _factory = factory;
    }

    [Fact]
    public void DeviceAccessHost_IsRegisteredAsHostedService()
    {
        _ = _factory.CreateClient();

        var hostedServices = _factory.Services.GetServices<IHostedService>();

        Assert.Contains(hostedServices, service => service is DeviceAccessHost);
    }
}
