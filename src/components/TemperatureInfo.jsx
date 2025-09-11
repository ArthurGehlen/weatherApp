import "./TemperatureInfo.css"

function TemperatureInfo({ label, info }) {
  return (
    <div className="temperature_info">
      <p>{label}</p>
      <h2>{info}</h2>
    </div>
  );
}

export default TemperatureInfo;
