using System.Net;
using System.Threading.Tasks;
using Xunit;

namespace KoalaSook.Server.Integration.Tests.Controllers;

public sealed class MusicGenreControllerTests : IClassFixture<KoalaSookApplicationFactory>
{
    private readonly KoalaSookApplicationFactory _factory;
    private static string? _accessToken;

    public MusicGenreControllerTests(KoalaSookApplicationFactory factory)
    {
        _factory = factory;
    }

    [Fact]
    public async Task MusicGenres_FakeMusicGenre_NotFound()
    {
        var client = _factory.CreateClient();
        client.DefaultRequestHeaders.AddAuthHeader(_accessToken ??= await AuthHelper.CompleteStartupAsync(client));

        var response = await client.GetAsync("MusicGenres/Fake-MusicGenre", TestContext.Current.CancellationToken);
        Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
    }
}
