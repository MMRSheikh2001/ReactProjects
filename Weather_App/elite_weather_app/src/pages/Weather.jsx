import { useLocation } from "react-router"
import { getWeather } from "../services/get-weather";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

export default function Weather() {

    const [weather, setWeather] = useState(null);

    const value = useLocation();
    const place = value.state.location;

    console.log(place);
    console.log("Weather ", weather);

    useEffect(() => {
        if (!place) {
            return;
        }

        const fetchWeather = async () => {
            try {
                const result = await getWeather(place);
                console.log(result);

                setWeather(result);
            } catch (error) {
                console.log(error);
            }
        }

        fetchWeather();
    }, [place])

    const Rain = ["drizzle", "rain", "freezing_rain"];

    const getRecommendations = (weather) => {
        if (!weather) {
            return;
        }


        // 1. Weather you need to prepare for.
        if (weather.condition === "snow") {
            return { type: "snow", label: "Snow Alert", text: "It's snowing. Wear warm clothes and take it slow outside." };
        }
        if (Rain.includes(weather.condition)) {
            return { type: "rain", label: "Rain Alert", text: "It's raining. Don't forget to take an umbrella with you." };
        }
        if (weather.condition === "fog") {
            return { type: "fog", label: "Fog Alert", text: "It's foggy. Drive carefully and keep some distance from other vehicles." };
        }

        // 2. Temperatures worth warning about (in °C).
        if (weather.temperature >= 32) {
            return { type: "hot", label: "Hot Day", text: "It's quite hot today. Take a water bottle with you." };
        }
        if (weather.temperature <= 15) {
            return { type: "cold", label: "Cold Day", text: "It's cold today. Wear warm clothes before heading out." };
        }
        if (weather.temperature >= 28) {
            return { type: "warm", label: "Warm Day", text: "It's warm today. Take some water with you." };
        }

        // 3. Comfortable temperature, so just describe the sky.
        if (weather.condition === "clear") {
            return { type: "sunny", label: "Sunny Day", text: "Sunny skies ahead. Take water and consider carrying sunglasses." };
        }
        if (weather.condition === "partly_cloudy" || weather.condition === "cloudy") {
            return { type: "cloudy", label: "Cloudy Day", text: "Mostly cloudy today. A light jacket might come in handy." };
        }

        // 4. Nothing special to report.
        return { type: "pleasant", label: "Perfect Day", text: "The weather looks comfortable today. Enjoy your day!" };

    }

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">

                    <div className="shadow-2xl rounded-2xl p-5">
                        <div className="space-y-3">
                            <h1 className="text-2xl text-blue-500 font-semibold">
                                Today's Weather Details
                            </h1>
                            <div className="flex items-center gap-3">
                                <MapPin size={30} />
                                <h2 className="text-4xl text-purple-500 font-semibold">
                                    {place.name}
                                </h2>
                            </div>
                            <div className="flex items-center gap-16">
                                <h3 className="text-6xl text-purple-900 font-extrabold">
                                    {weather?.temperature} C
                                </h3>
                                <p className="text-4xl text-purple-800 font-extrabold">
                                    {weather?.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="shadow-2xl rounded-2xl p-4 text-center">
                                    <h3 className="text-lg text-purple-900 font-bold">
                                        Feels Like
                                    </h3>
                                    <p className="text-4xl text-purple-800 font-extrabold">
                                        {weather?.feelsLike}
                                    </p>
                                </div>
                                <div className="shadow-2xl rounded-2xl p-4 text-center">
                                    <h3 className="text-lg text-purple-900 font-bold">
                                        Humidity
                                    </h3>
                                    <p className="text-4xl text-purple-800 font-extrabold">
                                        {weather?.humidity}
                                    </p>
                                </div>
                                <div className="shadow-2xl rounded-2xl p-4 text-center">
                                    <h3 className="text-lg text-purple-900 font-bold">
                                        Wind Speed
                                    </h3>
                                    <p className="text-4xl text-purple-800 font-extrabold">
                                        {weather?.windSpeed}
                                    </p>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="shadow-2xl rounded-2xl p-5">
                        <h2 className="text-blue-950 font-bold text-xl">
                            Smart Recommendations
                        </h2>

                        <div className="">

                            {
                               getRecommendations(weather)?.text
                            }
                        </div>
                    </div>
                </div>



                <div className="shadow-2xl flex flex-col items-center justify-between rounded-2xl p-5">
                    <div className="text-center">
                        <h2 className="text-blue-950 font-bold text-xl">
                            Live in {place.name}
                        </h2>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="text-4xl text-blue-900 font-extrabold">
                            {weather?.description}
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="rounded-full border-2 font-medium text-lg border-purple-400 p-1">
                            Feels Like : {weather?.feelsLike}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}