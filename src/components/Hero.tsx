import React from 'react';
import { ArrowRight, Terminal, Database, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden pt-5"
    >
      {/* Aurora Nebulas */}
      <div className="nebula-cyan" style={{ top: '10%', left: '-10%' }} />
      <div className="nebula-purple" style={{ bottom: '10%', right: '-10%' }} />

      <div className="container position-relative z-1 pt-5">
        <div className="row align-items-center justify-content-between g-5">
          {/* Text Content */}
          <div className="col-lg-7 text-center text-lg-start">
            <span
              className="px-3 py-1.5 rounded-pill fs-7 fw-semibold border border-opacity-25 text-cyan"
              style={{
                background: 'rgba(0, 242, 254, 0.06)',
                borderColor: 'var(--cyan-glow)',
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <Terminal size={14} /> MERN STACK DEVELOPER & AI-ML ENTHUSIAST
            </span>

            <h1 className="display-3 fw-extrabold mb-3" style={{ lineHeight: 1.1 }}>
              Hi, I'm <br />
              <span className="space-gradient-text">Gokulavasan B</span>
            </h1>

            <p className="lead text-muted fs-5 mb-4" style={{ maxWidth: '600px', lineHeight: '1.7' }}>
              A passionate developer creating responsive full-stack applications and solving algorithmic challenges. Studying Computer Science with focus on Artificial Intelligence and Machine Learning at <span className="text-white fw-medium">Sri Eshwar College of Engineering</span>.
            </p>

            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-5">
              <a href="#projects" className="btn-cosmic btn-lg">
                View My Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-cosmic-outline btn-lg">
                Let's Talk
              </a>
            </div>

            {/* Quick stats banner */}
            <div className="row g-3 text-center text-lg-start justify-content-center justify-content-lg-start">
              <div className="col-4 col-sm-3">
                <h4 className="fw-bold mb-0 text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.1)' }}>900+</h4>
                <small className="text-muted">Skillrack Solved</small>
              </div>
              <div className="col-4 col-sm-3">
                <h4 className="fw-bold mb-0 text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.1)' }}>250+</h4>
                <small className="text-muted">CodeChef Solved</small>
              </div>
              <div className="col-4 col-sm-3">
                <h4 className="fw-bold mb-0 text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.1)' }}>160+</h4>
                <small className="text-muted">LeetCode Solved</small>
              </div>
            </div>
          </div>

          {/* Visual Interactive Column */}
          <div className="col-lg-5 d-flex justify-content-center">
            <div className="position-relative" style={{ width: '320px', height: '320px' }}>
              {/* Outer decorative neon glows */}
              <div
                className="position-absolute top-50 left-50 translate-middle rounded-circle"
                style={{
                  width: '280px',
                  height: '280px',
                  border: '1.5px dashed rgba(0, 242, 254, 0.25)',
                  animation: 'spin 25s linear infinite',
                }}
              />
              
              <div
                className="position-absolute top-50 left-50 translate-middle rounded-circle"
                style={{
                  width: '220px',
                  height: '220px',
                  border: '1px solid rgba(189, 0, 255, 0.2)',
                  animation: 'spin-reverse 15s linear infinite',
                }}
              />

              {/* Central glowing glass card framed profile photo */}
              <div
                className="position-absolute top-50 start-50 translate-middle overflow-hidden floating-icon"
                style={{
                  width: '230px',
                  height: '350px',
                  borderRadius: '30px',
                  boxShadow: '0 0 45px rgba(0, 242, 254, 0.25)',
                  border: '2px solid var(--cyan-glow)',
                  background: 'rgba(5, 5, 15, 0.75)',
                  zIndex: 2,
                }}
              >
                <img 
                  src="/profile.jpg" 
                  alt="Gokulavasan B" 
                  className="w-100 h-100 object-fit-cover" 
                  style={{ objectPosition: 'center 10%' }}
                />
                <div 
                  className="position-absolute bottom-0 start-50 translate-middle-x mb-2 px-3 py-1 rounded-pill border fs-8 fw-bold text-cyan" 
                  style={{ 
                    background: 'rgba(2, 2, 8, 0.85)', 
                    borderColor: 'rgba(0, 242, 254, 0.4)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  GOKULAVASAN B
                </div>
              </div>

              {/* Smaller floating orbits representing details */}
              <div
                className="space-card position-absolute d-flex align-items-center justify-content-center p-2 rounded-circle"
                style={{
                  width: '50px',
                  height: '50px',
                  top: '10%',
                  right: '5%',
                  border: '1px solid var(--border-purple)',
                  boxShadow: '0 0 10px rgba(189, 0, 255, 0.2)',
                  background: 'rgba(5, 5, 15, 0.8)',
                  animation: 'float 3s ease-in-out infinite alternate',
                }}
              >
                <Database size={20} className="text-purple" />
              </div>

              <div
                className="space-card position-absolute d-flex align-items-center justify-content-center p-2 rounded-circle"
                style={{
                  width: '50px',
                  height: '50px',
                  bottom: '10%',
                  left: '5%',
                  border: '1px solid var(--border-glow)',
                  boxShadow: '0 0 10px rgba(0, 242, 254, 0.2)',
                  background: 'rgba(5, 5, 15, 0.8)',
                  animation: 'float 4s ease-in-out infinite alternate',
                }}
              >
                <ShieldCheck size={20} className="text-cyan" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Custom Spin CSS */}
      <style>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
