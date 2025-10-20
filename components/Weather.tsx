import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherData } from '../types'; // Import type

const Weather: React.FC = () => {
  const [city, setCity] = useState('Hanoi'); // Giá trị mặc định là Hà Nội
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    setError(null);
    setWeather(null);
    try {
      const response = await axios.get<WeatherData>(
        `https://wttr.in/${cityName}?format=j1`
      );
      setWeather(response.data);
    } catch (err) {
      setError('Không thể tìm thấy thành phố. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  // Tải thời tiết Hà Nội khi component được render lần đầu
  useEffect(() => {
    fetchWeather('Hanoi');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <div className="card">
      <h2>Thời tiết</h2>
      <form onSubmit={handleSubmit} className="weather-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Nhập tên thành phố"
        />
        <button type="submit">Xem</button>
      </form>

      {loading && <p>Đang tải...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {weather && weather.current_condition && (
        <div>
          <h3>Thời tiết tại {weather.nearest_area[0].areaName[0].value}</h3>
          <p>
            <strong>Nhiệt độ: </strong>
            {weather.current_condition[0].temp_C}°C
          </p>
          <p>
            <strong>Tình trạng: </strong>
            {weather.current_condition[0].weatherDesc[0].value}
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;