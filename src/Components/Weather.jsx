// Create a basic weather app using React which involves fetching weather data from a weather API and displaying it in your React application.

import React, { useState } from 'react'

const  Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const apikey = `7593e3327d1a0a72f822d29a6633d396`;

    const getWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
            const data = await response.json();
            setWeatherData(data);
            console.log(data);
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <section className=' flex flex-col items-center justify-center h-64 
     bg-gradient-to-r from-teal-700 to-blue-700 ' >
            <div className=' items-center justify-center'>
                <h2 className=" flex items-center justify-center capitalize text-2xl  font-bold mb-5 ">
                    CHECK THE <span className=' ml-1 text-orange-500'>WEATHER</span> 
                </h2>
                <div className=" ">
                    <input type="text" className=' p-2 rounded-lg text-center ' placeholder='Enter city'
                     value={city} onChange={(e) => setCity(e.target.value)} />
                    <button className=' ml-4 py-2 px-2 rounded-md border border-blue-600  bg-black text-blue-600' onClick={getWeather}>
                        Get Weather
                    </button>

                    {
                        weatherData && (
                            <div className=' mt-4 flex flex-col gap-4  text-green-500 font-semibold'>
                                <h3 className="">
                                    City: {weatherData?.name}, Country: {weatherData.sys ? weatherData.sys.country : 'India'}

                                </h3>
                                <p className="para">
                                    Temperature: {weatherData.main.temp}
                                </p> 
                                <p className="para">
                                    Weather: {weatherData.weather[0].description}
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Weather