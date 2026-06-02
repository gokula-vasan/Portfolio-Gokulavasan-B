import React from 'react';
import { BookOpen, Briefcase, Award, ExternalLink, Code } from 'lucide-react';

export const About: React.FC = () => {
  const codingProfiles = [
    {
      name: 'Skillrack',
      solved: 900,
      link: '#',
      color: 'var(--cyan-glow)',
      rankLabel: '900+ Problems Solved',
    },
    {
      name: 'CodeChef',
      solved: 250,
      link: '#',
      color: 'var(--purple-glow)',
      rankLabel: '250+ Problems Solved',
    },
    {
      name: 'LeetCode',
      solved: 160,
      link: '#',
      color: 'var(--blue-accent)',
      rankLabel: '160+ Problems Solved',
    },
    {
      name: 'HackerRank',
      solved: 30,
      link: '#',
      color: '#2ec866',
      rankLabel: '30+ Problems Solved',
    },
  ];

  return (
    <section id="about" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="section-title-container">
          <h2 className="section-title fw-extrabold text-white">About Me</h2>
          <div className="glow-underline"></div>
        </div>

        {/* Narrative & Timeline Grid */}
        <div className="row g-5 mb-5 align-items-stretch">
          {/* About Narrative */}
          <div className="col-lg-6 d-flex flex-column justify-content-between">
            <div className="space-card h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="text-white mb-4 fw-bold d-flex align-items-center gap-2">
                  <Code className="text-cyan" /> My Journey
                </h3>
                <p className="text-muted mb-4 fs-6" style={{ lineHeight: 1.8 }}>
                  I am a computer science student specializing in **Artificial Intelligence and Machine Learning** at **Sri Eshwar College of Engineering**. I thrive in translating ideas into highly functional, robust MERN (MongoDB, Express, React, Node.js) web applications.
                </p>
                <p className="text-muted mb-4 fs-6" style={{ lineHeight: 1.8 }}>
                  Through rigorous coursework, algorithmic coding on various competitive platforms, and internships, I've honed my skills in backend structures, frontend responsiveness, and scalable logic architectures.
                </p>
              </div>

              {/* Internship Showcase Box */}
              <div 
                className="p-3 rounded-3 border mt-auto" 
                style={{ 
                  background: 'rgba(189, 0, 255, 0.04)', 
                  borderColor: 'rgba(189, 0, 255, 0.15)' 
                }}
              >
                <h6 className="text-purple fw-bold mb-2 d-flex align-items-center gap-2">
                  <Briefcase size={16} /> MERN INTERN EXPERIENCES
                </h6>
                <p className="text-white mb-0 fs-7" style={{ lineHeight: 1.5 }}>
                  Successfully completed a **MERN Internship** at **EduCentro** focused on professional skill development, industry-oriented learning, and hands-on full-stack product building.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="col-lg-6">
            <div className="space-card space-card-purple h-100">
              <h3 className="text-white mb-4 fw-bold d-flex align-items-center gap-2">
                <BookOpen className="text-purple" /> Education Timeline
              </h3>

              <div className="timeline position-relative ps-3 border-start border-secondary-subtle border-opacity-25 ms-2">
                {/* College Card */}
                <div className="timeline-item mb-4 position-relative">
                  <div 
                    className="position-absolute start-0 translate-middle-x rounded-circle"
                    style={{
                      width: '12px',
                      height: '12px',
                      background: 'var(--purple-glow)',
                      boxShadow: '0 0 8px var(--purple-glow)',
                      left: '-22px',
                      top: '6px'
                    }}
                  />
                  <div className="d-flex justify-content-between align-items-start flex-wrap mb-1">
                    <h5 className="text-white fw-bold mb-0">Sri Eshwar College of Engineering</h5>
                    <span className="badge bg-purple-dim text-white py-1 px-2 rounded-2 fs-8">2024 - 2028</span>
                  </div>
                  <p className="text-cyan fs-7 mb-1">College Education | B.E. AI & ML</p>
                  <p className="text-muted fs-7 mb-0">Scored an impressive **7.6 CGPA** up to the IIIrd Semester.</p>
                </div>

                {/* Government Boys School */}
                <div className="timeline-item mb-4 position-relative">
                  <div 
                    className="position-absolute start-0 translate-middle-x rounded-circle"
                    style={{
                      width: '12px',
                      height: '12px',
                      background: 'rgba(255,255,255,0.4)',
                      left: '-22px',
                      top: '6px'
                    }}
                  />
                  <div className="d-flex justify-content-between align-items-start flex-wrap mb-1">
                    <h6 className="text-white fw-bold mb-0">Government Boys Higher Secondary School</h6>
                    <span className="badge bg-secondary text-white py-1 px-2 rounded-2 fs-8" style={{ background: '#2d3748' }}>2022 - 2024</span>
                  </div>
                  <p className="text-purple fs-7 mb-1">HSC Schooling</p>
                  <p className="text-muted fs-7 mb-0">Achieved a brilliant **89.5%** score in Higher Secondary Board examinations.</p>
                </div>

                {/* Government School */}
                <div className="timeline-item position-relative">
                  <div 
                    className="position-absolute start-0 translate-middle-x rounded-circle"
                    style={{
                      width: '12px',
                      height: '12px',
                      background: 'rgba(255,255,255,0.4)',
                      left: '-22px',
                      top: '6px'
                    }}
                  />
                  <div className="d-flex justify-content-between align-items-start flex-wrap mb-1">
                    <h6 className="text-white fw-bold mb-0">Government High School</h6>
                    <span className="badge bg-secondary text-white py-1 px-2 rounded-2 fs-8" style={{ background: '#2d3748' }}>2021 - 2022</span>
                  </div>
                  <p className="text-purple fs-7 mb-1">SSLC Schooling</p>
                  <p className="text-muted fs-7 mb-0">Successfully completed with **84.4%** score.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coding Profiles Grid */}
        <h4 className="text-white fw-bold mb-4 mt-5 text-center text-lg-start d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
          <Award className="text-cyan" /> Coding Profiles & Standings
        </h4>
        <div className="row g-4 justify-content-center">
          {codingProfiles.map((profile) => (
            <div key={profile.name} className="col-sm-6 col-md-3">
              <a 
                href={profile.link}
                className="space-card d-flex flex-column align-items-center text-center text-decoration-none p-4 d-block h-100"
                style={{
                  borderColor: `rgba(${profile.name === 'Skillrack' || profile.name === 'LeetCode' ? '0, 242, 254' : '189, 0, 255'}, 0.15)`,
                  background: 'rgba(6, 6, 18, 0.45)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '45px',
                    height: '45px',
                    border: `1px solid ${profile.color}`,
                    background: `rgba(${profile.name === 'Skillrack' || profile.name === 'LeetCode' ? '0, 242, 254' : '189, 0, 255'}, 0.05)`,
                    boxShadow: `0 0 10px ${profile.color}44`
                  }}
                >
                  <span className="fw-black text-white fs-7">{profile.name[0]}</span>
                </div>
                <h5 className="text-white fw-bold mb-1">{profile.name}</h5>
                <span className="fs-7 fw-semibold mb-2" style={{ color: profile.color }}>
                  {profile.rankLabel}
                </span>
                <span className="text-muted fs-8 d-flex align-items-center gap-1">
                  View Profile <ExternalLink size={12} />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
