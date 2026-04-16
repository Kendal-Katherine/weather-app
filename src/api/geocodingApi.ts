import axios from "axios";

export async function fetchCoordinates(city: string) {
  const response = await axios.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );

  if (!response.data.results || response.data.results.length === 0) {
    throw new Error("City not found");
  }

  const location = response.data.results[0];

  return {
    latitude: location.latitude,
    longitude: location.longitude,
    name: location.name,
    country: location.country
  };
}