
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  sections: {
    id: string;
    label: string;
  }[];
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled
      setIsScrolled(window.scrollY > 10);
      
      // Find which section is currently in view
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));
      
      const currentSection = sectionElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "py-2 bg-white shadow-md" : "py-4 bg-transparent"
    )}>
      <div className="container-cv flex justify-center">
        <ul className="flex space-x-1 md:space-x-6">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-md",
                  activeSection === section.id 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                )}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
