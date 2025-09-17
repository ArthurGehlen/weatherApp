// Utils
import { useState } from "react";
import "./Header.css";

// Images
import logo from "../assets/images/logo.svg";
import config_icon from "../assets/images/icon-units.svg";
import dropdown_icon from "../assets/images/icon-dropdown.svg";

// Components
import MenuButton from "../components/MenuButton";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [unitsSelected, setUnitsSelected] = useState({
    temperature: "Celsius",
    wind_speed: "km",
    precipitation: "mm",
  });

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
    <header id="header">
      <img src={logo} alt="Logo" />

      <div className="menu_wrapper">
        <button
          className="unit_configs_btn"
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <img src={config_icon} alt="Img" />
          <span>Units</span>
          <img src={dropdown_icon} alt="Drop" />
        </button>
        <div
          id="menu"
          style={isMenuActive ? { display: "flex" } : { display: "none" }}
        >
          <MenuButton label="Switch to Imperial" />
          <p className="topic">Temperature</p>
          <MenuButton
            label="Celsius (°C)"
            is_selected={unitsSelected["temperature"] == "Celsius"}
            handle_click={handle_unit_change}
            name="Celsius"
          />
          <MenuButton
            label="Fahrenheit (°F)"
            is_selected={unitsSelected["temperature"] == "Fahrenheit"}
            handle_click={handle_unit_change}
            name="Fahrenheit"
          />
          <div className="divider"></div>
          <p className="topic">Wind Speed</p>
          <MenuButton
            label="km/h"
            is_selected={unitsSelected["wind_speed"] == "km"}
            handle_click={handle_unit_change}
            name="km"
          />
          <MenuButton
            label="mph"
            is_selected={unitsSelected["wind_speed"] == "mph"}
            handle_click={handle_unit_change}
            name="mph"
          />
          <div className="divider"></div>
          <p className="topic">Precipitation</p>
          <MenuButton
            label="Millimeters (mm)"
            is_selected={unitsSelected["precipitation"] == "mm"}
            handle_click={handle_unit_change}
            name="mm"
          />
          <MenuButton
            label="Inches (in)"
            is_selected={unitsSelected["precipitation"] == "in"}
            handle_click={handle_unit_change}
            name="in"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
