
import React from 'react';
import { cn } from '@/lib/utils';

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number; // 0-100
  }[];
}

interface SkillsProps {
  categories: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ categories }) => {
  return (
    <section id="skills" className="section">
      <div className="container-cv">
        <h2 className="section-title">Compétences Techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-lg font-semibold mb-4">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="skill-bar" 
                        style={{ width: `${skill.level}%` }}
                        data-aos="width"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
