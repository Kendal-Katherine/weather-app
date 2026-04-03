import axios from "axios";

export async function fetchWeather(lat: number, lon: number) {
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );

  return response.data;
}