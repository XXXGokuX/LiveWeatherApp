import clear from "../image/clear.png";
import cloud from "../image/cloud.png";
import haze from "../image/haze.png";
import mist from "../image/mist.png";
import rain from "../image/rain.png";
import snow from "../image/snow.png";
import dayjs from "dayjs";

function getWeatherIcon(name) {
  if (name === "Clear") return clear;
  else if (name === "Clouds") return cloud;
  else if (name === "Haze") return haze;
  else if (name === "Mist") return mist;
  else if (name === "Rain") return rain;
  else return snow;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Forecast({ data2 }) {
  return (
    <div className="forecast-box">
      <div className="head">
        <h3>Extended Forecast</h3>
      </div>

      <div className="all-forecast">
        {data2
          ? data2.daily.map(function (val) {
              return <WeatherCard object={val} />;
            })
          : null}
      </div>
    </div>
  );
}

function WeatherCard({ object }) {
  const weekdayIndex = dayjs.unix(object.dt).day();
  return (
    <div className="wetaher-card">
      <div className="fday">{WEEKDAYS[weekdayIndex]}</div>

      <div className="ficon">
        <img
          src={object ? getWeatherIcon(object.weather[0].main) : null}
          width="80"
          alt="ficon"
        />
      </div>

      <div className="fstatus">{object ? object.weather[0].main : null}</div>

      <div className="ftemp">
        {object ? Math.round(object.feels_like.day) : null}°/
        {object ? Math.round(object.temp.day) : null}°
      </div>
    </div>
  );
}

export default Forecast;
