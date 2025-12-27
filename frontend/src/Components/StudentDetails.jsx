import React from "react";
import { MdOutlineMicExternalOn, MdContentCopy } from "react-icons/md";
import { IoMdLock } from "react-icons/io";

function StudentDetails(student) {
  // console.log(student);
  return (
    <div className="student-details">
      <div>
        <h1>{student.studentData.name}</h1>
        <p>{student.studentData.testDate}</p>
        <p>Link to secure online certificate</p>
        <p className="highlight-text">
          <span className="lock-icon">
            {" "}
            <IoMdLock />
          </span>
          Report for {student.studentData.name} [{student.studentData.testDate}]
          <span className="copy-icon">
            <MdContentCopy />
          </span>
        </p>
        <p>Note: This link can be e-mailed and shared with others.</p>
      </div>
      <div className="hero-right-side">
        <span className="hero-icon">
          <MdOutlineMicExternalOn />
        </span>
        <p className="blue">
          Speech<span className="darkblue">Ace</span>
        </p>
      </div>
    </div>
  );
}

export default StudentDetails;
