import React, { useState } from 'react';
import axios from 'axios';

function WeatherNow() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const apiKey = '079746d1a303ffad7adc8f11a57af240'; 
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      if (response.data) {
        const data = response.data;
        setWeatherData({
          temperature: data.main.temp,
          windSpeed: data.wind.speed,
          weatherCode: data.weather[0].description, // or use data.weather[0].id for a weather code
        });
        setError('');
      }
    } catch (err) {
      setError('Could not fetch weather data. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      fetchWeather();
    } else {
      setError('Please enter a city name.');
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', color: '#333' }}>Weather Now</h1>
      <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          style={{
            padding: '10px',
            fontSize: '16px',
            marginRight: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            fontSize: '16px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Get Weather
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      {weatherData && (
        <div
          style={{
            marginTop: '20px',
            padding: '20px',
            borderRadius: '10px',
            color: '#fff',
            background: 'linear-gradient(135deg, #3a7bd5, #3a6073)',
            width: '300px',
            margin: '20px auto',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Weather in {city}</h2>
          <p style={{ fontSize: '1.2rem', margin: '5px 0' }}>Temperature: {weatherData.temperature}°C</p>
          <p style={{ fontSize: '1.2rem', margin: '5px 0' }}>Wind Speed: {weatherData.windSpeed} km/h</p>
          <p style={{ fontSize: '1.2rem', margin: '5px 0' }}>Weather: {weatherData.weatherCode}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherNow;
