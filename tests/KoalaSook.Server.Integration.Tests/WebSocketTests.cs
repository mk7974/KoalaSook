using System;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace KoalaSook.Server.Integration.Tests
{
    public sealed class WebSocketTests : IClassFixture<KoalaSookApplicationFactory>
    {
        private readonly KoalaSookApplicationFactory _factory;

        public WebSocketTests(KoalaSookApplicationFactory factory)
        {
            _factory = factory;
        }

        [Fact]
        public async Task WebSocket_Unauthenticated_ThrowsInvalidOperationException()
        {
            var server = _factory.Server;
            var client = server.CreateWebSocketClient();

            await Assert.ThrowsAsync<InvalidOperationException>(
                () => client.ConnectAsync(
                    new UriBuilder(server.BaseAddress)
                    {
                        Scheme = "ws",
                        Path = "websocket"
                    }.Uri,
                    CancellationToken.None));
        }
    }
}
