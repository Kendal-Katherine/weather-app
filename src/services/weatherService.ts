import { fetchCoordinates } from "../api/geocodingApi";
import { fetchWeather } from "../api/weatherApi";

export async function getWeatherByCity(city: string) {
  if (!city || city.trim() === "") {
    throw new Error("City is required");
  }

  const location = await fetchCoordinates(city);

  if (!location || !location.latitude || !location.longitude) {
    throw new Error("City not found");
  }

  const data = await fetchWeather(location.latitude, location.longitude);

  if (!data.current_weather) {
    throw new Error("Weather data unavailable");
  }

  return {
    city: location.name,
    country: location.country,
    temperature: data.current_weather.temperature,
    windspeed: data.current_weather.windspeed
  };
}