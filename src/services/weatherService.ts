import { fetchWeather } from "../api/weatherApi";

export async function getWeather(lat: number, lon: number) {
  const data = await fetchWeather(lat, lon);

  return {
    temperature: data.current_weather.temperature,
    windspeed: data.current_weather.windspeed
  };
}

