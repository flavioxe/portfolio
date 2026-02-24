"use client";
import { useEffect, useState } from "react";

const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?q=Recife,BR&units=metric&appid=8f9f44d858f7eea32d55f210a16756c2";

function getWeatherColor(weather: string) {
  if (weather.includes("rain")) return "bg-blue-400";
  if (weather.includes("cloud")) return "bg-muted";
  if (weather.includes("clear")) return "bg-amber-400";
  return "bg-muted";
}

export default function WeatherWidget() {
  const [temp, setTemp] = useState<string | null>(null);
  const [weather, setWeather] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(WEATHER_API)
      .then((res) => res.json())
      .then((data) => {
        if (data?.main?.temp && data?.weather?.[0]?.main) {
          setTemp(Math.round(data.main.temp) + "°C");
          setWeather(data.weather[0].main.toLowerCase());
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const color = weather ? getWeatherColor(weather) : "bg-muted";

  return (
    <div className="flex items-center gap-2 font-mono text-xs text-muted select-none">
      <span className={`w-2 h-2 rounded-full ${color}`}></span>
      {loading
        ? "Recife, BR ..."
        : temp
          ? `Recife, BR — ${temp}`
          : "Recife, BR"}
    </div>
  );
}
