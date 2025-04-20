
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div 
      className={cn(
        "flex items-center font-bold text-xl text-primary", 
        className
      )}
    >
      MyApp
    </div>
  );
};
