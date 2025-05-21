
import React from 'react';

interface SummaryProps {
  text: string;
}

const Summary: React.FC<SummaryProps> = ({ text }) => {
  return (
    <section id="summary" className="section">
      <div className="container-cv">
        <h2 className="section-title">Ma Vision</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
