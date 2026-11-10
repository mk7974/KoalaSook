using System.Collections.Generic;
using KoalaSook.Database.Implementations.Entities.Libraries;

namespace KoalaSook.Database.Implementations.Interfaces
{
    /// <summary>
    /// An abstraction representing an entity that has companies.
    /// </summary>
    public interface IHasCompanies
    {
        /// <summary>
        /// Gets a collection containing this entity's companies.
        /// </summary>
        ICollection<Company> Companies { get; }
    }
}
