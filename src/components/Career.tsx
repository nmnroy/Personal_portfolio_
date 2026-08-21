import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Agent Intern</h4>
                <h5>Tzuroni Ltd (Remote)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Designed a multi-step research agent that synthesizes findings from multiple web sources into a single answer. Implemented automated summarization and cross-source viewpoint comparison to surface agreements and contradictions. Built a report generation module compiling findings into structured, citation-backed reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
