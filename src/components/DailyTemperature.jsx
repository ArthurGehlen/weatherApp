import "./DailyTemperature.css";

function DailyTemperature({
  week_day,
  min_temperature,
  max_temperature,
  icon,
}) {
  return (
    <div className="daily_temperature">
      <p>{week_day}</p>
      <img src={icon} alt="Icon" />
      <div className="temperature_stat">
        <span>{max_temperature}</span>
        <span>{min_temperature}</span>
      </div>
    </div>
  );
}

export default DailyTemperature;
