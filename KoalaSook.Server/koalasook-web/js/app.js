/**
 * Koala Sook Web Client
 * Rich Media Frontend: Media Controls, My Library, Watch Party Mode, Discover Page (PG-12)
 */

// Embedded Dummy Media Catalog (PG-12 Certified Family-Safe Content)
const SAMPLE_MOVIES = [
    {
        id: "sintel",
        title: "Sintel",
        year: 2010,
        duration: "15 min",
        durationSec: 900,
        rating: 8.4,
        ratingTag: "PG-12",
        genres: ["Animation", "Fantasy", "Drama"],
        moods: ["creative", "sci-fi", "family"],
        overview: "A lonely young woman named Sintel searches for a baby dragon she befriended and nursed back to health after it is snatched away by a ferocious winged beast.",
        studio: "Blender Animation Studio (Creative Commons 3.0)",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
        trendingRank: 1,
        progressPercent: 68,
        resumeTimeSec: 612
    },
    {
        id: "big-buck-bunny",
        title: "Big Buck Bunny",
        year: 2008,
        duration: "10 min",
        durationSec: 600,
        rating: 8.1,
        ratingTag: "PG",
        genres: ["Animation", "Comedy", "Adventure"],
        moods: ["feel-good", "family", "creative"],
        overview: "A large and lovable rabbit deals with bullying forest creatures—a flying squirrel, a red squirrel, and a chinchilla—who torment gentle critters until Bunny decides to retaliate.",
        studio: "Blender Animation Studio (Creative Commons 3.0)",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        poster: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1511497584788-87676104235f?w=1600&auto=format&fit=crop&q=80",
        trendingRank: 2,
        progressPercent: 42,
        resumeTimeSec: 252
    },
    {
        id: "tears-of-steel",
        title: "Tears of Steel",
        year: 2012,
        duration: "12 min",
        durationSec: 720,
        rating: 7.9,
        ratingTag: "PG-12",
        genres: ["Sci-Fi", "Action", "Adventure"],
        moods: ["sci-fi", "creative"],
        overview: "Set in a dystopian Amsterdam, scientists and roboticists attempt to save humanity from catastrophic destruction with tentacle-equipped automated sentinels.",
        studio: "Blender VFX Foundation (Creative Commons 3.0)",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        poster: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80",
        trendingRank: 3,
        progressPercent: 85,
        resumeTimeSec: 610
    },
    {
        id: "elephants-dream",
        title: "Elephants Dream",
        year: 2006,
        duration: "11 min",
        durationSec: 660,
        rating: 7.6,
        ratingTag: "PG-12",
        genres: ["Sci-Fi", "Animation", "Drama"],
        moods: ["creative", "sci-fi"],
        overview: "The world's first open-source 3D film. Proog and Emo journey through a giant, bizarre machine world where thoughts materialize into mechanical and organic labyrinths.",
        studio: "Orange Open Movie Project (Creative Commons 2.5)",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        poster: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&auto=format&fit=crop&q=80",
        trendingRank: 4,
        progressPercent: 0,
        resumeTimeSec: 0
    },
    {
        id: "cosmos-laundromat",
        title: "Cosmos Laundromat",
        year: 2015,
        duration: "12 min",
        durationSec: 720,
        rating: 8.3,
        ratingTag: "PG-12",
        genres: ["Animation", "Comedy", "Sci-Fi"],
        moods: ["feel-good", "creative", "sci-fi"],
        overview: "On a desolate island, a despondent sheep named Franck meets a quirky salesman named Victor, who offers him the miraculous gift of experiencing infinite whimsical lives.",
        studio: "Gooseberry Project / Blender Studio",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80",
        trendingRank: 5,
        progressPercent: 0,
        resumeTimeSec: 0
    },
    {
        id: "bullrun",
        title: "The Great Bullrun",
        year: 2023,
        duration: "14 min",
        durationSec: 840,
        rating: 8.0,
        ratingTag: "PG",
        genres: ["Documentary", "Action"],
        moods: ["nature", "feel-good"],
        overview: "An exhilarating endurance documentary following passionate motorsport drivers speeding across continental desert roads and mountain passes.",
        studio: "Open Automotive Docs",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&auto=format&fit=crop&q=80",
        trendingRank: 6,
        progressPercent: 0,
        resumeTimeSec: 0
    },
    {
        id: "wilderness-escape",
        title: "Wilderness Escape",
        year: 2024,
        duration: "8 min",
        durationSec: 480,
        rating: 7.8,
        ratingTag: "PG",
        genres: ["Adventure", "Action"],
        moods: ["nature", "family"],
        overview: "High-octane expedition through untamed trails, river crossings, and mountain summits testing the limits of vehicle and human resilience in nature.",
        studio: "Adventure Studio",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        poster: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&auto=format&fit=crop&q=80",
        trendingRank: 7,
        progressPercent: 0,
        resumeTimeSec: 0
    },
    {
        id: "spring-film",
        title: "Spring: Valley of Spirits",
        year: 2019,
        duration: "8 min",
        durationSec: 480,
        rating: 8.5,
        ratingTag: "PG",
        genres: ["Animation", "Fantasy", "Adventure"],
        moods: ["creative", "feel-good", "family"],
        overview: "A poetic fantasy about a shepherd girl and her dog who face ancient spirits in order to continue the cycle of life and ring in the season of spring.",
        studio: "Blender Animation Studio (Creative Commons)",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80",
        trendingRank: 8,
        progressPercent: 0,
        resumeTimeSec: 0
    },
    {
        id: "charge-sci-fi",
        title: "Charge: Cyberpunk Chase",
        year: 2022,
        duration: "5 min",
        durationSec: 300,
        rating: 8.2,
        ratingTag: "PG-12",
        genres: ["Sci-Fi", "Action", "Animation"],
        moods: ["sci-fi", "creative"],
        overview: "In an old neon city, an elderly cybernetic warrior attempts to extract a battery cell to revive his failing companion while evading autonomous security bots.",
        studio: "Blender Open Project",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
        poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=80",
        trendingRank: 9,
        progressPercent: 0,
        resumeTimeSec: 0
    }
];

