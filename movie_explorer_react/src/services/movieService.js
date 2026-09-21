const BASE_URL = "https://api.tvmaze.com";

export async function getAllMovies() {
    const response = await fetch(`${BASE_URL}/shows`);

    if (!response.ok) {
        throw new Error("Failed to fetch movies");
    }

    return response.json();
}

export async function searchMovies(query) {
    const response = await fetch(
        `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
        throw new Error("Failed to search movies");
    }

    return response.json();
}

export async function getMovieById(id) {
    const response = await fetch(`${BASE_URL}/shows/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch movie details");
    }

    return response.json();
}