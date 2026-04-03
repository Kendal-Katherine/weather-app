import { Weather } from "../types/weatherTypes";
import { formatTemperature } from "../utils/format";

export function showWeather(weather: Weather) {
  console.log("🌤 Clima atual:");
  console.log(`Temperatura: ${formatTemperature(weather.temperature)}`);
  console.log(`Vento: ${weather.windspeed} km/h`);
}