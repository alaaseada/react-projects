import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "./Loading";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = "https://course-api.com/react-tabs-project";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [activeID, setActiveID] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const get_data = async () => {
    try {
      const raw_data = await fetch(url);
      const json_data = await raw_data.json();
      setJobs(json_data);
      setActiveID(json_data[0].id);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    get_data();
  }, []);

  const activeJob = jobs.filter((job) => job.id === activeID)[0];

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job) => (
            <button
              key={job.id}
              type="button"
              className={`job-btn ${activeID === job.id ? "active-btn" : ""}`}
              onClick={(e) => {
                setActiveID(job.id);
              }}
            >
              {job.company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{activeJob.title}</h3>
          <h4>{activeJob.company}</h4>
          <p className="job-date">{activeJob.dates}</p>
          {activeJob.duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" class="btn">
        more info
      </button>
    </div>
  );
}

export default App;
