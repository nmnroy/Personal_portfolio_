import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              title: "FMCG/CPG RFP Automation Agent",
              category: "AI Agent",
              tools: "Python, LangChain, ChromaDB, Pandas, Streamlit, RAG, PostgreSQL",
              image: "/images/fmcg_agent_ui.png",
              github: "https://github.com/nmnroy/fmcg-",
              demo: "https://fmcgagenticai.streamlit.app/",
            },
            {
              title: "AI-Powered Interview Prep Ecosystem",
              category: "Full-Stack App",
              tools: "Next.js, React Native, TypeScript, Supabase, PostgreSQL, Prisma, Gemini API",
              image: "/images/interview_prep_ui.png",
              github: "https://github.com/nmnroy/-AI-Powered-Interview",
              demo: "https://ai-powered-interview-46g2.vercel.app/",
            },
            {
              title: "BlogzzUP — AI SEO Engine",
              category: "SaaS",
              tools: "React, Firebase, JavaScript, LLM Workflows",
              image: "/images/blogzzup_seo_ui.png",
              github: "https://github.com/nmnroy/BlogzzUP",
              demo: "https://blogzzup.netlify.app",
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <div className="work-project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
