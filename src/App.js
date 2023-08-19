import { useEffect, useState } from "react";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Head from "./components/Head";
import Search from "./components/Search";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&lang=tr&appid=34480b98aa332da53123a0ac63a4ea9d`
        )
        .then(function (response) {
          setData(response.data);
        });
    });
  }, []);

  function getWeatherData(city) {
    const options = {
      method: "GET",
      url: "https://open-weather13.p.rapidapi.com/city/" + city,
      headers: {
        "X-RapidAPI-Key": "4058561afamsha69728589170c4ap1a97bfjsn9d45f1909183",
        "X-RapidAPI-Host": "open-weather13.p.rapidapi.com"
      }
    };

    axios.request(options).then(function (response) {
      if (response.data) {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=metric&lang=tr&appid=34480b98aa332da53123a0ac63a4ea9d`
          )
          .then(function (resp) {
            setData(resp.data);
          });
      }
    });
  }

  return (
    <div className="App">
      <Head />
      <Search func={getWeatherData} />
      <Current data={data} />
      <Forecast data2={data} />
    </div>
  );
}