// Persistent User State (Watchlist & Favorites)
const STORAGE_KEYS = {
    WATCHLIST: "koalasook_watchlist",
    FAVORITES: "koalasook_favorites",
    PROGRESS: "koalasook_progress"
};

function loadStorageSet(key, fallback = []) {
    try {
        const item = localStorage.getItem(key);
        return item ? new Set(JSON.parse(item)) : new Set(fallback);
    } catch {
        return new Set(fallback);
    }
}

function saveStorageSet(key, set) {
    try {
        localStorage.setItem(key, JSON.stringify([...set]));
    } catch (e) {
        console.error("Storage error:", e);
    }
}

// Global App State
const state = {
    activePage: "home", // "home" | "library" | "discover"
    activeLibraryTab: "continue", // "continue" | "watchlist" | "favorites" | "all-family"
    activeDiscoverMood: "all",
    currentGenre: "all",
    searchQuery: "",
    selectedMovie: SAMPLE_MOVIES[0],
    watchlist: loadStorageSet(STORAGE_KEYS.WATCHLIST, ["sintel", "wilderness-escape", "spring-film"]),
    favorites: loadStorageSet(STORAGE_KEYS.FAVORITES, ["big-buck-bunny", "cosmos-laundromat"]),
    isPartyMode: false,
    partyRoomCode: "KOALA-PARTY-7892",
    playbackSpeedIdx: 1, // 1.0x
    subtitlesActive: false,
    currentQuality: "1080p HD"
};

const PLAYBACK_SPEEDS = [0.75, 1.0, 1.25, 1.5, 2.0];
const QUALITIES = ["1080p HD", "4K UHD", "720p", "Auto"];

// Subtitle Dummy Scripts for PG-12
const DUMMY_SUBTITLES = [
    "[Wholesome orchestral score playing]",
    "[Sintel]: Look at how high we can climb together!",
    "[Dragon chirps gently and flaps wings]",
    "[Narrator]: The journey continued across the snow-capped mountain ridge.",
    "[Wind gently rustling the trees]",
    "[Bunny chuckles]: Perfect spot for an afternoon nap!"
];

// DOM Elements
const viewHome = document.getElementById("view-home");
const viewLibrary = document.getElementById("view-library");
const viewDiscover = document.getElementById("view-discover");
const navButtons = document.querySelectorAll(".nav-btn");
const navLibraryCount = document.getElementById("nav-library-count");

// Home Elements
const moviesGrid = document.getElementById("movies-grid");
const movieCount = document.getElementById("movie-count");
const heroBanner = document.getElementById("hero-banner");
const heroTitle = document.getElementById("hero-title");
const heroOverview = document.getElementById("hero-overview");
const heroRating = document.getElementById("hero-rating");
const heroPlayBtn = document.getElementById("hero-play-btn");
const heroPartyBtn = document.getElementById("hero-party-btn");
const heroInfoBtn = document.getElementById("hero-info-btn");

// Library Elements
const libraryGrid = document.getElementById("library-grid");
const libTabs = document.querySelectorAll(".lib-tab");
const countContinue = document.getElementById("count-continue");
const countWatchlist = document.getElementById("count-watchlist");
const countFavorites = document.getElementById("count-favorites");

// Discover Elements
const discoverGrid = document.getElementById("discover-grid");
const trendingRankGrid = document.getElementById("trending-rank-grid");
const moodPills = document.querySelectorAll(".mood-pill");

// Video Player Elements & Controls
const videoModal = document.getElementById("video-modal");
const videoPlayer = document.getElementById("main-video-player");
const playerMovieTitle = document.getElementById("player-movie-title");
const closePlayerBtn = document.getElementById("close-player-btn");
const playerPartyToggle = document.getElementById("player-party-toggle");
const playerPartyDrawer = document.getElementById("player-party-drawer");
const closePartyDrawer = document.getElementById("close-party-drawer");

// Custom Controls
const ctrlPlayPause = document.getElementById("ctrl-play-pause");
const ctrlIconPlay = document.getElementById("ctrl-icon-play");
const ctrlIconPause = document.getElementById("ctrl-icon-pause");
const ctrlSkipBack = document.getElementById("ctrl-skip-back");
const ctrlSkipFwd = document.getElementById("ctrl-skip-fwd");
const scrubberSlider = document.getElementById("scrubber-slider");
const progressCurrent = document.getElementById("progress-current");
const progressBuffer = document.getElementById("progress-buffer");
const timeCurrent = document.getElementById("time-current");
const timeDuration = document.getElementById("time-duration");
const ctrlMuteBtn = document.getElementById("ctrl-mute-btn");
const iconVolHigh = document.getElementById("icon-vol-high");
const iconVolMute = document.getElementById("icon-vol-mute");
const volumeSlider = document.getElementById("volume-slider");
const ctrlSpeedBtn = document.getElementById("ctrl-speed-btn");
const ctrlCcBtn = document.getElementById("ctrl-cc-btn");
const ctrlQualityBtn = document.getElementById("ctrl-quality-btn");
const ctrlPipBtn = document.getElementById("ctrl-pip-btn");
const ctrlFullscreenBtn = document.getElementById("ctrl-fullscreen-btn");
const subtitlesOverlay = document.getElementById("subtitles-overlay");
const subtitlesText = document.getElementById("subtitles-text");
const centerPlaySplash = document.getElementById("center-play-splash");
const floatingEmojis = document.getElementById("floating-emojis");

