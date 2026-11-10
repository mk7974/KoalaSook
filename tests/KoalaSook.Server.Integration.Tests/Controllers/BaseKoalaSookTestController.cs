using KoalaSook.Api;
using Microsoft.AspNetCore.Mvc;

namespace KoalaSook.Server.Integration.Tests.Controllers
{
    /// <summary>
    /// Base controller for testing infrastructure.
    /// Automatically ignored in generated openapi spec.
    /// </summary>
    [ApiExplorerSettings(IgnoreApi = true)]
    public class BaseKoalaSookTestController : BaseKoalaSookApiController
    {
    }
}
