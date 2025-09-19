import "./MenuButton.css";

import icon_checkmark from "../assets/images/icon-checkmark.svg";

function MenuButton({ label, handle_click, is_selected, name, is_unit }) {
  return (
    <button
      className={`menu_btn ${is_selected ? "selected" : ""}`}
      onClick={handle_click}
      name={name}
    >
      {label}
      {is_selected && is_unit && <img src={icon_checkmark} alt="Check" />}
    </button>
  );
}

export default MenuButton;
