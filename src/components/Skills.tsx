import React, { useState } from 'react';
import { Cpu, Terminal, Database, ShieldCheck, Star } from 'lucide-react';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'languages' | 'tools';
  level: 'Advanced' | 'Intermediate' | 'Proficient';
  icon: string; // inline bootstrap icons
  color: string;
}

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'languages' | 'tools'>('all');

  const skillsData: Skill[] = [
    // Frontend
    { name: 'React.JS', category: 'frontend', level: 'Advanced', icon: 'bi-patch-check-fill', color: 'var(--cyan-glow)' },
    { name: 'Bootstrap', category: 'frontend', level: 'Advanced', icon: 'bi-bootstrap-fill', color: 'var(--blue-accent)' },
    { name: 'HTML5 & CSS3', category: 'frontend', level: 'Advanced', icon: 'bi-filetype-html', color: '#ff6c37' },
    { name: 'JavaScript', category: 'frontend', level: 'Advanced', icon: 'bi-filetype-js', color: '#f7df1e' },
    
    // Backend
    { name: 'NodeJS', category: 'backend', level: 'Advanced', icon: 'bi-hdd-network-fill', color: '#339933' },
    { name: 'Express', category: 'backend', level: 'Advanced', icon: 'bi-server', color: 'var(--text-purple)' },
    { name: 'MongoDB', category: 'backend', level: 'Advanced', icon: 'bi-database-fill-check', color: '#47a248' },
    { name: 'MySQL / SQL', category: 'backend', level: 'Proficient', icon: 'bi-database-fill', color: '#00758f' },
    
    // Languages
    { name: 'Python', category: 'languages', level: 'Advanced', icon: 'bi-braces-asterisk', color: '#3776ab' },
    { name: 'Java', category: 'languages', level: 'Intermediate', icon: 'bi-cup-hot-fill', color: '#f89820' },
    { name: 'C / C++', category: 'languages', level: 'Advanced', icon: 'bi-code-slash', color: '#00599c' },
    
    // Tools
    { name: 'Git & GitHub', category: 'tools', level: 'Advanced', icon: 'bi-github', color: '#ffffff' },
    { name: 'Vercel / Render', category: 'tools', level: 'Advanced', icon: 'bi-cloud-check-fill', color: 'var(--cyan-glow)' },
    { name: 'DSA & OOPs', category: 'tools', level: 'Advanced', icon: 'bi-diagram-3-fill', color: 'var(--purple-glow)' },
  ];

  const filteredSkills = filter === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="py-5 position-relative">
      <div className="nebula-cyan" style={{ bottom: '20%', left: '-10%' }} />

      <div className="container py-4">
        {/* Section Header */}
        <div className="section-title-container">
          <h2 className="section-title fw-extrabold text-white">Skills & Technologies</h2>
          <div className="glow-underline"></div>
        </div>

        {/* Tab Filters */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {[
            { id: 'all', label: 'All Stack', icon: <Star size={16} /> },
            { id: 'frontend', label: 'Frontend', icon: <Cpu size={16} /> },
            { id: 'backend', label: 'Backend', icon: <Database size={16} /> },
            { id: 'languages', label: 'Languages', icon: <Terminal size={16} /> },
            { id: 'tools', label: 'Tools & Concepts', icon: <ShieldCheck size={16} /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className="btn-cosmic-outline py-2 px-4 rounded-pill fs-7 d-flex align-items-center gap-2"
              style={{
                background: filter === tab.id ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
                borderColor: filter === tab.id ? 'var(--cyan-glow)' : 'rgba(255, 255, 255, 0.1)',
                boxShadow: filter === tab.id ? '0 0 15px rgba(0, 242, 254, 0.25)' : 'none',
                color: filter === tab.id ? '#fff' : 'var(--text-muted)',
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Glowing Skills Cards Grid */}
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="col">
              <div 
                className="space-card d-flex flex-column align-items-center justify-content-center text-center p-4 h-100"
                style={{
                  background: 'rgba(5, 5, 12, 0.65)',
                  transition: 'var(--transition-smooth)',
                }}
              >
                {/* Icon Container with glowing ring */}
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: '64px',
                    height: '64px',
                    border: `1.5px solid ${skill.color}`,
                    background: `rgba(6, 6, 18, 0.8)`,
                    boxShadow: `0 0 18px ${skill.color}35, inset 0 0 10px ${skill.color}15`,
                    fontSize: '1.5rem',
                    color: skill.color
                  }}
                >
                  <i className={`bi ${skill.icon}`} style={{ filter: `drop-shadow(0 0 4px ${skill.color}55)` }}></i>
                </div>

                {/* Skill details */}
                <h5 className="text-white fw-bold mb-2">{skill.name}</h5>
                <span 
                  className="badge px-3 py-1 rounded-pill"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    background: skill.level === 'Advanced' ? 'rgba(0, 242, 254, 0.08)' : 'rgba(189, 0, 255, 0.08)',
                    color: skill.level === 'Advanced' ? 'var(--cyan-glow)' : 'var(--purple-glow)',
                    border: skill.level === 'Advanced' ? '1px solid rgba(0, 242, 254, 0.25)' : '1px solid rgba(189, 0, 255, 0.25)'
                  }}
                >
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