// Watch Party Controls & Feed
const partyCopyBtn = document.getElementById("party-copy-btn");
const partyChatFeed = document.getElementById("party-chat-feed");
const partyChatForm = document.getElementById("party-chat-form");
const partyChatText = document.getElementById("party-chat-text");
const standalonePartyModal = document.getElementById("standalone-party-modal");
const closeStandalonePartyBtn = document.getElementById("close-standalone-party-btn");
const navPartyBtn = document.getElementById("nav-party-btn");
const quickPartyBtn = document.getElementById("quick-party-btn");
const btnCopyStandaloneLink = document.getElementById("btn-copy-standalone-link");
const partySelectMovie = document.getElementById("party-select-movie");
const btnLaunchPartyStream = document.getElementById("btn-launch-party-stream");

// Details Modal Elements
const detailsModal = document.getElementById("details-modal");
const closeDetailsBtn = document.getElementById("close-details-btn");
const modalPoster = document.getElementById("modal-poster");
const modalTitle = document.getElementById("modal-title");
const modalYear = document.getElementById("modal-year");
const modalDuration = document.getElementById("modal-duration");
const modalRating = document.getElementById("modal-rating");
const modalGenres = document.getElementById("modal-genres");
const modalOverview = document.getElementById("modal-overview");
const modalStudio = document.getElementById("modal-studio");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalStreamBtn = document.getElementById("modal-stream-btn");
const modalPartyBtn = document.getElementById("modal-party-btn");
const modalWatchlistBtn = document.getElementById("modal-watchlist-btn");
const modalFavoriteBtn = document.getElementById("modal-favorite-btn");

// Server Pill & Modal Elements
const serverStatusPill = document.getElementById("server-status-pill");
const serverStatusText = document.getElementById("server-status-text");
const serverModal = document.getElementById("server-modal");
const closeServerModal = document.getElementById("close-server-modal");
const infoProductName = document.getElementById("info-product-name");
const infoVersion = document.getElementById("info-version");
const infoAddress = document.getElementById("info-address");
const infoId = document.getElementById("info-id");
const diagServerName = document.getElementById("diag-server-name");

// Toast Notification
const toastContainer = document.getElementById("toast-container");

// =============================================================================
// INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
    initHero(SAMPLE_MOVIES[0]);
    renderAllViews();
    setupEventListeners();
    populatePartyMovieSelect();
    fetchLiveServerInfo();
    startDummySubtitleCycle();
    startDummyPartyReactions();
});

function renderAllViews() {
    renderHomeMovies();
    renderLibrary();
    renderDiscover();
    updateBadges();
}

// Setup Spotlight Hero
function initHero(movie) {
    state.selectedMovie = movie;
    heroBanner.style.backgroundImage = `url('${movie.backdrop}')`;
    heroTitle.textContent = movie.title;
    heroOverview.textContent = movie.overview;
    heroRating.textContent = `★ ${movie.rating}`;
}

// Navigation View Switcher
function switchPage(pageName) {
    state.activePage = pageName;
    navButtons.forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-page") === pageName);
    });

    viewHome.classList.toggle("active", pageName === "home");
    viewLibrary.classList.toggle("active", pageName === "library");
    viewDiscover.classList.toggle("active", pageName === "discover");

    if (pageName === "library") renderLibrary();
    if (pageName === "discover") renderDiscover();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Update Badge Counters
function updateBadges() {
    const totalLib = state.watchlist.size + state.favorites.size;
    navLibraryCount.textContent = totalLib;
    countWatchlist.textContent = state.watchlist.size;
    countFavorites.textContent = state.favorites.size;
    const continueCount = SAMPLE_MOVIES.filter(m => m.progressPercent > 0).length;
    countContinue.textContent = continueCount;
}

