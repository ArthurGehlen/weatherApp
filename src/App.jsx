// Components
import Header from "./layout/Header";
import SearchContainer from "./layout/SearchContainer";
import TemperatureInfo from "./components/TemperatureInfo";
import DailyTemperature from "./components/DailyTemperature";
import HourlyTemperature from "./components/HourlyTemperature";
import MenuButton from "./components/MenuButton";

// Utils
import { useState } from "react";
import get_current_day_info from "./utils/GetCurrentDay";
import "./App.css";

// Images
import icon_dropdown from "./assets/images/icon-dropdown.svg";
import sunny from "./assets/images/icon-sunny.webp";
import icon_rain from "./assets/images/icon-rain.webp";

function App() {
  const [unitsSelected, setUnitsSelected] = useState({
    temperature: "Celsius",
    wind_speed: "km",
    precipitation: "mm",
  });
  const [hourlyMenuActive, setHourlyMenuActive] = useState(false);

  const handle_unit_change = (e) => {
    const name = e.target.name;

    switch (name) {
      case "Celsius":
      case "Fahrenheit":
        setUnitsSelected((prev) => ({ ...prev, temperature: name }));
        break;
      case "km":
      case "mph":
        setUnitsSelected((prev) => ({ ...prev, wind_speed: name }));
        break;
      case "mm":
      case "in":
        setUnitsSelected((prev) => ({ ...prev, precipitation: name }));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header unit_change={handle_unit_change} units={unitsSelected} />
      <h1 className="top_title">How's the sky looking today?</h1>
      <SearchContainer />
      <main>
        <div className="temperature_wrapper">
          <div className="today">
            <div className="local">
              <h2>Berlin, Germany</h2>
              <p>
                {get_current_day_info.week_day()},{" "}
                {get_current_day_info.month()} {get_current_day_info.day},{" "}
                {get_current_day_info.year}
              </p>
            </div>
            <h1>
              <img src={sunny} alt="Sunny" />
              20°
            </h1>
          </div>

          <div className="temperature_info_wrapper">
            <TemperatureInfo label={"Feels Like"} info="18°" />
            <TemperatureInfo label={"Humidity"} info="46%" />
            <TemperatureInfo label={"Wind"} info="14km/h" />
            <TemperatureInfo label={"Precipitation"} info="0mm" />
          </div>

          <div className="daily_forecast_wrapper">
            <h2>Daily forecast</h2>
            <div className="daily_forecast_map">
              <DailyTemperature
                week_day="Tue"
                icon={icon_rain}
                min_temperature="20°"
                max_temperature="14°"
              />
              <DailyTemperature
                week_day="Tue"
                icon={icon_rain}
                min_temperature="20°"
                max_temperature="14°"
              />
              <DailyTemperature
                week_day="Tue"
                icon={icon_rain}
                min_temperature="20°"
                max_temperature="14°"
              />
              <DailyTemperature
                week_day="Tue"
                icon={icon_rain}
                min_temperature="20°"
                max_temperature="14°"
              />
              <DailyTemperature
                week_day="Tue"
                icon={icon_rain}
                min_temperature="20°"
                max_temperature="14°"
              />
              <DailyTemperature
                week_day="Tue"
                icon={icon_rain}
                min_temperature="20°"
                max_temperature="14°"
              />
              <DailyTemperature
                week_day="Tue"
                icon={icon_rain}
                min_temperature="20°"
                max_temperature="14°"
              />
            </div>
          </div>
        </div>

        <div className="hourly_forecast_wrapper">
          <header>
            <p>Hourly forecast</p>
            <div className="hourly_menu_wrapper">
              <button
                className="hourly_menu_btn"
                onClick={() => setHourlyMenuActive(!hourlyMenuActive)}
              >
                {get_current_day_info.week_day()}
                <img src={icon_dropdown} alt="Dropdown" />
              </button>
              <div className="hourly_menu" style={hourlyMenuActive ? {display: "flex"} : {display: "none"}}>
                <MenuButton label="Monday" is_selected={true} is_unit={false} />
                <MenuButton label="Tuesday" />
                <MenuButton label="Wednesday" />
                <MenuButton label="Thursday" />
                <MenuButton label="Friday" />
                <MenuButton label="Saturday" />
                <MenuButton label="Sunday" />
              </div>
            </div>
          </header>

          <div className="hourly_map">
            <HourlyTemperature icon={icon_rain} temperature="20°" hour="3 PM" />
            <HourlyTemperature icon={icon_rain} temperature="20°" hour="3 PM" />
            <HourlyTemperature icon={icon_rain} temperature="20°" hour="3 PM" />
            <HourlyTemperature icon={icon_rain} temperature="20°" hour="3 PM" />
            <HourlyTemperature icon={icon_rain} temperature="20°" hour="3 PM" />
            <HourlyTemperature icon={icon_rain} temperature="20°" hour="3 PM" />
            <HourlyTemperature icon={icon_rain} temperature="20°" hour="3 PM" />
            <HourlyTemperature icon={icon_rain} temperature="20°" hour="3 PM" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
