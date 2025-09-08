// Components
import Header from "./layout/Header";
import SearchContainer from "./layout/SearchContainer";

// Utils
import "./App.css";
import get_current_day_info from "./utils/GetCurrentDay";

function App() {
  return (
    <>
      <Header />
      <h1 className="top_title">How's the sky looking today?</h1>
      <SearchContainer />
      <main>
        <div className="today">
          <div className="local">
            <h2>Berlin, Germany</h2>
            <p>
              {get_current_day_info.week_day()}, {get_current_day_info.month()}{" "}
              {get_current_day_info.day}, {get_current_day_info.year}
            </p>
          </div>
          <div className="current_temperature">
            <h1>20°</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
