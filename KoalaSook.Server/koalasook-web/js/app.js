/**
 * Koala Sook Web Client
 * Embedded Frontend Application with Sample Movies Library
 */

// Embedded Sample Movies Catalog
const SAMPLE_MOVIES = [
    {
        id: "sintel",
        title: "Sintel",
        year: 2010,
        duration: "15 min",
        rating: 8.4,
        genres: ["Animation", "Fantasy", "Drama"],
        overview: "A lonely young woman named Sintel searches for a baby dragon she befriended and nursed back to health after it is snatched away by a ferocious winged beast.",
        studio: "Blender Animation Studio (Creative Commons 3.0)",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80"
    },
    {
        id: "big-buck-bunny",
        title: "Big Buck Bunny",
        year: 2008,
        duration: "10 min",
        rating: 8.1,
        genres: ["Animation", "Comedy", "Adventure"],
        overview: "A large and lovable rabbit deals with bullying forest creatures—a flying squirrel, a red squirrel, and a chinchilla—who torment gentle critters until Bunny decides to retaliate.",
        studio: "Blender Animation Studio (Creative Commons 3.0)",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        poster: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1511497584788-87676104235f?w=1600&auto=format&fit=crop&q=80"
    },
    {
        id: "tears-of-steel",
        title: "Tears of Steel",
        year: 2012,
        duration: "12 min",
        rating: 7.9,
        genres: ["Sci-Fi", "Action", "Adventure"],
        overview: "Set in a dystopian future in Amsterdam, a desperate group of scientists and warriors attempt to save humanity from catastrophic destruction by robotic tentacle forces.",
        studio: "Blender VFX Foundation (Creative Commons 3.0)",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        poster: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80"
    },
    {
        id: "elephants-dream",
        title: "Elephants Dream",
        year: 2006,
        duration: "11 min",
        rating: 7.6,
        genres: ["Sci-Fi", "Animation", "Drama"],
        overview: "The world's first open-source 3D film. Proog and Emo journey through a giant, bizarre machine world where thoughts materialize into mechanical and organic labyrinths.",
        studio: "Orange Open Movie Project (Creative Commons 2.5)",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        poster: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&auto=format&fit=crop&q=80"
    },
    {
        id: "cosmos-laundromat",
        title: "Cosmos Laundromat",
        year: 2015,
        duration: "12 min",
        rating: 8.3,
        genres: ["Animation", "Comedy", "Sci-Fi"],
        overview: "On a desolate island, a despondent sheep named Franck meets a mysterious, quirky salesman named Victor, who offers him the miraculous gift of experiencing infinite lives.",
        studio: "Gooseberry Project / Blender Studio",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80"
    },
    {
        id: "bullrun",
        title: "The Great Bullrun",
        year: 2023,
        duration: "14 min",
        rating: 8.0,
        genres: ["Documentary", "Action"],
        overview: "An exhilarating endurance documentary following passionate motorsport drivers speeding across continental desert roads and mountain passes.",
        studio: "Open Automotive Docs",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&auto=format&fit=crop&q=80"
    },
    {
        id: "wilderness-escape",
        title: "Wilderness Escape",
        year: 2024,
        duration: "8 min",
        rating: 7.8,
        genres: ["Adventure", "Action"],
        overview: "High-octane expedition through untamed trails, river crossings, and mountain summits testing the limits of vehicle and human resilience.",
        studio: "Adventure Studio",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        poster: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&auto=format&fit=crop&q=80"
    }
];

// State
let currentGenre = "all";
let searchQuery = "";
let selectedMovie = SAMPLE_MOVIES[0];

// DOM Elements
const moviesGrid = document.getElementById("movies-grid");
const movieCount = document.getElementById("movie-count");
const heroBanner = document.getElementById("hero-banner");
const heroTitle = document.getElementById("hero-title");
const heroOverview = document.getElementById("hero-overview");
const heroRating = document.getElementById("hero-rating");
const heroPlayBtn = document.getElementById("hero-play-btn");
const heroInfoBtn = document.getElementById("hero-info-btn");

// Video Modal Elements
const videoModal = document.getElementById("video-modal");
const videoPlayer = document.getElementById("main-video-player");
const playerMovieTitle = document.getElementById("player-movie-title");
const closePlayerBtn = document.getElementById("close-player-btn");

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
const modalStreamBtn = document.getElementById("modal-stream-btn");
const modalBackdrop = document.getElementById("modal-backdrop");

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

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    initHero(SAMPLE_MOVIES[0]);
    renderMovies();
    setupEventListeners();
    fetchLiveServerInfo();
});

