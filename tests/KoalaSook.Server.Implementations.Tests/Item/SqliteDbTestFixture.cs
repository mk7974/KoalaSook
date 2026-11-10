using System;
using System.Threading;
using Emby.Server.Implementations.Data;
using KoalaSook.Database.Implementations;
using KoalaSook.Database.Implementations.Locking;
using KoalaSook.Database.Providers.Sqlite;
using KoalaSook.Server.Implementations.Item;
using MediaBrowser.Common.Configuration;
using MediaBrowser.Controller;
using MediaBrowser.Controller.Configuration;
using MediaBrowser.Model.Configuration;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.Extensions.Logging.Abstractions;
using Moq;

namespace KoalaSook.Server.Implementations.Tests.Item;

/// <summary>
/// Base fixture for the item tests that run against the SQLite provider: one in-memory database per
/// test class, plus the wiring the repositories under test need. The connection owns the database, so
/// it stays open for the lifetime of the fixture. Derived classes seed in their own constructor.
/// </summary>
public abstract class SqliteDbTestFixture : IDisposable
{
    private readonly SqliteConnection _connection;
    private readonly DbContextOptions<KoalaSookDbContext> _dbOptions;

    protected SqliteDbTestFixture(params IInterceptor[] interceptors)
    {
        ApplicationPaths = new Mock<IApplicationPaths>().Object;

        _connection = new SqliteConnection("Data Source=:memory:");
        _connection.Open();

        _dbOptions = new DbContextOptionsBuilder<KoalaSookDbContext>()
            .UseSqlite(_connection)
            .AddInterceptors(interceptors)
            .Options;

        using var context = CreateDbContext();
        context.Database.EnsureCreated();
    }

    protected IApplicationPaths ApplicationPaths { get; }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    protected KoalaSookDbContext CreateDbContext() => new(
        _dbOptions,
        NullLogger<KoalaSookDbContext>.Instance,
        new SqliteDatabaseProvider(ApplicationPaths, NullLogger<SqliteDatabaseProvider>.Instance),
        new NoLockBehavior(NullLogger<NoLockBehavior>.Instance));

    protected IDbContextFactory<KoalaSookDbContext> CreateDbContextFactory()
    {
        var factory = new Mock<IDbContextFactory<KoalaSookDbContext>>();
        factory.Setup(f => f.CreateDbContext()).Returns(CreateDbContext);
        factory.Setup(f => f.CreateDbContextAsync(It.IsAny<CancellationToken>()))
            .ReturnsAsync(CreateDbContext);

        return factory.Object;
    }

    protected BaseItemRepository CreateBaseItemRepository(ItemTypeLookup itemTypeLookup)
    {
        var serverConfigurationManager = new Mock<IServerConfigurationManager>();
        serverConfigurationManager.Setup(c => c.Configuration).Returns(new ServerConfiguration());

        return new BaseItemRepository(
            CreateDbContextFactory(),
            new Mock<IServerApplicationHost>().Object,
            itemTypeLookup,
            serverConfigurationManager.Object,
            NullLogger<BaseItemRepository>.Instance);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (disposing)
        {
            _connection.Dispose();
        }
    }
}
