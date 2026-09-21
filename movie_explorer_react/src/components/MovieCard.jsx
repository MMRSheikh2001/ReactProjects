import { Calendar, Star } from "lucide-react";

export default function MovieCard({ movie, onDetails }) {

    const year = movie.premiered
        ? new Date(movie.premiered).getFullYear()
        : "N/A";

    const rating = movie.rating?.average ?? "N/A";

    const image = movie.image?.medium;

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">

         
            <div className="relative aspect-[2/3] overflow-hidden bg-gray-200">

                {image ? (
                    <img
                        src={image}
                        alt={movie.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                    </div>
                )}

               
                <div className="absolute top-3 right-3 bg-black/75 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">

                    <Star
                        size={15}
                        className="fill-yellow-400 text-yellow-400"
                    />

                    {rating}

                </div>

            </div>

           
            <div className="p-5">

                <h3 className="text-lg font-bold text-gray-900 truncate">
                    {movie.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">

                    <Calendar size={16} />

                    <span>{year}</span>

                </div>

                <button
                    onClick={() => onDetails(movie)}
                    className="w-full mt-5 bg-gray-950 text-white py-2.5 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
                >
                    See Details
                </button>

            </div>

        </div>
    );
}