import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm studying Computer Science & Data Science at MAIT, Delhi. Over the past six months, I've built and shipped three products solo: an AI research agent, a cross platform interview prep app, and an SEO analytics tool.
          <br /><br />
          I enjoy taking ideas from concept to deployment, from the backend and data model to interfaces people can actually use. I mainly work with React, Next.js, Node.js, and Python, using data and machine learning when they can make a product smarter.
        </p>
      </div>
    </div>
  );
};

export default About;
