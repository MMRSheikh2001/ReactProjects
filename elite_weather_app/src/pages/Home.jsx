import { useState } from "react"
import LocationModal from "../components/LocationModal";

export default function Home() {

    const [click, setClick] = useState(false);
    console.log(click);
    return (
        <div >
            <div className="text-center">
                <h1 className="text-6xl text-blue-300">
                    Elite <span className="text-blue-200  font-extrabold">Weather</span>
                    App</h1>
                <p className="max-w-md text-md text-gray-400 py-4">
                    Check Your Weather Today in Elite Weather App
                </p>
            </div>

            <div className="flex justify-center">
                <button type="button"
                    onClick={() => setClick(true)}
                    className="text-lg font-medium bg-blue-500 px-5 py-2  rounded-4xl
                 text-gray-100
                hover:scale-105 transition-all delay-500">
                    Check Weather
                </button>
            </div>
            {
                click && <LocationModal onClose={() => setClick(false)} />
            }
        </div>
    )
}