function ProgressBar({ label, score }) {
  const percentage = (score / 9) * 100;

  const getColorClass = () => {
    if (score >= 8) return "excellent";
    if (score >= 7) return "very-good";
    if (score >= 6) return "good";
    return "bad";
  };

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span>{label}</span>
        <span>{score} / 9</span>
      </div>

      <div className="progress-track">
        <div
          className={`progress-fill ${getColorClass()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
