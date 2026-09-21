# React Projects

A collection of React apps by [MMRSheikh2001](https://github.com/MMRSheikh2001).

| Project | Description | Live Demo |
|---|---|---|
| [🎬 Movie Explorer](#-movie-explorer) | Browse and search a TV show catalog with a details modal | [movie-explorer-react-six.vercel.app](https://movie-explorer-react-six.vercel.app) |
| [🌤️ Elite Weather App](#️-elite-weather-app) | City-search weather app with condition-based recommendations | [elite-weather-app-lyart.vercel.app](https://elite-weather-app-lyart.vercel.app) |

---

## 🎬 Movie Explorer

A responsive movie & TV show explorer built with React. Browse the full TVMaze catalog, search by title, and view details — genres, rating, runtime, and overview — in a modal.

**Live demo:** https://movie-explorer-react-six.vercel.app
**Source:** [`movie_explorer_react`](https://github.com/MMRSheikh2001/ReactProjects/tree/main/movie_explorer_react)

### Features

- **Home page** — hero section with a call-to-action into the movie listing page, plus a short "what you can do here" feature grid.
- **Navbar** — brand logo/name, nav links, and a responsive mobile menu (hamburger toggle).
- **Movie listing page** (`/movie`)
  - Search bar that queries TVMaze by title.
  - Falls back to the full show catalog when the search box is cleared.
  - Responsive grid: 1 column on mobile, up to 4 columns on desktop.
  - Loading and error states, plus a "no results" state.
- **Movie cards** — poster, title, release year, and rating badge, with a **See Details** button.
- **Details modal** — backdrop/poster image, rating, release date, genres, overview, and extra metadata (type, status, language, runtime). Closable via the ✕ button or by clicking outside the modal.
- **Footer** — app name, copyright, and a GitHub link.

### Tech stack

- [React 19](https://react.dev/)
- [React Router 8](https://reactrouter.com/) (`createBrowserRouter`, nested layout route)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [lucide-react](https://lucide.dev/) for icons
- [TVMaze API](https://www.tvmaze.com/api) for show data — free, no API key required

### Project structure

```
movie_explorer_react/
├── src/
│   ├── services/
│   │   └── movieService.js     # fetch wrappers: getAllMovies, searchMovies, getMovieById
│   ├── components/
│   │   ├── MovieCard.jsx       # poster, title, year, rating, "See Details" button
│   │   └── MovieDetailsModal.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Movie.jsx           # listing page: search + grid + modal wiring
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── layout/
│   │   └── MainLayout.jsx      # Navbar + <Outlet /> + Footer shell
│   ├── App.jsx                 # router config
│   └── main.jsx
└── vercel.json                 # SPA rewrite so client-side routes work on refresh
```

### API integration

All requests go through `src/services/movieService.js`, which wraps three TVMaze endpoints:

| Function | Endpoint | Used for |
|---|---|---|
| `getAllMovies()` | `GET /shows` | Default grid on the listing page |
| `searchMovies(query)` | `GET /search/shows?q=` | Title search |
| `getMovieById(id)` | `GET /shows/:id` | Full details shown in the modal |

### Getting started

```bash
cd movie_explorer_react
npm install
npm run dev
```

Then open the printed local URL. No environment variables or API keys are needed.

To build for production:

```bash
npm run build
npm run preview
```

### Deployment

Deployed on [Vercel](https://vercel.com/). `vercel.json` rewrites all routes to `index.html` so React Router's client-side routes (like `/movie`) work correctly on a hard refresh.

### Notes / known limitations

- TVMaze only supports searching by title, not by genre or actor.
- Some shows are missing a poster, rating, or summary in TVMaze's data — the UI falls back to "N/A" / "No Image" rather than breaking.

---

## 🌤️ Elite Weather App

A city-search weather app built with React 19, React Router, and Tailwind CSS 4. Enter a city name (or use your device's location), and it shows current conditions along with a plain-language recommendation for how to dress or prepare for the day.

**Live demo:** https://elite-weather-app-lyart.vercel.app
**Source:** [`Weather_App/elite_weather_app`](https://github.com/MMRSheikh2001/ReactProjects/tree/main/Weather_App/elite_weather_app)

### Features

- **City search** — type any city name and it's geocoded to coordinates before fetching weather.
- **"Use my location"** — pulls coordinates from the browser's Geolocation API as an alternative to typing a city.
- **Current conditions** — temperature, "feels like," humidity, and wind speed, mapped from WMO weather codes to human-readable descriptions (Clear, Partly Cloudy, Rain, Snow, Fog, Thunderstorm, etc.), including a separate icon state for clear nights.
- **Smart Recommendations** — a rule-based tip (e.g. "It's raining, don't forget an umbrella" / "It's quite hot today, take a water bottle") generated from the current condition and temperature.
- **Client-side routing** — a `/weather` route receives the selected location via router state, so results render on their own page.
- **Error handling** — inline messages for an empty city field, a failed geocoding lookup, or denied/unavailable geolocation.

### Tech stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Routing | React Router 8 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Icons | lucide-react |
| Build tool | Vite |
| Weather data | [Open-Meteo Forecast API](https://open-meteo.com/) — free, no API key required |
| Geocoding | Open-Meteo Geocoding API |
| Deployment | Vercel |

### How it works

1. `Home` renders a "Check Weather" button that opens `LocationModal`.
2. `LocationModal` takes a typed city name (resolved via `getGeoLocation`, which calls Open-Meteo's geocoding endpoint) or the browser's geolocation coordinates.
3. The resolved `{ name, lat, long }` is passed via router state to `/weather`.
4. The `Weather` page calls `getWeather(place)`, which hits Open-Meteo's forecast endpoint and maps the returned WMO weather code to a condition, label, and icon.
5. `getRecommendations()` runs a simple rule set against the condition and temperature to produce one contextual tip, shown alongside the raw metrics.

### Project structure

```
elite_weather_app/
├── src/
│   ├── services/
│   │   ├── get-geolocation.js   # city name -> lat/long via Open-Meteo geocoding
│   │   └── get-weather.js       # lat/long -> current conditions + WMO code mapping
│   ├── components/
│   │   └── LocationModal.jsx    # city search form + "use my location" button
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Weather.jsx          # conditions display + Smart Recommendations
│   │   └── AboutUs.jsx
│   ├── layout/
│   │   └── MainLayout.jsx
│   ├── App.jsx                  # router config
│   └── main.jsx
└── vercel.json                  # SPA rewrite for client-side routes
```

### Getting started

```bash
cd Weather_App/elite_weather_app
npm install
npm run dev
```

No environment variables or API keys are needed — Open-Meteo's endpoints are used unauthenticated.

To build for production:

```bash
npm run build
npm run preview
```

### Deployment

Deployed on [Vercel](https://vercel.com/), with `vercel.json` rewriting all routes to `index.html` so React Router's client-side routes (like `/weather`) work correctly on a hard refresh.

### Notes / known limitations

- Open-Meteo's geocoding endpoint returns a single best match for a city name — ambiguous names (e.g. a city that exists in multiple countries) aren't disambiguated in the UI.
- Recommendations are generated from a fixed rule set based on condition and temperature, not a machine-learned model.
