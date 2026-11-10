using System.Collections.Generic;
using KoalaSook.Database.Implementations.Entities;

namespace KoalaSook.Database.Implementations.Interfaces;

/// <summary>
/// An abstraction representing an entity that has permissions.
/// </summary>
public interface IHasPermissions
{
    /// <summary>
    /// Gets a collection containing this entity's permissions.
    /// </summary>
    ICollection<Permission> Permissions { get; }
}
