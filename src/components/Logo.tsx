
import React from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={cn("flex flex-col items-center", className)}>
      <div className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/1be09e49-8a7f-42ef-8858-820041bdc76e.png" 
          alt="Dabhi Meditech Solutions Logo" 
          className="h-10 w-10 object-contain"
        />
        <span className="font-bold text-xl text-sky-500">
          Dabhi Meditech Solutions
        </span>
      </div>
    </Link>
  );
};
