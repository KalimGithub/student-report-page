import React from "react";

function getFeedbackText(score) {
  if (score >= 8) {
    return `The candidate demonstrates excellent control over this skill with consistent accuracy.
Communication is clear, confident, and natural with minimal errors.
Performance meets a high standard expected at this level.`;
  } else if (score >= 7 && score < 8) {
    return `The candidate shows strong command over this skill with occasional minor lapses.
Overall delivery is clear and effective in most situations.
With small refinements, performance can reach an excellent level.`;
  } else if (score >= 6 && score < 7) {
    return `The candidate shows good command of this skill with minor inaccuracies.
Overall communication is effective, though there is some scope for improvement.
With focused practice, performance can reach a higher level.`;
  } else {
    return `The candidate shows limited control over this skill and lacks consistency.
Errors and hesitation affect clarity and overall effectiveness.
Regular practice and targeted improvement are recommended.`;
  }
}

function Feedback({ scores }) {
  console.log(scores);
  return (
    <div>
      <h3 className="bottom-border">Descriptive feedback</h3>
      <ul>
        <li>
          <strong>Pronunciation:</strong> (
          <span
            className={`${
              scores.pronunciation >= 7 ? "green-text" : "red-text"
            }`}
          >
            {scores.pronunciation}
          </span>
          )
          <br />
          {getFeedbackText(scores.pronunciation)}
        </li>
        <li>
          <strong>Fluency:</strong> (
          <span
            className={`${scores.fluency >= 7 ? "green-text" : "red-text"}`}
          >
            {scores.fluency}
          </span>
          )
          <br />
          {getFeedbackText(scores.fluency)}
        </li>
        <li>
          <strong>Vocabulary:</strong> (
          <span
            className={`${scores.vocabulary >= 7 ? "green-text" : "red-text"}`}
          >
            {scores.vocabulary}
          </span>
          )
          <br />
          {getFeedbackText(scores.vocabulary)}
        </li>
        <li>
          <strong>Grammar:</strong> (
          <span
            className={`${scores.grammar >= 7 ? "green-text" : "red-text"}`}
          >
            {scores.grammar}
          </span>
          )
          <br />
          {getFeedbackText(scores.grammar)}
        </li>
      </ul>
    </div>
  );
}

export default Feedback;
