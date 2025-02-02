import WeatherData from "../types/WeatherData";

interface MonthlyWeatherProps {
  index: number;
  item: WeatherData;
  useMonth: boolean;
}

function MonthlyWeather({ index, item, useMonth }: MonthlyWeatherProps) {
  return (
    <div
      className={
        useMonth
          ? "align-items-center text-start card m-1 py-3 px-1"
          : "text-start"
      }
      style={{ width: "13rem" }}
    >
      <li key={index} className="list-group border m-1 p-1">
        <h6 className="card-subtitle mb-2 text-body-secondary">
          <strong>{item.month}:</strong>
        </h6>
        <p className="card-text p-card-text">
          Average High: {item.data.high_temp}&deg;F
        </p>
        <hr className="divider"></hr>
        <p className="card-text p-card-text">
          {item.data.rain} Days of Precipitation
        </p>
      </li>
    </div>
  );
}

export default MonthlyWeather;
