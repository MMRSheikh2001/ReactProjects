import { X, Star, Calendar, Film } from "lucide-react";

export default function MovieDetailsModal({ movie, onClose }) {

    if (!movie) {
        return null;
    }

    const rating = movie.rating?.average ?? "N/A";

    const premiered = movie.premiered
        ? new Date(movie.premiered).toLocaleDateString()
        : "N/A";

    const image = movie.image?.original || movie.image?.medium;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={onClose}
        >


            <div
                className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative"
                onClick={(event) => event.stopPropagation()}
            >


                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
                    aria-label="Close movie details"
                >
                    <X size={22} />
                </button>



                <div className="bg-gray-200">

                    {image ? (
                        <img
                            src={image}
                            alt={movie.name}
                            className="w-full max-h-[600px] object-contain bg-gray-950"
                        />
                    ) : (
                        <div className="h-80 flex items-center justify-center text-gray-400">
                            <Film size={70} />
                        </div>
                    )}

                </div>



                <div className="p-6 md:p-8">


                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {movie.name}
                    </h2>



                    <div className="flex flex-wrap items-center gap-5 mt-4 text-gray-600">

                        <div className="flex items-center gap-2">

                            <Star
                                size={18}
                                className="fill-yellow-400 text-yellow-400"
                            />

                            <span>
                                {rating}
                            </span>

                        </div>


                        <div className="flex items-center gap-2">

                            <Calendar size={18} />

                            <span>
                                {premiered}
                            </span>

                        </div>

                    </div>



                    <div className="mt-6">

                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Overview
                        </h3>

                        <div
                            className="text-gray-600 leading-7"
                            dangerouslySetInnerHTML={{
                                __html: movie.summary || "No summary available."
                            }}
                        />

                    </div>



                    {movie.genres?.length > 0 && (

                        <div className="mt-6">

                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Genres
                            </h3>

                            <div className="flex flex-wrap gap-2">

                                {movie.genres.map((genre) => (

                                    <span
                                        key={genre}
                                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        {genre}
                                    </span>

                                ))}

                            </div>

                        </div>

                    )}



                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="bg-gray-50 rounded-lg p-4">

                            <p className="text-sm text-gray-500">
                                Type
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                                {movie.type || "N/A"}
                            </p>

                        </div>


                        <div className="bg-gray-50 rounded-lg p-4">

                            <p className="text-sm text-gray-500">
                                Status
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                                {movie.status || "N/A"}
                            </p>

                        </div>


                        <div className="bg-gray-50 rounded-lg p-4">

                            <p className="text-sm text-gray-500">
                                Language
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                                {movie.language || "N/A"}
                            </p>

                        </div>


                        <div className="bg-gray-50 rounded-lg p-4">

                            <p className="text-sm text-gray-500">
                                Runtime
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                                {movie.runtime
                                    ? `${movie.runtime} minutes`
                                    : "N/A"}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}