import React, { useEffect, useState } from 'react'
import WeatherInput from './WeatherInput'

const App = () => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [weatherData, setWeatherData] = useState(null)

    const fetchData = async (param) => {
      try {
        setLoading(true)
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=2610ad4d1bb753b7e5274ec3275e28ba`)
        const data = await response.json()
        console.log(data)
        if(data) {
          setWeatherData(data)
          setLoading(false)}} catch(error){
        console.log(error)}}

    const handleSearch = () => {
      fetchData(search)}

    const getCurrentDate = () => {
      return new Date().toLocaleDateString('en-us', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'})}

    useEffect(() => {
      fetchData('tehran')},[])

    console.log(weatherData)

  return (
    <div className=''>
        <WeatherInput search={search} setSearch={setSearch} handleSearch={handleSearch}/>
        {
          loading ? (<div>Loading...</div>) : (
            <div>
              <h2>{weatherData?.name} , <span>{weatherData?.sys?.country}</span></h2>
              <div>
                <span>{getCurrentDate()}</span>
              </div>
              <div>
                {weatherData?.main?.temp}
              </div>
              <p>{weatherData?.weather[0].description}</p>
              <div>
                <p>{weatherData?.wind.speed}</p>
                <p>Wind Speed</p>
              </div>
              <div>
                <p>{weatherData?.main.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>)}
    </div>)}
export default App