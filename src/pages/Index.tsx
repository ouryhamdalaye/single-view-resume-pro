
import React from 'react';
import Header from '@/components/Header';
import Summary from '@/components/Summary';
import Experience, { ExperienceItem } from '@/components/Experience';
import Skills, { SkillCategory } from '@/components/Skills';
import Education, { EducationItem } from '@/components/Education';
import Contact, { ContactInfo } from '@/components/Contact';
import Navigation from '@/components/Navigation';

// Sample data - replace with your own
const personalInfo = {
  name: "Jean Dupont",
  title: "Développeur Full Stack",
  avatarUrl: "" // Add your photo URL here
};

const summaryText = "Développeur passionné avec plus de 5 ans d'expérience dans la création d'applications web et mobiles. Je m'efforce de combiner excellence technique et vision utilisateur pour créer des produits intuitifs et performants. Mon approche est centrée sur l'innovation continue et l'apprentissage, avec une attention particulière à la qualité du code et à l'expérience utilisateur.";

const experiences: ExperienceItem[] = [
  {
    company: "Tech Innovations SAS",
    position: "Lead Developer",
    period: "2021 - Présent",
    description: "Diriger une équipe de développeurs sur plusieurs projets d'envergure utilisant React, Node.js et AWS. Mise en place de pratiques DevOps et amélioration continue des processus de développement.",
    tags: ["React", "Node.js", "AWS", "TypeScript", "Docker"]
  },
  {
    company: "WebSolutions Agency",
    position: "Développeur Full Stack",
    period: "2018 - 2021",
    description: "Développement d'applications web pour divers clients dans les secteurs de la finance et du e-commerce. Intégration de systèmes de paiement et optimisation des performances.",
    tags: ["JavaScript", "Vue.js", "PHP", "MySQL", "REST APIs"]
  },
  {
    company: "StartupVision",
    position: "Développeur Frontend Junior",
    period: "2016 - 2018",
    description: "Création d'interfaces utilisateur modernes et réactives pour une application SaaS de gestion de projet. Collaboration avec l'équipe UX pour améliorer l'expérience utilisateur.",
    tags: ["HTML/CSS", "JavaScript", "Angular", "Sass"]
  }
];

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "React", level: 90 },
      { name: "HTML/CSS", level: 85 },
      { name: "Vue.js", level: 75 },
      { name: "Angular", level: 60 }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "PHP", level: 70 },
      { name: "Python", level: 60 },
      { name: "SQL", level: 75 }
    ]
  },
  {
    name: "DevOps & Outils",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 65 }
    ]
  },
  {
    name: "Méthodologies",
    skills: [
      { name: "Agile/Scrum", level: 85 },
      { name: "Test Driven Development", level: 70 },
      { name: "Clean Code", level: 80 },
      { name: "UX Design", level: 65 }
    ]
  }
];

const educationItems: EducationItem[] = [
  {
    institution: "Université de Technologie",
    degree: "Master en Informatique - Spécialité Développement Web",
    period: "2014 - 2016",
    description: "Spécialisation en développement web moderne et architectures cloud."
  },
  {
    institution: "Institut des Sciences Digitales",
    degree: "Licence en Informatique",
    period: "2011 - 2014",
    description: "Formation générale en informatique avec des bases solides en programmation et algorithmes."
  }
];

const contactInfo: ContactInfo = {
  email: "jean.dupont@example.com",
  phone: "+33 6 12 34 56 78",
  linkedin: "https://www.linkedin.com/in/jeandupont/",
  github: "https://github.com/jeandupont",
  location: "Paris, France",
  website: "https://jeandupont-portfolio.com"
};

const sections = [
  { id: "summary", label: "Vision" },
  { id: "experience", label: "Expériences" },
  { id: "skills", label: "Compétences" },
  { id: "education", label: "Formation" },
  { id: "contact", label: "Contact" }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation sections={sections} />
      
      <div className="container-cv">
        <Header 
          name={personalInfo.name} 
          title={personalInfo.title} 
          avatarUrl={personalInfo.avatarUrl}
        />
      </div>
      
      <Summary text={summaryText} />
      <Experience experiences={experiences} />
      <Skills categories={skillCategories} />
      <Education educationItems={educationItems} />
      <Contact contactInfo={contactInfo} />
      
      <footer className="py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} {personalInfo.name} - CV en ligne</p>
      </footer>
    </div>
  );
};

export default Index;
