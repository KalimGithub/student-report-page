import React from "react";
import { FaBook } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import "../progressBarStyles.css";

function SummaryScore(score) {
  console.log(score);
  return (
    <div className="summary-score">
      <h3 className="bottom-border">Summary of scores</h3>
      {/* overall score div */}
      <div className="summary-container">
        <div className="overall-score">
          <div className="score-div">
            <p className="speechace-text">SpeechAce</p>
            <p className="score">{score.scores.overall}/9</p>
          </div>
          <p className="guide-text">
            <FaBook />
            <span> Scoring guide</span>
          </p>
        </div>

        {/* skill progress bar */}
        <div className="progress-bar">
          <ProgressBar
            label="Pronunciation"
            score={score.scores.pronunciation}
          />
          <ProgressBar label="Fluency" score={score.scores.fluency} />
          <ProgressBar label="Vocabulary" score={score.scores.vocabulary} />
          <ProgressBar label="Grammar" score={score.scores.grammar} />
        </div>
      </div>
    </div>
  );
}

export default SummaryScore;
