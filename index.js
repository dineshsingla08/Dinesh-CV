// Import GoogleGenAI directly from a more stable CDN for ES modules
import { GoogleGenAI } from "https://cdn.jsdelivr.net/npm/@google/genai/dist/index.mjs";
import profilePic from  ./asset/profilepic.jpg;

// Destructure React hooks and components from the global React object
const { useEffect, useState, useCallback, StrictMode } = React;

const skills = [
  'HTML', 'CSS', 'JAVASCRIPT', 'Bootstrap', 'React JS', 'React Hooks',
  'React Redux', 'Typescript', 'SQL', 'Python', 'Node JS', 'JCL',
  'COBOL', 'VSAM', 'DB2', 'CICS', 'REXX'
];

const tools = [
  'Endevor', 'Visual Studio', 'HPQC', 'JIRA', 'CA7', 'Xped', 'TOPAZ',
  'ADDI', 'GIT', 'Silk Central', 'Jenkin', 'SonarQube', 'Confluence', 'Service Now'
];

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="resume-container">
      <aside className="left-column">
        <div className="header fade-in-section">
          <div className="profile-picture-container">
            <img 
              src={profilePic} 
              alt="Dinesh Kumar" 
              className="profile-picture" 
            />
          </div>
          <h1>DINESH KUMAR</h1>
          <p>FRONT END DEVELOPER</p>
        </div>

        <div className="sidebar-section fade-in-section">
          <h2>CONTACT</h2>
          <ul className="contact-list">
            <li><i className="fas fa-phone"></i> +91 9729526111</li>
            <li><i className="fas fa-envelope"></i> Dineshsingla08@gmail.com</li>
            <li><i className="fas fa-map-marker-alt"></i> Karnal</li>
          </ul>
        </div>

        <div className="sidebar-section fade-in-section">
          <h2>SOCIAL</h2>
          <ul className="social-list">
            <li>
              <a href="https://www.linkedin.com/in/dinesh-singla-3a5496b3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Dineshsingla08" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <i className="fab fa-github"></i>
              </a>
            </li>
             <li>
              <a href="https://www.facebook.com/dineshsingla08/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dinesh_singla08/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar-section fade-in-section">
          <h2>SKILLS</h2>
          <ul className="skills-list">
            {skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
        
        <div className="sidebar-section fade-in-section">
          <h2>TOOLS</h2>
          <ul className="skills-list">
            {tools.map(tool => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
        
        <div className="sidebar-section fade-in-section">
            <h2>INTERESTS</h2>
            <ul className="contact-list">
                <li><i className="fas fa-gamepad"></i> Badminton</li>
                <li><i className="fas fa-tv"></i> Binge Watch</li>
                <li><i className="fas fa-wrench"></i> Troubleshoot Gadgets</li>
            </ul>
        </div>

        <div className="sidebar-section fade-in-section">
            <h2>LANGUAGES</h2>
            <ul className="contact-list">
                <li><i className="fas fa-language"></i> English</li>
                <li><i className="fas fa-language"></i> Hindi</li>
            </ul>
        </div>
      </aside>

      <main className="right-column">
        <section className="main-section fade-in-section">
          <h2><i className="fas fa-user"></i> PROFILE</h2>
          <p className="profile-text">
            Frontend Developer with 8.5 years of IT experience, including a strong foundation in Mainframe development within the banking domain. Over the past 4 years, I've transitioned into frontend development with a focus on React.js, leveraging my backend expertise to build scalable, modern web applications. My background enables me to effectively integrate and modernize legacy systems through contemporary UI solutions.
          </p>
        </section>

        <section className="main-section fade-in-section">
          <h2><i className="fas fa-briefcase"></i> WORK EXPERIENCE</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-item-header">
                <h3>Software Engineer</h3>
                <span>NOV 2021 - PRESENT</span>
              </div>
              <h4>Natwest Group</h4>
              <ul>
                <li>Spearheaded the development of responsive, user-centric web interfaces using React.js, JavaScript/TypeScript, HTML, and CSS.</li>
                <li>Integrated frontend components with backend APIs to enable efficient and reliable data exchange.</li>
                <li>Collaborated closely with UI/UX designers and backend engineers to deliver cohesive and intuitive user experiences.</li>
                <li>Performed unit testing and debugging with Jest and React Testing Library to ensure robust and maintainable code.</li>
                <li>Configured AWS S3 for hosting static sites, automating deployment workflows and applying security best practices.</li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-item-header">
                <h3>Software Development Senior Analyst</h3>
                <span>MAR 2020 - NOV 2021</span>
              </div>
              <h4>NTT DATA</h4>
              <ul>
                <li>Developed and maintained Mainframe applications (COBOL, JCL, DB2, CICS) for the Lifesys insurance platform.</li>
                <li>Managed processing of 4M+ insurance policies, ensuring performance and data integrity.</li>
                <li>Designed scalable solutions and conducted impact analysis for complex requirements.</li>
                <li>Provided production support and resolved critical issues promptly.</li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-item-header">
                <h3>System Engineer</h3>
                 <span>DEC 2016 - MAR 2020</span>
              </div>
              <h4>Tata Consultancy Services</h4>
              <ul>
                <li>Participated in all phases of the SDLC, including requirements analysis, development, and testing.</li>
                <li>Created and enhanced COBOL programs and batch jobs for new feeder applications.</li>
                <li>Supported User Acceptance Testing and ensured proper documentation for stakeholder communication.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="main-section fade-in-section">
          <h2><i className="fas fa-graduation-cap"></i> EDUCATION</h2>
           <div className="timeline">
             <div className="timeline-item">
              <div className="timeline-item-header">
                <h3>B.TECH (Electronics and Communication Engg.)</h3>
                 <span>2013 - 2016</span>
              </div>
              <h4>JMIT Radaur | Kurukshetra University</h4>
              <p>GPA: 70.80%</p>
            </div>
             <div className="timeline-item">
              <div className="timeline-item-header">
                <h3>Diploma (Electronics and Communication Engg.)</h3>
                 <span>2010 - 2013</span>
              </div>
              <h4>GBN Govt. Polytechnic, Nilokheri, Karnal</h4>
               <p>GPA: 76.33%</p>
            </div>
             <div className="timeline-item">
              <div className="timeline-item-header">
                <h3>High School</h3>
                 <span>2000 - 2010</span>
              </div>
              <h4>Gita Modern High School, Taraori, Karnal</h4>
               <p>GPA: 85.20%</p>
            </div>
          </div>
        </section>

        <section className="main-section fade-in-section">
          <h2><i className="fas fa-award"></i> ACHIEVEMENTS AND CERTIFICATIONS</h2>
          <ul className="achievements-list">
            <li>Recognized with the On the Spot Award for technical excellence.</li>
            <li>Honored with the Star of the Month Award for automating redundant tasks.</li>
            <li>Engaged in various project implementation activities.</li>
            <li>Earned Coursera certification in Python for Everybody.</li>
            <li>Udemy Certified for Web Development using React Js</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  // Use the global ReactDOM object to create the root
  const root = ReactDOM.createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
