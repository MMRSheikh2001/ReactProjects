import { Search, Film } from "lucide-react";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieDetailsModal from "../components/MovieDetailsModal";
import {
    getAllMovies,
    searchMovies,
    getMovieById
} from "../services/movieService";

export default function Movie() {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);

    const [loading, setLoading] = useState(true);
    const [detailsLoading, setDetailsLoading] = useState(false);
    const [error, setError] = useState("");
    const [detailsError, setDetailsError] = useState("");



    useEffect(() => {

        async function loadMovies() {

            try {

                setLoading(true);
                setError("");

                const data = await getAllMovies();

                setMovies(data);

            } catch (error) {

                setError(error.message);

            } finally {

                setLoading(false);

            }
        }

        loadMovies();

    }, []);



    async function handleSearch(event) {

        event.preventDefault();

        if (!searchTerm.trim()) {

            try {

                setLoading(true);
                setError("");

                const data = await getAllMovies();

                setMovies(data);

            } catch (error) {

                setError(error.message);

            } finally {

                setLoading(false);

            }

            return;
        }


        try {

            setLoading(true);
            setError("");

            const data = await searchMovies(searchTerm.trim());


            const searchResults = data.map((item) => item.show);

            setMovies(searchResults);

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);

        }
    }



    async function handleDetails(movie) {

        try {

            setDetailsLoading(true);
            setDetailsError("");

            const data = await getMovieById(movie.id);

            setSelectedMovie(data);

        } catch (error) {

            setDetailsError(error.message);

        } finally {

            setDetailsLoading(false);

        }
    }



    function handleCloseDetails() {

        setSelectedMovie(null);
        setDetailsError("");

    }


    return (
        <div className="bg-gray-100 min-h-screen">


            <section className="bg-gray-950 text-white py-16">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <div className="flex justify-center mb-5">

                        <div className="bg-yellow-400 text-black p-4 rounded-full">
                            <Film size={32} />
                        </div>

                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold">
                        Explore Movies & Shows
                    </h1>

                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                        Search for your favorite movies and discover
                        something new to watch.
                    </p>

                </div>

            </section>



            <main className="max-w-7xl mx-auto px-6 py-12">


                <form
                    onSubmit={handleSearch}
                    className="max-w-2xl mx-auto mb-12"
                >

                    <div className="relative">

                        <Search
                            size={22}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                            placeholder="Search for a movie..."
                            className="w-full bg-white border border-gray-300 rounded-xl py-4 pl-12 pr-5 text-gray-900 outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                        />

                    </div>

                </form>



                <div className="mb-6">

                    <h2 className="text-2xl font-bold text-gray-900">
                        {searchTerm
                            ? `Search results for "${searchTerm}"`
                            : "All Movies"}
                    </h2>

                    <p className="text-gray-500 mt-1">
                        {movies.length} movie
                        {movies.length !== 1 ? "s" : ""} found
                    </p>

                </div>



                {loading ? (

                    <div className="text-center py-20">

                        <div className="w-12 h-12 border-4 border-gray-300 border-t-yellow-400 rounded-full animate-spin mx-auto"></div>

                        <p className="text-gray-500 mt-5">
                            Loading movies...
                        </p>

                    </div>


                ) : error ? (


                    <div className="text-center py-20">

                        <Film
                            size={60}
                            className="mx-auto text-red-300"
                        />

                        <h3 className="text-2xl font-bold text-red-500 mt-5">
                            Something went wrong
                        </h3>

                        <p className="text-gray-500 mt-2">
                            {error}
                        </p>

                    </div>


                ) : movies.length > 0 ? (


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {movies.map((movie) => (

                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onDetails={handleDetails}
                            />

                        ))}

                    </div>


                ) : (


                    <div className="text-center py-20">

                        <Film
                            size={60}
                            className="mx-auto text-gray-300"
                        />

                        <h3 className="text-2xl font-bold text-gray-700 mt-5">
                            No movies found
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Try searching for a different movie title.
                        </p>

                    </div>

                )}

            </main>



            {detailsLoading && (

                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">

                    <div className="bg-white rounded-xl p-8 text-center">

                        <div className="w-10 h-10 border-4 border-gray-300 border-t-yellow-400 rounded-full animate-spin mx-auto"></div>

                        <p className="text-gray-600 mt-4">
                            Loading details...
                        </p>

                    </div>

                </div>

            )}



            {detailsError && (

                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">

                    <div className="bg-white rounded-xl p-8 max-w-md text-center">

                        <Film
                            size={50}
                            className="mx-auto text-red-400"
                        />

                        <h3 className="text-xl font-bold text-red-500 mt-4">
                            Could not load details
                        </h3>

                        <p className="text-gray-500 mt-2">
                            {detailsError}
                        </p>

                        <button
                            onClick={handleCloseDetails}
                            className="mt-6 bg-gray-950 text-white px-6 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition"
                        >
                            Close
                        </button>

                    </div>

                </div>

            )}



            {selectedMovie && (

                <MovieDetailsModal
                    movie={selectedMovie}
                    onClose={handleCloseDetails}
                />

            )}

        </div>
    );
}