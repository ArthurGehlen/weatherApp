// Components
import Header from "./layout/Header";
import SearchContainer from "./layout/SearchContainer";
import TemperatureInfo from "./components/TemperatureInfo";

// Utils
import "./App.css";
import get_current_day_info from "./utils/GetCurrentDay";

// Images
import sunny from "./assets/images/icon-sunny.webp"

function App() {
  return (
    <>
      <Header />
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

          <div className="dayly_forecast_wrapper"></div>
        </div>

        <div className="hourly_forecast_wrapper"></div>
      </main>
    </>
  );
}

export default App;
