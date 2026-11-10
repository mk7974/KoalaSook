using KoalaSook.LiveTv.Channels;
using KoalaSook.LiveTv.Guide;
using KoalaSook.LiveTv.IO;
using KoalaSook.LiveTv.Listings;
using KoalaSook.LiveTv.Recordings;
using KoalaSook.LiveTv.Timers;
using KoalaSook.LiveTv.TunerHosts;
using KoalaSook.LiveTv.TunerHosts.HdHomerun;
using MediaBrowser.Controller.Channels;
using MediaBrowser.Controller.LiveTv;
using MediaBrowser.Model.IO;
using Microsoft.Extensions.DependencyInjection;

namespace KoalaSook.LiveTv.Extensions;

/// <summary>
/// Live TV extensions for <see cref="IServiceCollection"/>.
/// </summary>
public static class LiveTvServiceCollectionExtensions
{
    /// <summary>
    /// Adds Live TV services to the <see cref="IServiceCollection"/>.
    /// </summary>
    /// <param name="services">The <see cref="IServiceCollection"/> to add services to.</param>
    public static void AddLiveTvServices(this IServiceCollection services)
    {
        services.AddSingleton<LiveTvDtoService>();
        services.AddSingleton<TimerManager>();
        services.AddSingleton<SeriesTimerManager>();
        services.AddSingleton<RecordingsMetadataManager>();

        services.AddSingleton<ILiveTvManager, LiveTvManager>();
        services.AddSingleton<IChannelManager, ChannelManager>();
        services.AddSingleton<IStreamHelper, StreamHelper>();
        services.AddSingleton<ITunerHostManager, TunerHostManager>();
        services.AddSingleton<IListingsManager, ListingsManager>();
        services.AddSingleton<IGuideManager, GuideManager>();
        services.AddSingleton<IRecordingsManager, RecordingsManager>();

        services.AddSingleton<ILiveTvService, DefaultLiveTvService>();
        services.AddSingleton<ITunerHost, HdHomerunHost>();
        services.AddSingleton<ITunerHost, M3UTunerHost>();
        services.AddSingleton<SchedulesDirect>();
        services.AddSingleton<IListingsProvider>(s => s.GetRequiredService<SchedulesDirect>());
        services.AddSingleton<ISchedulesDirectService>(s => s.GetRequiredService<SchedulesDirect>());
        services.AddSingleton<IListingsProvider, XmlTvListingsProvider>();
    }
}
