import "./Header.css"

// Images
import logo from "../assets/images/logo.svg"
import config_icon from "../assets/images/icon-units.svg"
import dropdown_icon from "../assets/images/icon-dropdown.svg"

function Header() {
  return <header id="header">
    <img src={logo} alt="Logo" />

    <button className="unit_configs_btn">
        <img src={config_icon} alt="Img" />
        <span>Units</span>
        <img src={dropdown_icon} alt="Drop" />
    </button>
  </header>;
}

export default Header;