// =============================================================================
// HOME PAGE RENDERING
// =============================================================================
function renderHomeMovies() {
    const filtered = SAMPLE_MOVIES.filter(movie => {
        const matchesGenre = state.currentGenre === "all" || movie.genres.includes(state.currentGenre);
        const matchesSearch = movie.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                              movie.genres.some(g => g.toLowerCase().includes(state.searchQuery.toLowerCase())) ||
                              movie.overview.toLowerCase().includes(state.searchQuery.toLowerCase());
        return matchesGenre && matchesSearch;
    });

    movieCount.textContent = `Showing ${filtered.length} PG-12 title${filtered.length === 1 ? '' : 's'}`;
    moviesGrid.innerHTML = "";

    if (filtered.length === 0) {
        moviesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0; color: #94a3b8;">
                <h3>No movies matched your search</h3>
                <p style="margin-top: 8px;">Try selecting another genre or clearing your query.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(movie => {
        moviesGrid.appendChild(createMovieCard(movie));
    });
}

// Create Standard Movie Card
function createMovieCard(movie, options = {}) {
    const card = document.createElement("div");
    card.className = "movie-card";

    const isWl = state.watchlist.has(movie.id);
    const isFav = state.favorites.has(movie.id);
    const progress = options.showProgress ? movie.progressPercent : 0;

    card.innerHTML = `
        <div class="card-poster-wrap">
            <img src="${movie.poster}" alt="${movie.title}" class="card-poster" loading="lazy">
            <div class="card-top-chips">
                <span class="card-pg-chip">${movie.ratingTag}</span>
                <span class="card-rating-chip">★ ${movie.rating}</span>
            </div>
            <div class="card-play-overlay">
                <button class="play-circle" title="Play Movie">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </button>
                <button class="card-party-btn" title="Watch Party with Friends">🎉</button>
            </div>
            ${progress > 0 ? `
                <div class="continue-badge">Left off at ${Math.floor(movie.resumeTimeSec / 60)}m (${progress}%)</div>
                <div class="card-progress-bar-wrap">
                    <div class="card-progress-fill" style="width: ${progress}%"></div>
                </div>
            ` : ''}
        </div>
        <div class="card-info">
            <h4 class="card-title" title="${movie.title}">${movie.title}</h4>
            <div class="card-meta">
                <span>${movie.year}</span>
                <span>•</span>
                <span>${movie.duration}</span>
                <span>•</span>
                <span style="color: #34d399; font-weight: 700;">${movie.ratingTag}</span>
            </div>
            <div class="card-genre">${movie.genres.slice(0, 2).join(" • ")}</div>
            <div class="card-actions-quick">
                <button class="btn-card-quick ${isFav ? 'active' : ''}" data-action="fav" title="Add to Favorites">
                    <span>${isFav ? '❤️' : '🤍'}</span>
                    <span>Fav</span>
                </button>
                <button class="btn-card-quick ${isWl ? 'active-wl' : ''}" data-action="wl" title="Add to Watchlist">
                    <span>${isWl ? '✓' : '➕'}</span>
                    <span>Watchlist</span>
                </button>
            </div>
        </div>
    `;

    // Click on Card -> open Details
    card.addEventListener("click", (e) => {
        // Play Circle
        if (e.target.closest(".play-circle")) {
            e.stopPropagation();
            playMovie(movie, options.resumeTime || 0);
            return;
        }
        // Watch Party Button on Card
        if (e.target.closest(".card-party-btn")) {
            e.stopPropagation();
            launchWatchParty(movie);
            return;
        }
        // Favorite toggle
        if (e.target.closest('[data-action="fav"]')) {
            e.stopPropagation();
            toggleFavorite(movie.id);
            return;
        }
        // Watchlist toggle
        if (e.target.closest('[data-action="wl"]')) {
            e.stopPropagation();
            toggleWatchlist(movie.id);
            return;
        }

        openDetailsModal(movie);
    });

    return card;
}

// =============================================================================
// LIBRARY RENDERING
// =============================================================================
function renderLibrary() {
    libraryGrid.innerHTML = "";
    let list = [];

    if (state.activeLibraryTab === "continue") {
        list = SAMPLE_MOVIES.filter(m => m.progressPercent > 0);
        if (list.length === 0) {
            libraryGrid.innerHTML = createEmptyState("No in-progress movies", "Start streaming any title to see your watch history here.");
            return;
        }
        list.forEach(m => {
            libraryGrid.appendChild(createMovieCard(m, { showProgress: true, resumeTime: m.resumeTimeSec }));
        });
        return;
    }

    if (state.activeLibraryTab === "watchlist") {
        list = SAMPLE_MOVIES.filter(m => state.watchlist.has(m.id));
        if (list.length === 0) {
            libraryGrid.innerHTML = createEmptyState("Your Watchlist is empty", "Click the '+ Watchlist' button on any movie to save it for later.");
            return;
        }
        list.forEach(m => libraryGrid.appendChild(createMovieCard(m)));
        return;
    }

    if (state.activeLibraryTab === "favorites") {
        list = SAMPLE_MOVIES.filter(m => state.favorites.has(m.id));
        if (list.length === 0) {
            libraryGrid.innerHTML = createEmptyState("No favorites yet", "Tap the ❤️ icon on your favorite PG-12 family movies.");
            return;
        }
        list.forEach(m => libraryGrid.appendChild(createMovieCard(m)));
        return;
    }

    if (state.activeLibraryTab === "all-family") {
        list = SAMPLE_MOVIES;
        list.forEach(m => libraryGrid.appendChild(createMovieCard(m)));
        return;
    }
}

function createEmptyState(title, subtitle) {
    return `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(255,255,255,0.02); border-radius: 14px; border: 1px dashed rgba(255,255,255,0.1);">
            <div style="font-size: 38px; margin-bottom: 12px;">🍿✨</div>
            <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">${title}</h3>
            <p style="color: #94a3b8; font-size: 14px; max-width: 400px; margin: 0 auto 20px;">${subtitle}</p>
            <button class="btn btn-primary" onclick="switchPage('home')">Browse Movies</button>
        </div>
    `;
}

// Toggle Watchlist & Favorites
function toggleWatchlist(movieId) {
    const movie = SAMPLE_MOVIES.find(m => m.id === movieId);
    if (!movie) return;

    if (state.watchlist.has(movieId)) {
        state.watchlist.delete(movieId);
        showToast(`Removed "${movie.title}" from your Watchlist`);
    } else {
        state.watchlist.add(movieId);
        showToast(`Added "${movie.title}" to your Watchlist! 📋`, "success");
    }
    saveStorageSet(STORAGE_KEYS.WATCHLIST, state.watchlist);
    updateBadges();
    renderAllViews();
    updateModalActionButtons(movie);
}

function toggleFavorite(movieId) {
    const movie = SAMPLE_MOVIES.find(m => m.id === movieId);
    if (!movie) return;

    if (state.favorites.has(movieId)) {
        state.favorites.delete(movieId);
        showToast(`Removed "${movie.title}" from Favorites`);
    } else {
        state.favorites.add(movieId);
        showToast(`Marked "${movie.title}" as a Favorite! ❤️`, "success");
    }
    saveStorageSet(STORAGE_KEYS.FAVORITES, state.favorites);
    updateBadges();
    renderAllViews();
    updateModalActionButtons(movie);
}

// =============================================================================
// DISCOVER PAGE RENDERING
// =============================================================================
function renderDiscover() {
    renderTrendingLeaderboard();
    renderDiscoverGrid();
}

function renderTrendingLeaderboard() {
    trendingRankGrid.innerHTML = "";
    const sorted = [...SAMPLE_MOVIES].sort((a, b) => a.trendingRank - b.trendingRank).slice(0, 4);

    sorted.forEach((m, idx) => {
        const card = document.createElement("div");
        card.className = "trending-card";
        card.innerHTML = `
            <div class="rank-number">#${idx + 1}</div>
            <div class="trending-thumb-wrap">
                <img src="${m.poster}" alt="${m.title}" class="trending-thumb">
            </div>
            <div class="trending-info">
                <h4>${m.title}</h4>
                <div class="meta">${m.genres[0]} • ${m.duration}</div>
                <div class="trend-stat">🔥 ${(98 - idx * 4)}% Family Rating</div>
            </div>
        `;
        card.addEventListener("click", () => openDetailsModal(m));
        trendingRankGrid.appendChild(card);
    });
}

function renderDiscoverGrid() {
    discoverGrid.innerHTML = "";
    const filtered = SAMPLE_MOVIES.filter(m => {
        if (state.activeDiscoverMood === "all") return true;
        return m.moods && m.moods.includes(state.activeDiscoverMood);
    });

    if (filtered.length === 0) {
        discoverGrid.innerHTML = createEmptyState("No matching recommendations", "Try selecting another vibe above.");
        return;
    }

    filtered.forEach(m => {
        discoverGrid.appendChild(createMovieCard(m));
    });
}

// =============================================================================
// VIDEO PLAYER & CUSTOM MEDIA CONTROLS
// =============================================================================
function playMovie(movie, resumeTime = 0) {
    state.selectedMovie = movie;
    playerMovieTitle.textContent = movie.title;
    videoPlayer.src = movie.streamUrl;
    videoModal.classList.add("active");

    // Reset controls UI
    subtitlesOverlay.classList.toggle("hidden", !state.subtitlesActive);
    updatePlayPauseIcons(false);

    videoPlayer.currentTime = resumeTime;
    videoPlayer.play().then(() => {
        updatePlayPauseIcons(true);
        triggerCenterSplash();
    }).catch(() => {
        updatePlayPauseIcons(false);
    });

    if (state.isPartyMode) {
        playerPartyDrawer.classList.remove("hidden");
        showToast(`🎉 Joined Watch Party for "${movie.title}"`, "party");
    } else {
        playerPartyDrawer.classList.add("hidden");
    }
}

function closeVideoPlayer() {
    videoPlayer.pause();
    videoPlayer.src = "";
    videoModal.classList.remove("active");
    state.isPartyMode = false;
}

// Play / Pause Toggle
function togglePlayPause() {
    if (videoPlayer.paused || videoPlayer.ended) {
        videoPlayer.play();
        updatePlayPauseIcons(true);
    } else {
        videoPlayer.pause();
        updatePlayPauseIcons(false);
    }
    triggerCenterSplash();
}

function updatePlayPauseIcons(isPlaying) {
    ctrlIconPlay.classList.toggle("hidden", isPlaying);
    ctrlIconPause.classList.toggle("hidden", !isPlaying);
}

function triggerCenterSplash() {
    centerPlaySplash.classList.add("show");
    setTimeout(() => centerPlaySplash.classList.remove("show"), 350);
}

// Seek Scrubber
function handleTimeUpdate() {
    if (!videoPlayer.duration) return;
    const cur = videoPlayer.currentTime;
    const dur = videoPlayer.duration;
    const percent = (cur / dur) * 100;

    progressCurrent.style.width = `${percent}%`;
    scrubberSlider.value = percent;
    timeCurrent.textContent = formatTime(cur);
    timeDuration.textContent = formatTime(dur);

    // Buffer indicator
    if (videoPlayer.buffered.length > 0) {
        const bufferedEnd = videoPlayer.buffered.end(videoPlayer.buffered.length - 1);
        const bufferPercent = (bufferedEnd / dur) * 100;
        progressBuffer.style.width = `${bufferPercent}%`;
    }
}

function handleScrubberInput(e) {
    if (!videoPlayer.duration) return;
    const targetPercent = parseFloat(e.target.value);
    const newTime = (targetPercent / 100) * videoPlayer.duration;
    videoPlayer.currentTime = newTime;
    progressCurrent.style.width = `${targetPercent}%`;
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

// Skip Buttons (-10s / +10s)
function skipTime(seconds) {
    videoPlayer.currentTime = Math.min(Math.max(videoPlayer.currentTime + seconds, 0), videoPlayer.duration || 9999);
    triggerCenterSplash();
}

// Volume & Mute
function toggleMute() {
    videoPlayer.muted = !videoPlayer.muted;
    updateVolumeUI();
}

function handleVolumeChange(e) {
    videoPlayer.volume = parseFloat(e.target.value);
    videoPlayer.muted = videoPlayer.volume === 0;
    updateVolumeUI();
}

function updateVolumeUI() {
    const isMuted = videoPlayer.muted || videoPlayer.volume === 0;
    iconVolHigh.classList.toggle("hidden", isMuted);
    iconVolMute.classList.toggle("hidden", !isMuted);
    volumeSlider.value = isMuted ? 0 : videoPlayer.volume;
}

// Speed Cycle
function cyclePlaybackSpeed() {
    state.playbackSpeedIdx = (state.playbackSpeedIdx + 1) % PLAYBACK_SPEEDS.length;
    const speed = PLAYBACK_SPEEDS[state.playbackSpeedIdx];
    videoPlayer.playbackRate = speed;
    ctrlSpeedBtn.textContent = `${speed}x`;
    showToast(`Playback speed set to ${speed}x`);
}

// Subtitles Toggle
function toggleSubtitles() {
    state.subtitlesActive = !state.subtitlesActive;
    ctrlCcBtn.classList.toggle("active", state.subtitlesActive);
    subtitlesOverlay.classList.toggle("hidden", !state.subtitlesActive);
    showToast(state.subtitlesActive ? "Subtitles: [English PG-12] Enabled" : "Subtitles Disabled");
}

function startDummySubtitleCycle() {
    let subIdx = 0;
    setInterval(() => {
        if (!videoPlayer.paused && state.subtitlesActive) {
            subIdx = (subIdx + 1) % DUMMY_SUBTITLES.length;
            subtitlesText.textContent = DUMMY_SUBTITLES[subIdx];
        }
    }, 4500);
}

// Resolution / Quality Cycle
function cycleQuality() {
    const currentIdx = QUALITIES.indexOf(state.currentQuality);
    const nextIdx = (currentIdx + 1) % QUALITIES.length;
    state.currentQuality = QUALITIES[nextIdx];
    ctrlQualityBtn.textContent = state.currentQuality;
    showToast(`Streaming Resolution: ${state.currentQuality}`);
}

// Fullscreen & PiP
function toggleFullscreen() {
    const container = document.getElementById("video-player-container");
    if (!document.fullscreenElement) {
        if (container.requestFullscreen) container.requestFullscreen();
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
    }
}

function togglePiP() {
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
    } else if (document.pictureInPictureEnabled && videoPlayer !== document.pictureInPictureElement) {
        videoPlayer.requestPictureInPicture().catch(() => {});
    }
}

// =============================================================================
// WATCH PARTY MODE LOGIC
// =============================================================================
function launchWatchParty(movie = null) {
    const targetMovie = movie || state.selectedMovie || SAMPLE_MOVIES[0];
    state.isPartyMode = true;
    detailsModal.classList.remove("active");
    standalonePartyModal.classList.remove("active");
    playMovie(targetMovie);
    playerPartyDrawer.classList.remove("hidden");
    showToast(`🎉 Watch Party live with room ${state.partyRoomCode}!`, "party");
}

function openStandalonePartyModal() {
    standalonePartyModal.classList.add("active");
    partySelectMovie.value = state.selectedMovie.id;
}

function populatePartyMovieSelect() {
    partySelectMovie.innerHTML = "";
    SAMPLE_MOVIES.forEach(m => {
        const opt = document.createElement("option");
        opt.value = m.id;
        opt.textContent = `${m.title} (${m.duration} • ${m.ratingTag})`;
        partySelectMovie.appendChild(opt);
    });
}

function triggerFloatingEmoji(emoji) {
    const el = document.createElement("div");
    el.className = "floating-emoji";
    el.textContent = emoji;
    const randomLeft = Math.floor(Math.random() * 70) + 15; // 15% to 85%
    el.style.left = `${randomLeft}%`;

    floatingEmojis.appendChild(el);
    setTimeout(() => {
        if (el.parentNode) el.parentNode.removeChild(el);
    }, 3000);
}

function appendPartyChat(user, text, userClass = "user-you") {
    const msg = document.createElement("div");
    msg.className = "chat-msg";
    msg.innerHTML = `<strong class="user ${userClass}">${user}:</strong> <span>${escapeHtml(text)}</span>`;
    partyChatFeed.appendChild(msg);
    partyChatFeed.scrollTop = partyChatFeed.scrollHeight;
}

function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[tag] || tag));
}

