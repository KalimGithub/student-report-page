import { useEffect, useState } from "react";
import Header from "./Components/Header";
import StudentDetails from "./Components/StudentDetails";
import SummaryScore from "./Components/SummaryScore";
import Feedback from "./Components/Feedback";
import "./index.css";

function App() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch("https://student-report-page.onrender.com/api/report")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReport(data);
      });
  }, []);

  if (!report) {
    return <p className="loader">Loading report....</p>;
  }

  return (
    <>
      <div className="app">
        <Header />
        <StudentDetails studentData={report.student} />
        <SummaryScore scores={report.scores} />
        <Feedback scores={report.scores} />
      </div>
    </>
  );
}

export default App;
