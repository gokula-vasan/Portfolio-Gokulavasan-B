import React from 'react';
import { Award, ShieldCheck, Calendar, MapPin, CheckCircle } from 'lucide-react';

interface Certification {
  title: string;
  issuer: 'Udemy' | 'NPTEL';
  year: number;
}

interface Achievement {
  title: string;
  event: string;
  year: number;
  description: string;
}

export const Certifications: React.FC = () => {
  const certificationsData: Certification[] = [
    { title: 'Python', issuer: 'Udemy', year: 2025 },
    { title: 'Mastering Data Structures & Algorithms using C and C++', issuer: 'Udemy', year: 2025 },
    { title: 'Programming In Java', issuer: 'NPTEL', year: 2025 },
    { title: 'Design Thinking - A Primer', issuer: 'NPTEL', year: 2026 },
  ];

  const achievementsData: Achievement[] = [
    {
      title: 'National Hackathon Participant',
      event: '24-hour National Level Hackathon at JJ Engineering College, Trichy',
      year: 2026,
      description: 'Collaborated in building scalable solution prototypes within a high-stakes 24-hour competitive environment.'
    },
    {
      title: 'Smart India Hackathon Semifinalist',
      event: 'Shortlisted to Second Round - Smart India Hackathon (SIH 2025)',
      year: 2025,
      description: 'Evaluated among top tier student teams nationwide for engineering digital solutions targeting government problem statements.'
    }
  ];

  return (
    <section id="certifications" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Title */}
        <div className="section-title-container">
          <h2 className="section-title fw-extrabold text-white">Certifications & Achievements</h2>
          <div className="glow-underline"></div>
        </div>

        <div className="row g-5">
          {/* Achievements Column */}
          <div className="col-lg-7">
            <div className="space-card h-100">
              <h3 className="text-white mb-4 fw-bold d-flex align-items-center gap-2">
                <Award className="text-cyan" /> Honors & Achievements
              </h3>
              
              <div className="d-flex flex-column gap-4">
                {achievementsData.map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-3 border transition-all"
                    style={{
                      background: 'rgba(6, 6, 18, 0.45)',
                      borderColor: 'rgba(0, 242, 254, 0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--cyan-glow)';
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                      <h5 className="text-white fw-bold mb-0">{item.title}</h5>
                      <span className="badge bg-purple-dim text-white py-1 px-2 rounded-2 fs-8 d-flex align-items-center gap-1">
                        <Calendar size={12} /> {item.year}
                      </span>
                    </div>
                    
                    <p className="text-cyan fs-7 mb-2 fw-medium d-flex align-items-center gap-1">
                      <MapPin size={12} /> {item.event}
                    </p>
                    
                    <p className="text-muted fs-7 mb-0" style={{ lineHeight: '1.6' }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="col-lg-5">
            <div className="space-card space-card-purple h-100">
              <h3 className="text-white mb-4 fw-bold d-flex align-items-center gap-2">
                <ShieldCheck className="text-purple" /> Professional Courses
              </h3>

              <div className="d-flex flex-column gap-3">
                {certificationsData.map((cert, index) => (
                  <div 
                    key={index}
                    className="d-flex align-items-center justify-content-between p-3 rounded-3 border"
                    style={{
                      background: 'rgba(6, 6, 18, 0.45)',
                      borderColor: 'rgba(189, 0, 255, 0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--purple-glow)';
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(189, 0, 255, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(189, 0, 255, 0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <CheckCircle size={20} className="text-purple flex-shrink-0" />
                      <div>
                        <h6 className="text-white fw-bold mb-1">{cert.title}</h6>
                        <span className="text-muted fs-8 fw-semibold" style={{ letterSpacing: '0.05em' }}>
                          ISSUER: <span className="text-cyan">{cert.issuer.toUpperCase()}</span>
                        </span>
                      </div>
                    </div>
                    <span 
                      className="px-2.5 py-1 rounded-2 fs-8 fw-bold"
                      style={{ 
                        background: 'rgba(255,255,255,0.03)', 
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
