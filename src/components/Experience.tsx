
import React from 'react';
import { Badge } from '@/components/ui/badge';

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  tags?: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="section">
      <div className="container-cv">
        <h2 className="section-title">Expériences Professionnelles</h2>
        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-dot"></div>
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-md font-medium text-blue-600">{exp.company}</h4>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <p className="text-gray-700 mb-3">{exp.description}</p>
              {exp.tags && (
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-blue-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
