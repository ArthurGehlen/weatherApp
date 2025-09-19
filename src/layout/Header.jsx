// Utils
import { useState } from "react";
import "./Header.css";

// Images
import logo from "../assets/images/logo.svg";
import config_icon from "../assets/images/icon-units.svg";
import dropdown_icon from "../assets/images/icon-dropdown.svg";

// Components
import MenuButton from "../components/MenuButton";

function Header({ unit_change_handle, units }) {
  const [isMenuActive, setIsMenuActive] = useState(false);

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
            is_selected={units["temperature"] == "Celsius"}
            handle_click={unit_change_handle}
            name="Celsius"
          />
          <MenuButton
            label="Fahrenheit (°F)"
            is_selected={units["temperature"] == "Fahrenheit"}
            handle_click={unit_change_handle}
            name="Fahrenheit"
          />
          <div className="divider"></div>
          <p className="topic">Wind Speed</p>
          <MenuButton
            label="km/h"
            is_selected={units["wind_speed"] == "km"}
            handle_click={unit_change_handle}
            name="km"
          />
          <MenuButton
            label="mph"
            is_selected={units["wind_speed"] == "mph"}
            handle_click={unit_change_handle}
            name="mph"
          />
          <div className="divider"></div>
          <p className="topic">Precipitation</p>
          <MenuButton
            label="Millimeters (mm)"
            is_selected={units["precipitation"] == "mm"}
            handle_click={unit_change_handle}
            name="mm"
          />
          <MenuButton
            label="Inches (in)"
            is_selected={units["precipitation"] == "in"}
            handle_click={unit_change_handle}
            name="in"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
