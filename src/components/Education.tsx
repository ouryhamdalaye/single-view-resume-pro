
import React from 'react';

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

interface EducationProps {
  educationItems: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ educationItems }) => {
  return (
    <section id="education" className="section">
      <div className="container-cv">
        <h2 className="section-title">Formation</h2>
        <div className="space-y-6">
          {educationItems.map((item, index) => (
            <div key={index} className="experience-card">
              <div className="experience-dot"></div>
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-md font-medium text-blue-600">{item.institution}</h4>
                <span className="text-sm text-gray-500">{item.period}</span>
              </div>
              {item.description && (
                <p className="text-gray-700">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
