
import { getWeather } from "./services/weatherService";
import { showWeather } from "./ui/display";

async function main() {
  // Exemplo: São Paulo
  const lat = -23.55;
  const lon = -46.63;

  const weather = await getWeather(lat, lon);
  showWeather(weather);
}

main();