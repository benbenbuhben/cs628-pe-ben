import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Ben Hurst (He/Him)</h1>
        <p>Full-Stack Software Developer | Veteran</p>
      </header>

      <section className="section">
        <h2>Experience</h2>
        <div className="experience">
          <h3>Institute for Health Metrics and Evaluation</h3>
          <p>Seattle, Washington, United States | Full-time · 6 yrs 1 mo</p>

          <h4>Software Developer II</h4>
          <p>Jan 2022 - Present · 3 yrs 1 mo</p>
          <ul>
            <li>
              Helped institute a development culture prioritizing consistent
              design systems, accessibility, and performance
            </li>
            <li>
              Led effort to migrate geospatial tools to Mapbox GL JS, boosting
              application performance and usability
            </li>
            <li>
              Currently working on effort to migrate our team's Kubernetes
              cluster to Azure
            </li>
          </ul>

          <h4>Software Developer</h4>
          <p>Jan 2019 - Jan 2022 · 3 yrs 1 mo</p>
          <ul>
            <li>
              Developed web-based data visualization tools to present public
              health data to researchers, policy-makers, and the general public
            </li>
            <li>
              Overhauled UI of global health database tool based on
              human-centered design principles
            </li>
            <li>
              Helped institute a frontend development culture prioritizing
              consistent design systems, web accessibility, and performance
            </li>
          </ul>

          <p><strong>Primary Technologies Used:</strong> NodeJS, ReactJS, d3, PHP, Python, SQL, Express, Flask, Jenkins, Docker/Kubernetes</p>
          <p><strong>Personal Highlight:</strong></p>
          <ul>
            <li>
              Rapid development/deployment of COVID-19 forecasting tool in March
              2020
            </li>
            <li>
              Tool was presented to White House and effective in persuading
              national leadership to extend social distancing policies during
              the first wave of the pandemic
            </li>
            <li>Featured heavily in international media</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>City University of Seattle</h3>
          <p>Master's degree, Computer Science | Jun 2023 - Mar 2025 (In progress)</p>

          <h3>U.S. Air Force Institute of Technology</h3>
          <p>Master's degree, Applied Physics</p>

          <h3>Saint Louis University</h3>
          <p>Bachelor of Science - BS, Engineering Physics</p>

          <h3>Code Fellows</h3>
          <p>
            Certificate, Advanced Software Development in Full-Stack Python &
            JavaScript | 2018
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