// Background Simulated Watch Party Reactions
function startDummyPartyReactions() {
    const dummyReactions = ["🍿", "❤️", "🎉", "👏", "😲", "🐨"];
    const dummyChatters = [
        { name: "Emma", class: "user-emma", comment: "This sequence is so wholesome! 🌟" },
        { name: "Liam", class: "user-liam", comment: "The sound mix in this part is top-tier!" },
        { name: "Zoe", class: "user-zoe", comment: "Look at the lighting on the scenery! 🎨" }
    ];

    setInterval(() => {
        if (state.isPartyMode && !videoPlayer.paused) {
            const emoji = dummyReactions[Math.floor(Math.random() * dummyReactions.length)];
            triggerFloatingEmoji(emoji);

            if (Math.random() > 0.6) {
                const chatter = dummyChatters[Math.floor(Math.random() * dummyChatters.length)];
                appendPartyChat(chatter.name, chatter.comment, chatter.class);
            }
        }
    }, 12000);
}

// =============================================================================
// MOVIE DETAILS MODAL
// =============================================================================
function openDetailsModal(movie) {
    state.selectedMovie = movie;
    modalPoster.src = movie.poster;
    modalTitle.textContent = movie.title;
    modalYear.textContent = movie.year;
    modalDuration.textContent = movie.duration;
    modalRating.textContent = `★ ${movie.rating}`;
    modalOverview.textContent = movie.overview;
    modalStudio.textContent = movie.studio;
    modalBackdrop.style.backgroundImage = `url('${movie.backdrop}')`;

    modalGenres.innerHTML = "";
    movie.genres.forEach(g => {
        const tag = document.createElement("span");
        tag.className = "modal-genre-tag";
        tag.textContent = g;
        modalGenres.appendChild(tag);
    });

    updateModalActionButtons(movie);
    detailsModal.classList.add("active");
}

