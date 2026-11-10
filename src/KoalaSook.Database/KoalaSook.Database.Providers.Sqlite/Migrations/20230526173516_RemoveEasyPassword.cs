using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KoalaSook.Server.Implementations.Migrations
{
    /// <inheritdoc />
    public partial class RemoveEasyPassword : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EasyPassword",
                schema: "koalasook",
                table: "Users");

            migrationBuilder.RenameTable(
                name: "Users",
                schema: "koalasook",
                newName: "Users");

            migrationBuilder.RenameTable(
                name: "Preferences",
                schema: "koalasook",
                newName: "Preferences");

            migrationBuilder.RenameTable(
                name: "Permissions",
                schema: "koalasook",
                newName: "Permissions");

            migrationBuilder.RenameTable(
                name: "ItemDisplayPreferences",
                schema: "koalasook",
                newName: "ItemDisplayPreferences");

            migrationBuilder.RenameTable(
                name: "ImageInfos",
                schema: "koalasook",
                newName: "ImageInfos");

            migrationBuilder.RenameTable(
                name: "HomeSection",
                schema: "koalasook",
                newName: "HomeSection");

            migrationBuilder.RenameTable(
                name: "DisplayPreferences",
                schema: "koalasook",
                newName: "DisplayPreferences");

            migrationBuilder.RenameTable(
                name: "Devices",
                schema: "koalasook",
                newName: "Devices");

            migrationBuilder.RenameTable(
                name: "DeviceOptions",
                schema: "koalasook",
                newName: "DeviceOptions");

            migrationBuilder.RenameTable(
                name: "CustomItemDisplayPreferences",
                schema: "koalasook",
                newName: "CustomItemDisplayPreferences");

            migrationBuilder.RenameTable(
                name: "ApiKeys",
                schema: "koalasook",
                newName: "ApiKeys");

            migrationBuilder.RenameTable(
                name: "ActivityLogs",
                schema: "koalasook",
                newName: "ActivityLogs");

            migrationBuilder.RenameTable(
                name: "AccessSchedules",
                schema: "koalasook",
                newName: "AccessSchedules");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "koalasook");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "Users",
                newSchema: "koalasook");

            migrationBuilder.RenameTable(
                name: "Preferences",
                newName: "Preferences",
                newSchema: "koalasook");

            migrationBuilder.RenameTable(
                name: "Permissions",
                newName: "Permissions",
                newSchema: "koalasook");

            migrationBuilder.RenameTable(
                name: "ItemDisplayPreferences",
                newName: "ItemDisplayPreferences",
                newSchema: "koalasook");

            migrationBuilder.RenameTable(
                name: "ImageInfos",
                newName: "ImageInfos",
                newSchema: "koalasook");

            migrationBuilder.RenameTable(
                name: "HomeSection",
                newName: "HomeSection",
                newSchema: "koalasook");

            migrationBuilder.RenameTable(
                name: "DisplayPreferences",
                newName: "DisplayPreferences",
                newSchema: "koalasook");

            migrationBuilder.RenameTable(
                name: "Devices",
                newName: "Devices",
                newSchema: "koalasook");

            migrationBuilder.RenameTable(
                name: "DeviceOptions",
                newName: "DeviceOptions",
                newSchema: "koalasook");

            migrationBuilder.RenameTable(
                name: "CustomItemDisplayPreferences",
                newName: "CustomItemDisplayPreferences",
                newSchema: "koalasook");

            migrationBuilder.RenameTable(
                name: "ApiKeys",
                newName: "ApiKeys",
                newSchema: "koalasook");

            migrationBuilder.RenameTable(
                name: "ActivityLogs",
                newName: "ActivityLogs",
                newSchema: "koalasook");

            migrationBuilder.RenameTable(
                name: "AccessSchedules",
                newName: "AccessSchedules",
                newSchema: "koalasook");

            migrationBuilder.AddColumn<string>(
                name: "EasyPassword",
                schema: "koalasook",
                table: "Users",
                type: "TEXT",
                maxLength: 65535,
                nullable: true);
        }
    }
}
