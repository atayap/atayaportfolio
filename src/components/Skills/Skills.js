import React from 'react';
import './Skills.scss';
import reactlogo from './images/react-svgrepo-com.svg';
import htmlLogo from './images/html-5-logo-svgrepo-com.svg';
import cssLogo from './images/css-3.svg';
import jsLogo from './images/js-svgrepo-com.svg';
import pythonLogo from './images/python-5.svg';
import nodeLogo from './images/nodejs-logo-svgrepo-com.svg';
import angularLogo from './images/angular-icon.svg';
import tsLogo from './images/typescript-svgrepo-com.svg';
import phpLogo from './images/php-svgrepo-com.svg';
import gitLogo from './images/git-icon-logo-svgrepo-com.svg';
import figmaLogo from './images/Figma_Symbol_0.svg';
import vscodeLogo from './images/vscode.svg';
import laravel from './images/laravel-2.svg';
import xampp from './images/xampp-seeklogo.svg';
import mysql from './images/mysql-logo-svgrepo-com.svg';

const Skills = () => {
  const skills = [
    { 
      name: 'React.js', 
      logo: reactlogo,
      color: '#61DAFB'
    },
    { 
      name: 'HTML', 
      logo: htmlLogo,
      color: '#E34F26'
    },
    { 
      name: 'CSS/SCSS', 
      logo: cssLogo,
      color: '#1572B6'
    },
    { 
      name: 'JavaScript', 
      logo: jsLogo,
      color: '#F7DF1E'
    },
    { 
      name: 'Python', 
      logo: pythonLogo,
      color: '#3776AB'
    },
    { 
      name: 'Node.js', 
      logo: nodeLogo,
      color: '#339933'
    },
    { 
      name: 'Angular', 
      logo: angularLogo,
      color: '#DD0031'
    },
    { 
      name: 'TypeScript', 
      logo: tsLogo,
      color: '#3178C6'
    },
    { 
      name: 'PHP', 
      logo: phpLogo,
      color: '#777BB4'
    },
    { 
      name: 'Git', 
      logo: gitLogo,
      color: '#F05032'
    },
    { 
      name: 'Figma', 
      logo: figmaLogo,
      color: '#F24E1E'
    },
    { 
      name: 'VS Code', 
      logo: vscodeLogo,
      color: '#007ACC'
    },
    { 
      name: 'Laravel', 
      logo: laravel,
      color: '#007ACC'
    },
    { 
      name: 'Xampp', 
      logo: xampp,
      color: '#007ACC'
    },
    { 
      name: 'MySQL', 
      logo: mysql,
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