function updateModalActionButtons(movie) {
    const isWl = state.watchlist.has(movie.id);
    const isFav = state.favorites.has(movie.id);

    modalWatchlistBtn.querySelector(".wl-icon").textContent = isWl ? "✓" : "➕";
    modalWatchlistBtn.querySelector(".wl-text").textContent = isWl ? "In Watchlist" : "Watchlist";
    modalWatchlistBtn.classList.toggle("btn-primary", isWl);
    modalWatchlistBtn.classList.toggle("btn-outline", !isWl);

    modalFavoriteBtn.querySelector(".fav-icon").textContent = isFav ? "❤️" : "🤍";
    modalFavoriteBtn.querySelector(".fav-text").textContent = isFav ? "Favorited" : "Favorite";
}

function closeDetailsModal() {
    detailsModal.classList.remove("active");
}

// =============================================================================
// TOAST SYSTEM
// =============================================================================
function showToast(message, type = "default") {
    const toast = document.createElement("div");
    toast.className = `toast ${type === "success" ? "toast-success" : type === "party" ? "toast-party" : ""}`;
    toast.innerHTML = `<span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "toastOut 0.3s forwards";
        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 300);
    }, 3200);
}

// =============================================================================
// BACKEND SERVER INFO FETCH
// =============================================================================
async function fetchLiveServerInfo() {
    try {
        const res = await fetch("/System/Info/Public");
        if (res.ok) {
            const data = await res.json();
            serverStatusText.textContent = `${data.ProductName || "Koala Sook"} v${data.Version || "12.1.0"}`;
            diagServerName.textContent = `${data.ProductName || "Koala Sook Server"} (Online)`;
            infoProductName.textContent = data.ProductName || "Koala Sook Server";
            infoVersion.textContent = data.Version || "12.1.0";
            infoAddress.textContent = data.LocalAddress || window.location.origin;
            infoId.textContent = data.Id || "KS-SERVER-PRIMARY";
        }
    } catch {
        serverStatusText.textContent = "Koala Sook Server v12.1.0";
    }
}

// =============================================================================
// EVENT LISTENERS SETUP
// =============================================================================
function setupEventListeners() {
    // Top Nav buttons
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const page = btn.getAttribute("data-page");
            if (page) switchPage(page);
        });
    });

    // Brand link (reset to home)
    document.getElementById("brand-home").addEventListener("click", (e) => {
        e.preventDefault();
        state.currentGenre = "all";
        state.searchQuery = "";
        document.getElementById("movie-search").value = "";
        switchPage("home");
        updateGenrePillActive();
        renderHomeMovies();
    });

    // Watch Party Launchers
    navPartyBtn.addEventListener("click", openStandalonePartyModal);
    quickPartyBtn.addEventListener("click", openStandalonePartyModal);
    heroPartyBtn.addEventListener("click", () => launchWatchParty(state.selectedMovie));
    closeStandalonePartyBtn.addEventListener("click", () => standalonePartyModal.classList.remove("active"));

    // Copy party code buttons
    const copyPartyCode = () => {
        const inviteUrl = `${window.location.origin}/?party=${state.partyRoomCode}`;
        navigator.clipboard.writeText(inviteUrl).then(() => {
            showToast("🎉 Watch Party invite link copied to clipboard!", "party");
        }).catch(() => {
            showToast(`Room Code: ${state.partyRoomCode} copied!`, "party");
        });
    };
    partyCopyBtn.addEventListener("click", copyPartyCode);
    btnCopyStandaloneLink.addEventListener("click", copyPartyCode);

    // Launch party stream from standalone modal
    btnLaunchPartyStream.addEventListener("click", () => {
        const selectedId = partySelectMovie.value;
        const movie = SAMPLE_MOVIES.find(m => m.id === selectedId) || state.selectedMovie;
        launchWatchParty(movie);
    });

    // Party Drawer Toggle on Player
    playerPartyToggle.addEventListener("click", () => {
        playerPartyDrawer.classList.toggle("hidden");
    });
    closePartyDrawer.addEventListener("click", () => {
        playerPartyDrawer.classList.add("hidden");
    });

    // Reaction Buttons (🍿 ❤️ 🎉 👏 😲 🐨)
    document.querySelectorAll(".react-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const emoji = btn.getAttribute("data-emoji");
            triggerFloatingEmoji(emoji);
            appendPartyChat("You", `sent a reaction: ${emoji}`, "user-you");
        });
    });

    // Party Chat Submit
    partyChatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = partyChatText.value.trim();
        if (!text) return;

        appendPartyChat("KoalaAdmin (You)", text, "user-you");
        partyChatText.value = "";

        // Simulated Friendly PG-12 response
        setTimeout(() => {
            const responses = [
                "Awesome observation! 👏",
                "Great scene! Loving this movie night 🍿",
                "Totally agree! Perfect family stream.",
                "Haha nice one! 🎉"
            ];
            const randResp = responses[Math.floor(Math.random() * responses.length)];
            appendPartyChat("Emma", randResp, "user-emma");
        }, 1500);
    });

    // Hero buttons
    heroPlayBtn.addEventListener("click", () => playMovie(state.selectedMovie));
    heroInfoBtn.addEventListener("click", () => openDetailsModal(state.selectedMovie));

    // Player Custom Controls Events
    ctrlPlayPause.addEventListener("click", togglePlayPause);
    videoPlayer.addEventListener("click", togglePlayPause);
    videoPlayer.addEventListener("timeupdate", handleTimeUpdate);
    videoPlayer.addEventListener("ended", () => updatePlayPauseIcons(false));
    scrubberSlider.addEventListener("input", handleScrubberInput);

    ctrlSkipBack.addEventListener("click", () => skipTime(-10));
    ctrlSkipFwd.addEventListener("click", () => skipTime(10));
    ctrlMuteBtn.addEventListener("click", toggleMute);
    volumeSlider.addEventListener("input", handleVolumeChange);
    ctrlSpeedBtn.addEventListener("click", cyclePlaybackSpeed);
    ctrlCcBtn.addEventListener("click", toggleSubtitles);
    ctrlQualityBtn.addEventListener("click", cycleQuality);
    ctrlPipBtn.addEventListener("click", togglePiP);
    ctrlFullscreenBtn.addEventListener("click", toggleFullscreen);
    closePlayerBtn.addEventListener("click", closeVideoPlayer);

    // Details Modal Actions
    modalStreamBtn.addEventListener("click", () => {
        closeDetailsModal();
        playMovie(state.selectedMovie);
    });
    modalPartyBtn.addEventListener("click", () => launchWatchParty(state.selectedMovie));
    modalWatchlistBtn.addEventListener("click", () => toggleWatchlist(state.selectedMovie.id));
    modalFavoriteBtn.addEventListener("click", () => toggleFavorite(state.selectedMovie.id));
    closeDetailsBtn.addEventListener("click", closeDetailsModal);

    // Server Info Modal
    serverStatusPill.addEventListener("click", () => serverModal.classList.add("active"));
    closeServerModal.addEventListener("click", () => serverModal.classList.remove("active"));

    // Library Tabs
    libTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            libTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            state.activeLibraryTab = tab.getAttribute("data-tab");
            renderLibrary();
        });
    });

    // Discover Mood Pills
    moodPills.forEach(pill => {
        pill.addEventListener("click", () => {
            moodPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            state.activeDiscoverMood = pill.getAttribute("data-mood");
            renderDiscoverGrid();
        });
    });

    // Home Genre Filter Pills
    document.querySelectorAll(".pill-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            state.currentGenre = btn.getAttribute("data-genre");
            updateGenrePillActive();
            renderHomeMovies();
        });
    });

    // Search Input
    const searchInput = document.getElementById("movie-search");
    searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value.trim();
        renderHomeMovies();
        if (state.activePage !== "home") switchPage("home");
    });

    // Close Modals on Backdrop Click
    window.addEventListener("click", (e) => {
        if (e.target === videoModal) closeVideoPlayer();
        if (e.target === detailsModal) closeDetailsModal();
        if (e.target === serverModal) serverModal.classList.remove("active");
        if (e.target === standalonePartyModal) standalonePartyModal.classList.remove("active");
    });

    // Keyboard Shortcuts
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeVideoPlayer();
            closeDetailsModal();
            serverModal.classList.remove("active");
            standalonePartyModal.classList.remove("active");
            return;
        }

        // Only handle video keys if video modal is active
        if (videoModal.classList.contains("active")) {
            if (e.target.tagName === "INPUT") return; // Ignore inside chat input

            if (e.key === " " || e.key === "k") {
                e.preventDefault();
                togglePlayPause();
            } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                skipTime(-10);
            } else if (e.key === "ArrowRight") {
                e.preventDefault();
                skipTime(10);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                videoPlayer.volume = Math.min(1, videoPlayer.volume + 0.1);
                updateVolumeUI();
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                videoPlayer.volume = Math.max(0, videoPlayer.volume - 0.1);
                updateVolumeUI();
            } else if (e.key === "f" || e.key === "F") {
                e.preventDefault();
                toggleFullscreen();
            } else if (e.key === "m" || e.key === "M") {
                e.preventDefault();
                toggleMute();
            }
        }
    });
}

function updateGenrePillActive() {
    document.querySelectorAll(".pill-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-genre") === state.currentGenre);
    });
}
