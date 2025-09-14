import "./HourlyTemperature.css";

function HourlyTemperature({ icon, hour, temperature }) {
  return (
    <div className="hourly_temperature">
      <div className="hour_wrapper">
        <img src={icon} alt="Icon" /> <span>{hour}</span>
      </div>
      <p>{temperature}</p>
    </div>
  );
}

export default HourlyTemperature;
