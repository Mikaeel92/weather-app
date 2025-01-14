import React from 'react'

const WeatherInput = ({search, setSearch, handleSearch}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 w-screen h-screen bg-blue-400'>
    <input
        type='text'
        placeholder='Enter City Name...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='p-2 rounded-md w-72 focus:outline-none shadow-lg'/>
        <button onClick={handleSearch} className='bg-gray-700 text-white p-2 rounded-md hover:bg-black'>Search Weather</button>
    </div>)}
    
export default WeatherInput