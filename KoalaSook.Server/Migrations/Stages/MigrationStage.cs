using System.Collections.ObjectModel;

namespace KoalaSook.Server.Migrations.Stages;

/// <summary>
/// Defines a Stage that can be Invoked and Handled at different times from the code.
/// </summary>
internal class MigrationStage : Collection<CodeMigration>
{
    public MigrationStage(KoalaSookMigrationStageTypes stage)
    {
        Stage = stage;
    }

    public KoalaSookMigrationStageTypes Stage { get; }
}
