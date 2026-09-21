import { Link } from "react-router";
import { Film, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-950 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4">

                <div className="flex items-center justify-between">

                   
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-2xl font-bold"
                    >
                        <Film size={30} />
                        <span>MovieExplorer</span>
                    </Link>

                   
                    <div className="hidden md:flex items-center gap-8">

                        <Link
                            to="/"
                            className="hover:text-yellow-400 transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/movie"
                            className="hover:text-yellow-400 transition"
                        >
                            Movies
                        </Link>

                        <Link
                            to="/movie"
                            className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
                        >
                            Explore Movies
                        </Link>

                    </div>

                    
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden"
                    >
                        {isMenuOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>

                </div>

               
                {isMenuOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4 pb-2">

                        <Link
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-yellow-400"
                        >
                            Home
                        </Link>

                        <Link
                            to="/movie"
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-yellow-400"
                        >
                            Movies
                        </Link>

                        <Link
                            to="/movie"
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-center"
                        >
                            Explore Movies
                        </Link>

                    </div>
                )}

            </div>
        </nav>
    );
}