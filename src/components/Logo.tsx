
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
          className="h-16 w-16 object-contain" // Increased from h-10 w-10 to h-16 w-16
        />
        <div className="flex flex-col">
          <span className="font-bold text-xl text-sky-500 leading-tight">
            Dabhi Meditech
          </span>
          <span className="font-bold text-xl text-sky-500 leading-tight">
            Solutions
          </span>
        </div>
      </div>
    </Link>
  );
};
