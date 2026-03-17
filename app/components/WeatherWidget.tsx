"use client";
import { useEffect, useState } from "react";

const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?q=Recife,BR&units=metric&appid=8f9f44d858f7eea32d55f210a16756c2";

export default function WeatherWidget() {
  const [temp, setTemp] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(WEATHER_API)
      .then((res) => res.json())
      .then((data) => {
        if (data?.main?.temp && data?.weather?.[0]?.main) {
          setTemp(Math.round(data.main.temp) + "°C");
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex items-center gap-2 font-sans text-xs text-muted/90 select-none">
      {loading
        ? "Recife, BR ..."
        : temp
          ? `Recife, BR — ${temp}`
          : "Recife, BR"}
    </div>
  );
}
