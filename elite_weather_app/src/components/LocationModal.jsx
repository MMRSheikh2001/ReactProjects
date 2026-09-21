import { X } from 'lucide-react';
import { useState } from 'react';
import { getGeoLocation } from '../services/get-geolocation';
import { useNavigate } from 'react-router';


export default function LocationModal({ onClose }) {

    const navigate = useNavigate();

    const [city, setCity] = useState("");
    const [error, setError] = useState("");


    const goToPage = (location) => {
        navigate("/weather", { state: { location } });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const value = city.trim();

        if (!value) {
            setError("Please Enter a city Name");
            return;
        }

        try {
            const result = await getGeoLocation(value);
            // console.log(result);

            if (!result) {
                setError("Geo Request Failed");
            } else {
                goToPage(result);
            }
        } catch (error) {
            setError(error);
        }

    }

    const handleGeoLocation = () => {
        if(!navigator.geolocation){
            setError("Geo Location Not found");
            return;
        }

        navigator.geolocation.getCurrentPosition((position) => {

            const { latitude, longitude } = position.coords;
            //    console.log({ latitude, longitude });

            goToPage({ name: "Your Location", lat: latitude, long: longitude })
        }, (error) => {
            setError(error);
        }, {
            timeout: 10000
        })
    }




    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
            <div className="h-[300px] w-[400px] p-5 rounded-2xl bg-gray-100 shadow-2xl">
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-medium">
                        Where are you today?
                    </h2>
                    <button className='w-10 h-10 rounded-full p-1 bg-gray-400 cursor-pointer'
                        onClick={onClose}><X /></button>
                </div>

                <div className='pt-8'>
                    <form onSubmit={handleSubmit} action="" className='space-y-5'>
                        <input
                            placeholder='Enter City Name'
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className='w-full border p-1 ' />
                        <div className="flex justify-center">
                            <button type="submit"

                                className="text-lg w-full font-medium bg-blue-500 px-5 py-2  rounded-4xl
                 text-gray-100
                hover:scale-105 transition-all delay-500">
                                Get Weather
                            </button>
                        </div>
                    </form>
                </div>
                <div className='py-2 text-center'>
                    Or
                </div>
                <div>
                    <div className="flex justify-center">
                        <button type="button"
                            onClick={handleGeoLocation}

                            className="text-lg w-full font-medium bg-blue-500 px-5 py-2  rounded-4xl
                 text-gray-100
                hover:scale-105 transition-all delay-500">
                            Use My Location
                        </button>
                    </div>

                    <div className='text-center'>
                        {
                            error && <p className='text-red-600 text-md font-medium'>
                                {error}
                            </p>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}