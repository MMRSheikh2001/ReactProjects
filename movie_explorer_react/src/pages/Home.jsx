import { Link } from "react-router";
import { Film, Search, Star } from "lucide-react";

export default function Home() {
    return (
        <div>

            
            <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">

                
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80')"
                    }}
                ></div>

                
                <div className="absolute inset-0 bg-black/70"></div>

              
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">

                    <div className="flex justify-center mb-6">
                        <div className="bg-yellow-400 text-black p-4 rounded-full">
                            <Film size={40} />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Discover Your Next
                        <span className="text-yellow-400"> Favorite Movie</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
                        Explore thousands of movies and TV shows, discover
                        new favorites, and find something amazing to watch.
                    </p>

                    <Link
                        to="/movie"
                        className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105"
                    >
                        <Search size={22} />
                        Explore Movies
                    </Link>

                </div>

            </section>


           
            <section className="bg-gray-100 py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12">

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Everything You Need to Discover
                        </h2>

                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            MovieExplorer makes it simple to find information
                            about movies and TV shows you want to watch.
                        </p>

                    </div>


                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center">

                            <div className="inline-flex p-4 bg-yellow-100 text-yellow-600 rounded-full mb-5">
                                <Search size={30} />
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                Search Movies
                            </h3>

                            <p className="text-gray-600">
                                Quickly search for your favorite movies and
                                TV shows by title.
                            </p>

                        </div>


                       
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center">

                            <div className="inline-flex p-4 bg-yellow-100 text-yellow-600 rounded-full mb-5">
                                <Film size={30} />
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                Explore Shows
                            </h3>

                            <p className="text-gray-600">
                                Browse a collection of shows and discover
                                something new to watch.
                            </p>

                        </div>


                      
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center">

                            <div className="inline-flex p-4 bg-yellow-100 text-yellow-600 rounded-full mb-5">
                                <Star size={30} />
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                View Details
                            </h3>

                            <p className="text-gray-600">
                                Get ratings, genres, summaries, and other
                                useful information about each show.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


          
            <section className="bg-gray-950 text-white py-20">

                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold mb-5">
                        Ready to Find Something to Watch?
                    </h2>

                    <p className="text-gray-300 mb-8">
                        Start exploring movies and TV shows today.
                    </p>

                    <Link
                        to="/movie"
                        className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
                    >
                        Browse Movies
                    </Link>

                </div>

            </section>

        </div>
    );
}