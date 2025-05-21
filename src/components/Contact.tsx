
import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Globe } from 'lucide-react';

export interface ContactInfo {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  location?: string;
  website?: string;
}

interface ContactProps {
  contactInfo: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({ contactInfo }) => {
  return (
    <section id="contact" className="section bg-blue-50">
      <div className="container-cv">
        <h2 className="section-title">Contact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contactInfo.email && (
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-gray-800">{contactInfo.email}</span>
            </a>
          )}
          
          {contactInfo.phone && (
            <a 
              href={`tel:${contactInfo.phone}`} 
              className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-gray-800">{contactInfo.phone}</span>
            </a>
          )}
          
          {contactInfo.linkedin && (
            <a 
              href={contactInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Linkedin className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-gray-800">LinkedIn</span>
            </a>
          )}
          
          {contactInfo.github && (
            <a 
              href={contactInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Github className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-gray-800">GitHub</span>
            </a>
          )}
          
          {contactInfo.location && (
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-gray-800">{contactInfo.location}</span>
            </div>
          )}
          
          {contactInfo.website && (
            <a 
              href={contactInfo.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Globe className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-gray-800">Portfolio</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
