import { Link, useLocation } from "react-router"
import { getWeather } from "../services/get-weather";
import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import RecommendationCard from "../components/RecommendationCard";
import WeatherType from "../components/WeatherType";
import { getRecommendations } from "../utils/getRecommendation";
import Loader from "../components/Loader";
import { ArrowLeft } from "lucide-react";
import LocationModal from "../components/LocationModal";

export default function Weather() {

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const value = useLocation();
    const place = value.state.location;

    console.log(place);
    console.log("Weather ", weather);

    useEffect(() => {
        if (!place) {
            return;
        }

        const fetchWeather = async () => {
            setLoading(true);
            try {
                const result = await getWeather(place);
                console.log(result);

                setWeather(result);
            } catch (error) {
                console.log(error);
            }

            finally {
                setLoading(false);
                setOpen(false)
            }
        }

        fetchWeather();
    }, [place])



    return (
        <div className="max-w-6xl mx-auto">
            <header className="py-4">
                {

                    !loading && <div className="flex items-center justify-between">
                        <div>
                            <Link
                                className="border border-2 rounded-full px-2 py-1"
                                to={"/"}>
                                <ArrowLeft size={16} />
                                Back To Home
                            </Link>
                        </div>
                        <div>
                            <h1 className="text-xl text-blue-300">
                                Elite <span className="text-blue-200  font-bold">Weather</span>
                                App</h1>
                        </div>

                        <div>
                            <button type="button"
                                onClick={() => setOpen(true)}
                                className="text-lg font-medium bg-blue-500 px-5 py-2  rounded-4xl
                 text-gray-100
                hover:scale-105 transition-all delay-500"
                            >
                                Change Location
                            </button>

                        </div>
                    </div>

                }
            </header>
            {
                loading ? <Loader /> : <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-3">


                        <div className="shadow-2xl rounded-2xl p-5">
                            {/* weather Card */}
                            <WeatherCard weather={weather} place={place} />

                        </div>
                        {/* Weather Recommendation */}

                        <RecommendationCard recommendation={getRecommendations(weather)} />
                    </div>


                    {/* weather type */}
                    <WeatherType weather={weather} place={place} />
                </div>


            }


            {
                open && <LocationModal onClose={() => setOpen(false)} />
            }
        </div>
    )
}