#pragma warning disable CS1591
#pragma warning disable SA1601

using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KoalaSook.Server.Implementations.Migrations
{
    public partial class AddIndexesAndCollations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ImageInfos_Users_UserId",
                schema: "koalasook",
                table: "ImageInfos");

            migrationBuilder.DropForeignKey(
                name: "FK_Permissions_Users_Permission_Permissions_Guid",
                schema: "koalasook",
                table: "Permissions");

            migrationBuilder.DropForeignKey(
                name: "FK_Preferences_Users_Preference_Preferences_Guid",
                schema: "koalasook",
                table: "Preferences");

            migrationBuilder.DropIndex(
                name: "IX_Preferences_Preference_Preferences_Guid",
                schema: "koalasook",
                table: "Preferences");

            migrationBuilder.DropIndex(
                name: "IX_Permissions_Permission_Permissions_Guid",
                schema: "koalasook",
                table: "Permissions");

            migrationBuilder.DropIndex(
                name: "IX_DisplayPreferences_UserId",
                schema: "koalasook",
                table: "DisplayPreferences");

            migrationBuilder.DropIndex(
                name: "IX_CustomItemDisplayPreferences_UserId",
                schema: "koalasook",
                table: "CustomItemDisplayPreferences");

            migrationBuilder.AlterColumn<string>(
                name: "Username",
                schema: "koalasook",
                table: "Users",
                type: "TEXT",
                maxLength: 255,
                nullable: false,
                collation: "NOCASE",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldMaxLength: 255);

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                schema: "koalasook",
                table: "Preferences",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                schema: "koalasook",
                table: "Permissions",
                type: "TEXT",
                nullable: true);

            migrationBuilder.Sql("UPDATE Preferences SET UserId = Preference_Preferences_Guid");
            migrationBuilder.Sql("UPDATE Permissions SET UserId = Permission_Permissions_Guid");

            migrationBuilder.CreateIndex(
                name: "IX_Users_Username",
                schema: "koalasook",
                table: "Users",
                column: "Username",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Preferences_UserId_Kind",
                schema: "koalasook",
                table: "Preferences",
                columns: new[] { "UserId", "Kind" },
                unique: true,
                filter: "[UserId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Permissions_UserId_Kind",
                schema: "koalasook",
                table: "Permissions",
                columns: new[] { "UserId", "Kind" },
                unique: true,
                filter: "[UserId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_ImageInfos_Users_UserId",
                schema: "koalasook",
                table: "ImageInfos",
                column: "UserId",
                principalSchema: "koalasook",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Permissions_Users_UserId",
                schema: "koalasook",
                table: "Permissions",
                column: "UserId",
                principalSchema: "koalasook",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Preferences_Users_UserId",
                schema: "koalasook",
                table: "Preferences",
                column: "UserId",
                principalSchema: "koalasook",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ImageInfos_Users_UserId",
                schema: "koalasook",
                table: "ImageInfos");

            migrationBuilder.DropForeignKey(
                name: "FK_Permissions_Users_UserId",
                schema: "koalasook",
                table: "Permissions");

            migrationBuilder.DropForeignKey(
                name: "FK_Preferences_Users_UserId",
                schema: "koalasook",
                table: "Preferences");

            migrationBuilder.DropIndex(
                name: "IX_Users_Username",
                schema: "koalasook",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Preferences_UserId_Kind",
                schema: "koalasook",
                table: "Preferences");

            migrationBuilder.DropIndex(
                name: "IX_Permissions_UserId_Kind",
                schema: "koalasook",
                table: "Permissions");

            migrationBuilder.DropColumn(
                name: "UserId",
                schema: "koalasook",
                table: "Preferences");

            migrationBuilder.DropColumn(
                name: "UserId",
                schema: "koalasook",
                table: "Permissions");

            migrationBuilder.AlterColumn<string>(
                name: "Username",
                schema: "koalasook",
                table: "Users",
                type: "TEXT",
                maxLength: 255,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldMaxLength: 255,
                oldCollation: "NOCASE");

            migrationBuilder.CreateIndex(
                name: "IX_Preferences_Preference_Preferences_Guid",
                schema: "koalasook",
                table: "Preferences",
                column: "Preference_Preferences_Guid");

            migrationBuilder.CreateIndex(
                name: "IX_Permissions_Permission_Permissions_Guid",
                schema: "koalasook",
                table: "Permissions",
                column: "Permission_Permissions_Guid");

            migrationBuilder.CreateIndex(
                name: "IX_DisplayPreferences_UserId",
                schema: "koalasook",
                table: "DisplayPreferences",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomItemDisplayPreferences_UserId",
                schema: "koalasook",
                table: "CustomItemDisplayPreferences",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ImageInfos_Users_UserId",
                schema: "koalasook",
                table: "ImageInfos",
                column: "UserId",
                principalSchema: "koalasook",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Permissions_Users_Permission_Permissions_Guid",
                schema: "koalasook",
                table: "Permissions",
                column: "Permission_Permissions_Guid",
                principalSchema: "koalasook",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Preferences_Users_Preference_Preferences_Guid",
                schema: "koalasook",
                table: "Preferences",
                column: "Preference_Preferences_Guid",
                principalSchema: "koalasook",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
