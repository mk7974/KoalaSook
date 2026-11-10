using System;
using System.Threading;
using System.Threading.Tasks;
using KoalaSook.Database.Implementations;
using KoalaSook.Database.Implementations.Locking;
using KoalaSook.Database.Providers.Sqlite;
using KoalaSook.Server.Implementations.Security;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging.Abstractions;
using Moq;
using Xunit;

namespace KoalaSook.Server.Implementations.Tests.Security
{
    public sealed class AuthenticationManagerTests : IDisposable
    {
        private readonly SqliteConnection _connection;
        private readonly DbContextOptions<KoalaSookDbContext> _dbOptions;
        private readonly AuthenticationManager _authenticationManager;

        public AuthenticationManagerTests()
        {
            _connection = new SqliteConnection("Data Source=:memory:");
            _connection.Open();

            _dbOptions = new DbContextOptionsBuilder<KoalaSookDbContext>()
                .UseSqlite(_connection)
                .Options;

            // Create the schema
            using var ctx = CreateDbContext();
            ctx.Database.EnsureCreated();

            var factory = new Mock<IDbContextFactory<KoalaSookDbContext>>();
            factory.Setup(f => f.CreateDbContext()).Returns(CreateDbContext);
            factory.Setup(f => f.CreateDbContextAsync(It.IsAny<CancellationToken>()))
                .ReturnsAsync(CreateDbContext);

            _authenticationManager = new AuthenticationManager(factory.Object);
        }

        public void Dispose()
        {
            _connection.Dispose();
        }

        private KoalaSookDbContext CreateDbContext()
        {
            return new KoalaSookDbContext(
                _dbOptions,
                NullLogger<KoalaSookDbContext>.Instance,
                new SqliteDatabaseProvider(null!, NullLogger<SqliteDatabaseProvider>.Instance),
                new NoLockBehavior(NullLogger<NoLockBehavior>.Instance));
        }

        [Fact]
        public async Task CreateApiKey_ReturnsInfoMatchingStoredKey()
        {
            var created = await _authenticationManager.CreateApiKey("test-app");

            Assert.Equal("test-app", created.AppName);
            Assert.False(string.IsNullOrEmpty(created.AccessToken));

            var keys = await _authenticationManager.GetApiKeys();
            var stored = Assert.Single(keys);
            Assert.Equal(created.AppName, stored.AppName);
            Assert.Equal(created.AccessToken, stored.AccessToken);
        }

        [Fact]
        public async Task CreateApiKey_WithMultipleKeys_ReturnsDistinctTokens()
        {
            var first = await _authenticationManager.CreateApiKey("app1");
            var second = await _authenticationManager.CreateApiKey("app2");

            Assert.NotEqual(first.AccessToken, second.AccessToken);
        }
    }
}