// Setup Spotlight Hero
function initHero(movie) {
    selectedMovie = movie;
    heroBanner.style.backgroundImage = `url('${movie.backdrop}')`;
    heroTitle.textContent = movie.title;
    heroOverview.textContent = movie.overview;
    heroRating.textContent = `★ ${movie.rating}`;
}

// Render Movies Grid
function renderMovies() {
    const filtered = SAMPLE_MOVIES.filter(movie => {
        const matchesGenre = currentGenre === "all" || movie.genres.includes(currentGenre);
        const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              movie.genres.some(g => g.toLowerCase().includes(searchQuery.toLowerCase())) ||
                              movie.overview.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesGenre && matchesSearch;
    });

    movieCount.textContent = `Showing ${filtered.length} movie${filtered.length === 1 ? '' : 's'}`;
    moviesGrid.innerHTML = "";

    if (filtered.length === 0) {
        moviesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0; color: #94a3b8;">
                <h3>No movies matched your search</h3>
                <p style="margin-top: 8px;">Try selecting another genre or clearing the search query.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.innerHTML = `
            <div class="card-poster-wrap">
                <img src="${movie.poster}" alt="${movie.title}" class="card-poster" loading="lazy">
                <div class="card-play-overlay">
                    <div class="play-circle">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </div>
                </div>
                <div class="card-rating-chip">★ ${movie.rating}</div>
            </div>
            <div class="card-info">
                <h4 class="card-title" title="${movie.title}">${movie.title}</h4>
                <div class="card-meta">
                    <span>${movie.year}</span>
                    <span>${movie.duration}</span>
                </div>
                <div class="card-genre">${movie.genres.slice(0, 2).join(" • ")}</div>
            </div>
        `;

        card.addEventListener("click", () => openDetailsModal(movie));
        moviesGrid.appendChild(card);
    });
}

// Video Playback
function playMovie(movie) {
    playerMovieTitle.textContent = movie.title;
    videoPlayer.src = movie.streamUrl;
    videoModal.classList.add("active");
    videoPlayer.play().catch(() => {});
}

function closeVideoPlayer() {
    videoPlayer.pause();
    videoPlayer.src = "";
    videoModal.classList.remove("active");
}

// Movie Details Modal
function openDetailsModal(movie) {
    selectedMovie = movie;
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

    detailsModal.classList.add("active");
}

function closeDetailsModal() {
    detailsModal.classList.remove("active");
}

// Fetch Live Backend Server Info
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
            infoId.textContent = data.Id || "N/A";
        }
    } catch (e) {
        // Fallback for offline or static testing
        serverStatusText.textContent = "Koala Sook Server v12.1.0";
    }
}

// Event Listeners
function setupEventListeners() {
    // Hero Buttons
    heroPlayBtn.addEventListener("click", () => playMovie(selectedMovie));
    heroInfoBtn.addEventListener("click", () => openDetailsModal(selectedMovie));

    // Modal Details Play
    modalStreamBtn.addEventListener("click", () => {
        closeDetailsModal();
        playMovie(selectedMovie);
    });

    // Close Modals
    closePlayerBtn.addEventListener("click", closeVideoPlayer);
    closeDetailsBtn.addEventListener("click", closeDetailsModal);
    closeServerModal.addEventListener("click", () => serverModal.classList.remove("active"));
    serverStatusPill.addEventListener("click", () => serverModal.classList.add("active"));

    // Close modals on clicking outside container
    window.addEventListener("click", (e) => {
        if (e.target === videoModal) closeVideoPlayer();
        if (e.target === detailsModal) closeDetailsModal();
        if (e.target === serverModal) serverModal.classList.remove("active");
    });

    // Keyboard ESC
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeVideoPlayer();
            closeDetailsModal();
            serverModal.classList.remove("active");
        }
    });

    // Search Box
    const searchInput = document.getElementById("movie-search");
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        renderMovies();
    });

    // Nav Brand Click
    document.getElementById("brand-home").addEventListener("click", (e) => {
        e.preventDefault();
        currentGenre = "all";
        searchQuery = "";
        searchInput.value = "";
        updateActiveGenreButtons();
        renderMovies();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Nav Links & Genre Pills
    document.querySelectorAll(".nav-btn, .pill-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            currentGenre = btn.getAttribute("data-filter") || btn.getAttribute("data-genre");
            updateActiveGenreButtons();
            renderMovies();
        });
    });
}

function updateActiveGenreButtons() {
    document.querySelectorAll(".nav-btn").forEach(b => {
        const f = b.getAttribute("data-filter");
        b.classList.toggle("active", f === currentGenre);
    });
    document.querySelectorAll(".pill-btn").forEach(b => {
        const g = b.getAttribute("data-genre");
        b.classList.toggle("active", g === currentGenre);
    });
}

