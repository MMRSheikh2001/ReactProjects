import { Film } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300">

            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">


                    <div className="flex items-center gap-2">
                        <Film size={24} />
                        <span className="text-xl font-bold text-white">
                            MovieExplorer
                        </span>
                    </div>


                    <p className="text-sm text-center">
                        Discover movies and explore your next favorite show.
                    </p>


                    <a
                        href="https://github.com/MMRSheikh2001/NextLevel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition"
                    >

                        GitHub
                    </a>

                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
                  

                    <div className="text-center">

                        <p className="text-sm text-gray-500">
                            © 2026 Movie Explorer. All rights reserved.
                        </p>

                        <p className="text-sm text-gray-400 mt-3">
                            Movie and TV show data provided by{" "}
                            <a
                                href="https://www.tvmaze.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-400 hover:underline"
                            >
                                TVMaze
                            </a>
                        </p>

                    </div>
                </div>

            </div>

        </footer>
    );
}