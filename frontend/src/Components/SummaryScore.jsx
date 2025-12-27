import React from "react";
import { FaBook } from "react-icons/fa";

function SummaryScore(score) {
  // console.log(score);
  return (
    <div className="summary-score">
      <h3 className="bottom-border">Summary of scores</h3>
      {/* overall score div */}
      <div className="summary-container">
        <div className="overall-score">
          <div className="score-bar-section">
            <p>Speechace</p>
            <p>{score.scores.overall}/9</p>
          </div>
          <p className="guide-text">
            <FaBook />
            <span> Scoring guide</span>
          </p>
        </div>
        {/* skill progress bar */}
        <div className="progress-bar">
          <h3>progress bar of skill </h3>
          <p>
            pronunciation (<span>{score.scores.pronunciation}/9</span>)
          </p>
          <p>
            Flueny (<span>{score.scores.fluency}/9</span>)
          </p>
          <p>
            Vocabullary (<span>{score.scores.vocabulary}/9</span>)
          </p>
          <p>
            Grammer (<span>{score.scores.grammar}/9</span>)
          </p>
        </div>
      </div>
    </div>
  );
}

export default SummaryScore;
