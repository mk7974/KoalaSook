using KoalaSook.Database.Implementations;
using KoalaSook.Database.Implementations.Locking;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Logging.Abstractions;

namespace KoalaSook.Database.Providers.Sqlite.Migrations
{
    /// <summary>
    /// The design time factory for <see cref="KoalaSookDbContext"/>.
    /// This is only used for the creation of migrations and not during runtime.
    /// </summary>
    internal sealed class SqliteDesignTimeKoalaSookDbFactory : IDesignTimeDbContextFactory<KoalaSookDbContext>
    {
        public KoalaSookDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<KoalaSookDbContext>();
            optionsBuilder.UseSqlite("Data Source=koalasook.db", f => f.MigrationsAssembly(GetType().Assembly));

            return new KoalaSookDbContext(
                optionsBuilder.Options,
                NullLogger<KoalaSookDbContext>.Instance,
                new SqliteDatabaseProvider(null!, NullLogger<SqliteDatabaseProvider>.Instance),
                new NoLockBehavior(NullLogger<NoLockBehavior>.Instance));
        }
    }
}
