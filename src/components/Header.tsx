
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface HeaderProps {
  name: string;
  title: string;
  avatarUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, avatarUrl }) => {
  return (
    <div className="pt-20 pb-8 md:pt-28 md:pb-16 text-center">
      <div className="mb-6 flex justify-center">
        <Avatar className="h-32 w-32 border-4 border-blue-100">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="text-3xl bg-blue-600 text-white">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-2">{name}</h1>
      <h2 className="text-xl md:text-2xl text-gray-500">{title}</h2>
    </div>
  );
};

export default Header;
