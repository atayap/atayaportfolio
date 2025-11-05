import React from 'react';
import './Skills.scss';
import skill1 from '../Skills/images/skills/react-svgrepo-com.svg';

const Skills = () => {
  const skills = [
    { 
      name: 'React.js', 
      logo: {skill1},
      color: '#61DAFB'
    },
    { 
      name: 'HTML', 
      logo: '/images/skills/html-5-logo-svgrepo-com.svg',
      color: '#E34F26'
    },
    { 
      name: 'CSS/SCSS', 
      logo: '/images/skills/css-3.svg',
      color: '#1572B6'
    },
    { 
      name: 'JavaScript', 
      logo: '/images/skills/js-svgrepo-com.svg',
      color: '#F7DF1E'
    },
    { 
      name: 'Python', 
      logo: '/images/skills/python-5.svg',
      color: '#3776AB'
    },
    { 
      name: 'Node.js', 
      logo: '/images/skills/nodejs-logo-svgrepo-com.svg',
      color: '#339933'
    },
    { 
      name: 'Angular', 
      logo: '/images/skills/angular-icon.svg',
      color: '#DD0031'
    },
    { 
      name: 'TypeScript', 
      logo: '/images/skills/typescript-svgrepo-com.svg',
      color: '#3178C6'
    },
    { 
      name: 'PHP', 
      logo: '/images/skills/php-svgrepo-com.svg',
      color: '#777BB4'
    },
    { 
      name: 'Git', 
      logo: '/images/skills/git-icon-logo-svgrepo-com.svg',
      color: '#F05032'
    },
    { 
      name: 'Figma', 
      logo: '/images/skills/Figma_Symbol_0.svg',
      color: '#F24E1E'
    },
    { 
      name: 'VS Code', 
      logo: '/images/skills/vscode.svg',
      color: '#007ACC'
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-content">
          <h2 className="skills-title">Skills & Technologies</h2>
          
          <div className="skills-grid-simple">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-item-simple"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-logo-simple">
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} logo`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div 
                    className="skill-logo-fallback-simple"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.name.charAt(0)}
                  </div>
                </div>
                <span className="skill-name-simple">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="skills-note-simple">
            <div className="note-icon">🚀</div>
            <div className="note-content">
              <h4>Continuous Growth & Learning</h4>
              <p>
                I'm constantly expanding my skills and staying updated with the latest technologies 
                in the ever-evolving world of web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;