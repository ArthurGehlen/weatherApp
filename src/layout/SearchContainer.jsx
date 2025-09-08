import "./SearchContainer.css";

// Images
import search_icon from "../assets/images/icon-search.svg";

function SearchContainer() {
  return (
    <div id="search_container">
      <div className="input_wrapper">
        <img src={search_icon} alt="Search" />
        <input type="text" placeholder="Search for a place..." />
      </div>
      <button type="submit">Search</button>
    </div>
  );
}

export default SearchContainer;
